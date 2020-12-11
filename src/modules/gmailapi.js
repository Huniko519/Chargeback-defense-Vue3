import axios from 'axios'
import qs from 'qs'

let axiosConfig = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'vueapitoken': process.env.VUE_APP_WARPLITE_API_TOKEN
    }
}

export default {
    namespaced: true,
    state: {
        inboxArr: []
    },
    getters: {
        getInbox(state){
            return state.inboxArr
        }
    },
    actions: {
        getMail({commit, rootGetters}, {data}) {
            console.log('run me');
            return new Promise((resolve,reject) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig.headers['token'] = userData.token
                //console.log('udata', userData);
                //let formData = {base: userData.base, token: userData.token};
                let formData = {}
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/qb/customer/view', qs.stringify(formData), axiosConfig)
                    .then(res => {
                        let data = res.data
                        console.log('cust data', data);
                        if(data.name === 'Error'){
                            reject({msg: 'Service unavailable please contact support'})
                        }else {
                            commit('setCustomers', {data})
                            resolve()
                        }
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        }
    },
    mutations: {
        setCustomers(state, {data}) {
            state.customersArr = data
        },
    }
}