const express = require('express')
const fs = require('fs')
const app = express()

let server = '';
    if (!fs.existsSync('/home/cbdroot/cert/nodepem/privatekey.pem')) {
        server = require('http').createServer(app)
    }else {
        let options = {
            key: fs.readFileSync('/home/cbdroot/cert/nodepem/privatekey.pem'),
            cert: fs.readFileSync('/home/cbdroot/cert/nodepem/publiccert.pem'),
        }
        //file exists
        server = require('https').createServer(options, app)
    }

const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios').default;
//const warpliteurl = 'https://api.chargebackdefense.com/api-v1/';
const warpliteurl = 'https://api.chargebackdefense.com/v2/';
//const warpliteurl = 'https://cbd.warplite.com/api-v1/';
// todo we should maybe have this in a .env or dynamically generated somehow. Right now it's just a hard coded super admin auth token with no expiration
let baseT = 'dVFKY2RpVVRlY0k0Q1JqOk15aUZRVUVMRlgyRWk1SnAxZGdESmJpMkQ='
app.use(cors())
app.use(bodyParser.json({limit: '50mb'})) // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    limit: '50mb',
    extended: true
}))
app.post('/login', function (req, res) {
    //console.log('params', req.body.username);
    let data = {};
    let base = Buffer.from(req.body.username + ":" + req.body.password).toString('base64');
    //console.log(base);
    let config = {
        method: 'get',
        url: warpliteurl + 'login',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + base
        },
        crossDomain: true,
        data: data
    };
    axios(config)
        .then(function (response) {
            console.log('success');
            let retData = {...response.data, base}
            res.json(retData)
        })
        .catch(function (error) {
            console.log('fail');
            //console.log(error);
            res.json(error)
        });
});
app.post('/:method', function (req, res) {
    let pData = req.body

    let method = req.params.method
    //console.log(method+' run me = ', pData);
    //let data = JSON.stringify(pData);
    let data = pData.body;
    // 08/01/2020 we are not using this atm but it might be needed in the future.
    // In case it causes problems server side, we just decided not to send it for now
    // let token = req.headers.token;
    /*
    let config = {
        method: 'get',
        url: warpliteurl + method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic '+baseT,
            'token': token,
            'Cookie': 'warpToken='+token+';'
        },
        crossDomain: true,
        data: data
    };
    */
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + baseT,
        // 'token': token,
    }
    //'Cookie': 'warpToken='+token+';'
    axios.get(warpliteurl + method, {params: data, headers: headers})
        .then(function (response) {
            console.log('success');
            //console.log(response.data);
            res.json(response.data)
        })
        .catch(function (error) {
            console.log('fail');
            console.log(error);
            res.json(error)
        });
});
app.post('/:method/:val', function (req, res) {
    let pData = req.body

    let method = req.params.method
    let val = req.params.val

    let data = pData.body;
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + baseT
    }
    
    if (method === 'post') {
        axios.post(warpliteurl + val, data, { headers })
            .then(response => {
                console.log('success');
                res.json(response.data)
            })
            .catch(err => {
                console.log('Fetch Sites Error: ', err);
                res.json(err)
            });
    } else {
        axios.get(warpliteurl + method + '/' + val, { params: data, headers: headers })
            .then(function (response) {
                console.log('success');
                res.json(response.data)
            })
            .catch(function (error) {
                console.log('fail');
                console.log(error);
                res.json(error)
            });
    }
});
app.post('/:method/:val/:id', function (req, res) {
    let pData = req.body

    let method = req.params.method
    let val = req.params.val
    let id = req.params.id

    let data = pData.body;
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + baseT
    }
    
    if (method === 'post') {
        axios.post(warpliteurl + val + '/' + id, data, { headers })
            .then(response => {
                console.log('success');
                res.json(response.data)
            })
            .catch(err => {
                console.log('Fetch Sites Error: ', err);
                res.json(err)
            });
    } else {
        axios.get(warpliteurl + method + '/' + val + '/' + id, { params: data, headers: headers })
            .then(function (response) {
                console.log('success');
                res.json(response.data)
            })
            .catch(function (error) {
                console.log('fail');
                console.log(error);
                res.json(error)
            });
    }
});
app.put('/:method', function (req, res) {
    let pData = req.query
    //console.log('run me = ', pData);
    //console.log(res);
    res.json({complete: 'test'})
    let method = req.params.method
    let data = JSON.stringify(pData);
    //let data = pData;
    //let token = req.headers.token;
    /*
    let config = {
        method: 'get',
        url: warpliteurl + method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic '+baseT,
            'token': token,
            'Cookie': 'warpToken='+token+';'
        },
        crossDomain: true,
        data: data
    };
    */
    /*
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+baseT,
        'token': token,
    }
    //'Cookie': 'warpToken='+token+';'

    axios.get(warpliteurl + method, {params:data, headers:headers})
        .then(function (response) {
            console.log('success');
            //console.log(response.data);
            res.json(response.data)
        })
        .catch(function (error) {
            console.log('fail');
            console.log(error);
            res.json(error)
        });
     */
});

let port = process.env.PORT || '5000'
server.listen(port)
