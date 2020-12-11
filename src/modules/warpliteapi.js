import axios from 'axios'
import qs from 'qs'

let axiosConfig = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'vueapitoken': process.env.VUE_APP_WARPLITE_API_TOKEN
    }
}

function buidAxiosConfig({headers, body}) {
    return {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            'vueapitoken': process.env.VUE_APP_WARPLITE_API_TOKEN,
            ...headers
        },
        body
    }
}

export default {
    namespaced: true,
    state: {
        cbdisputes: [],
        cbdisputesLoaded: false,
        cbdalerts: [],
        cbddescriptors: [],
        cbdByMerchIddescriptors: {},
        cbdByMerchId5descriptors: {},
        cbdmerchants: {},
        cbdmerchantsList: [],
        cbdmerchantsData: [],
        cbdmerchantProgress: {},
        cbdonoffList: [],
        cbdstatusList: [],
        cbdtype: [],
        customerChargebacks: {},
        customerChargebacksLoaded: false,
        cbdmerchantsDataSummary: {},
        merchantChargebacks: [],
        merchantChargebacksSummary: {},
        latestMerchantChargebacks: {},
        MerchantChargebacksLoaded: false,
        customerAlerts: [],
        customerAlertsLoaded: false,
        AllCustomerAlerts: [],
        customerReports: {},
        AllCustomerReports: [],
        customerReportLoaded: false,
        AllCustomerChargebacks: [],
        ldata: {},
        customers: {},
        clients: {},
        statusesObj: {},
        statuses: [],
        recordtype: [],
        recordtypeObj: {},
        disputetemplateObj: {},
        disputetemplate: [],
        portals: {},
        merchantApis: {},
        apiConnections: []
    },
    getters: {
        getDisputesTemplateObj(state) {
            return state.disputetemplate
        },
        getDisputesTemplate(state) {
            return state.disputetemplateObj
        },
        getRecordTypeDisputesObj(state) {
            return state.recordtypeObj
        },
        getRecordTypeDisputes(state) {
            return state.recordtype
        },
        getStatusChargebacksObj(state) {
            return state.statusesObj
        },
        getStatusChargebacks(state) {
            return state.statuses
        },
        getLatestMerchantChargebacks(state) {
            return state.latestMerchantChargebacks
        },
        getCustomers(state) {
            return state.customers
        },
        getClients(state) {
            return state.clients
        },
        getMerchantChargebacks(state) {
            return state.merchantChargebacks
        },
        getMerchantChargebacksSummary(state) {
            return state.merchantChargebacksSummary
        },
        getCustomerChargebacks(state) {
            return state.customerChargebacks
        },
        getCustomerReports(state) {
            return state.customerReports
        },
        getCustomerAlerts(state) {
            return state.customerAlerts
        },
        getMerchants(state) {
            return state.cbdmerchants
        },
        getMerchantsProgress(state) {
            return state.cbdmerchantProgress
        },
        getMerchantsData(state) {
            return state.cbdmerchantsData
        },
        getMerchantsDataSummary(state) {
            return state.cbdmerchantsDataSummary
        },
        getMerchantsList(state) {
            return state.cbdmerchantsList
        },
        getDisputesArr(state) {
            return state.cbdisputes
        },
        getAlertsArr(state) {
            return state.cbdalerts
        },
        getMerchantDescriptorsObj(state) {
            return state.cbdByMerchIddescriptors
        },
        getMerchant5DescriptorsObj(state) {
            return state.cbdByMerchId5descriptors
        },
        getPortals(state) {
            return state.portals
        },
        getMerchantApis(state) {
            return state.merchantApis
        },
        getApiConnections(state) {
            return state.apiConnections
        }
    },
    actions: {
        login({commit},{data}) {
            return new Promise((resolve,reject) => {
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/login', qs.stringify(data), axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setlData', {data})
                        resolve(data)
                    })
                    .catch(() => {
                        reject({error: true})
                    })
            })
        },
        getApiConnections({commit, rootGetters}) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {}
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/apiconnections', axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setApiConnections', {data})
                        resolve(data)
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        getCbdStatus({commit, rootGetters}) {
            return new Promise((resolve) => {

                /*
                let sendData = {}
                if (formData.cbdatedisputed !== '' && formData.cbdatedisputed !== '|') {
                    sendData.cbdatedisputed = formData.cbdatedisputed
                }

                if (formData.statusid5 !== '') {
                    sendData.statusid = formData.statusid5
                }

                if (formData.merchants !== '') {
                    sendData.merchantid = formData.merchants
                }
                */

                /*
                let sendData = {
                (formData.cbdatedisputed ?cbdatedisputed: formData.cbdatedisputed,:'')
                    statusid: formData.statusid5
                };
                */
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        // customerid: userData.customerInfo.customerid,
                        fields: 'statusid,statusname,statusonoff'
                    }
                })
                //limit: '1|200'
                // formData = {'customerid_IN': userData.customerPostIds.IN}

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/statuses', axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbdStatus', {data})
                        resolve(data)
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        getCbdAlertStatus({commit, rootGetters}) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        fields: 'statusid,statusname,statusonoff'
                    }
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/statuses24', axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbdStatus', {data})
                        resolve()
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        setCbdAlertStatus({commit, rootGetters}, formData) {
            const { alertId, statusId } = formData
            return new Promise((resolve, reject) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        statusid: statusId
                    }
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/post/cbalerts/' + alertId, axiosConfig)
                    .then(() => {
                        commit('setCbdAlertStatusOfId', {statusId, alertId})
                        resolve()
                    })
                    .catch(err => {
                        console.log('Fetch Sites Error: ', err)
                        reject()
                    })
            })
        },
        addCbdAlertNotes({rootGetters}, formData) {
            const { alertId, alertNotes } = formData
            return new Promise((resolve, reject) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        notetext: alertNotes,
                        alertid: alertId
                    }
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/post/alertnotes', axiosConfig)
                    .then(res => {
                        resolve(res.data)
                    })
                    .catch(err => {
                        console.log('Fetch Sites Error: ', err)
                        reject()
                    })
            })
        },
        setCbdAlertNotes({rootGetters}, formData) {
            const { noteid } = formData
            return new Promise((resolve, reject) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        ...formData
                    }
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/post/alertnotes/' + noteid, axiosConfig)
                    .then(res => {
                        resolve(res.data)
                    })
                    .catch(err => {
                        console.log('Fetch Sites Error: ', err)
                        reject()
                    })
            })
        },
        getCbdAlertNotes({rootGetters}, formData) {
            return new Promise((resolve, reject) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        ...formData
                    }
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/alertnotes', axiosConfig)
                    .then(res => {
                        resolve(res.data)
                    })
                    .catch(err => {
                        console.log('Fetch Sites Error: ', err)
                        reject()
                    })
            })
        },
        addCbdMerchantPortals({rootGetters}, formData) {
            return new Promise((resolve, reject) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: [
                        { ...formData }
                    ]
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/post/portals', axiosConfig)
                    .then((res) => {
                        resolve(res.data)
                    })
                    .catch(err => {
                        console.log('Fetch Sites Error: ', err)
                        reject(err)
                    })
            })
        },
        setCbdMerchantPortals({rootGetters}, formData) {
            const { portalid } = formData
            return new Promise((resolve, reject) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        ...formData
                    }
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/post/portals/' + portalid, axiosConfig)
                    .then((res) => {
                        resolve(res.data)
                    })
                    .catch(err => {
                        console.log('Fetch Sites Error: ', err)
                        reject(err)
                    })
            })
        },
        addCbdMerchantApis({rootGetters}, formData) {
            return new Promise((resolve, reject) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: [
                        { ...formData }
                    ]
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/post/merchantapis', axiosConfig)
                    .then((res) => {
                        resolve(res.data)
                    })
                    .catch(err => {
                        console.log('Fetch Sites Error: ', err)
                        reject(err)
                    })
            })
        },
        setCbdMerchantApis({rootGetters}, formData) {
            const { apiid } = formData
            return new Promise((resolve, reject) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        ...formData
                    }
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/post/merchantapis/' + apiid, axiosConfig)
                    .then((res) => {
                        resolve(res.data)
                    })
                    .catch(err => {
                        console.log('Fetch Sites Error: ', err)
                        reject(err)
                    })
            })
        },
        testCbdMerchantApi({rootGetters}, formData) {
            return new Promise((resolve, reject) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        ...formData
                    }
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/post/testmerchantapis', axiosConfig)
                    .then((res) => {
                        resolve(res.data)
                    })
                    .catch(err => {
                        console.log('Fetch Sites Error: ', err)
                        reject(err)
                    })
            })
        },
        getCbdRecordType({commit, rootGetters}) {
            return new Promise((resolve) => {

                /*
                let sendData = {}
                if (formData.cbdatedisputed !== '' && formData.cbdatedisputed !== '|') {
                    sendData.cbdatedisputed = formData.cbdatedisputed
                }

                if (formData.statusid5 !== '') {
                    sendData.statusid = formData.statusid5
                }

                if (formData.merchants !== '') {
                    sendData.merchantid = formData.merchants
                }
                */

                /*
                let sendData = {
                (formData.cbdatedisputed ?cbdatedisputed: formData.cbdatedisputed,:'')
                    statusid: formData.statusid5
                };
                */
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        customerid: userData.customerInfo.customerid,
                        fields: 'statusname,statusid'
                    }
                })
                //limit: '1|200'
                // formData = {'customerid_IN': userData.customerPostIds.IN}

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/recordtypes', axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbdRecordType', {data})
                        resolve()
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        getCbdDisputes({commit, rootGetters}, formData) {
            return new Promise((resolve) => {
                let params = formData;
                if (!formData) {
                    const d = new Date()
                    let month = '' + (d.getMonth() + 1)
                    let day = '' + d.getDate()
                    const year = d.getFullYear()

                    if (month.length < 2)
                        month = '0' + month
                    if (day.length < 2)
                        day = '0' + day

                    const curDate = [year, month, day].join('-')
                    const firstDate = [year, month, '01'].join('-')
                    params = {
                        cbdatedisputed: `${firstDate}|${curDate}`,
                        sortby: 'cbdatedisputed,DESC'
                    }
                }
                /*
                let sendData = {}
                if (formData.cbdatedisputed !== '' && formData.cbdatedisputed !== '|') {
                    sendData.cbdatedisputed = formData.cbdatedisputed
                }

                if (formData.statusid5 !== '') {
                    sendData.statusid = formData.statusid5
                }

                if (formData.merchants !== '') {
                    sendData.merchantid = formData.merchants
                }
                */

                /*
                let sendData = {
                (formData.cbdatedisputed ?cbdatedisputed: formData.cbdatedisputed,:'')
                    statusid: formData.statusid5
                };
                */
                let userData = rootGetters["login/getUserInfo"]
                let axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        customerid: userData.customerInfo.customerid,
                        ...params
                    }
                })
                //limit: '1|200'
                // formData = {'customerid_IN': userData.customerPostIds.IN}

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/cbdisputes', axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbdDisputes', {data})
                        resolve()
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        getCbdDisputeTemplates({commit, rootGetters}) {
            return new Promise((resolve) => {

                let userData = rootGetters["login/getUserInfo"]
                let axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        customerid: userData.customerInfo.customerid
                    }
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/dispute_templates', axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbdDisputesTemplates', {data})
                        resolve()
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        getCbdAlerts({commit, rootGetters}, formData) {
            return new Promise((resolve, reject) => {
                let userData = rootGetters["login/getUserInfo"]
                let params = formData;
                if (!formData) {
                    const d = new Date()
                    let month = '' + (d.getMonth() + 1)
                    let day = '' + d.getDate()
                    const year = d.getFullYear()

                    if (month.length < 2)
                        month = '0' + month
                    if (day.length < 2)
                        day = '0' + day

                    const curDate = [year, month, day].join('-')
                    const firstDate = [year, month, '01'].join('-')
                    params = {
                        apidate: `${firstDate}|${curDate}`,
                        sortby: 'apidate,DESC',
                        limit: "1|5"
                    }
                }

                let axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        customerid: userData.customerInfo.customerid,
                        ...params
                    }
                })

                //let formData = {base: userData.base, token: userData.token};
                // let formData = {'customerid_IN': userData.customerPostIds.IN}
                /*axios.post(`${process.env.VUE_APP_WARPLITE_API_SERVER}/merchants24`, axiosConfig)
                    .then(res => res.data.data.map(merchant => merchant.merchantid))
                    .then(merchantIds => {
                        axiosConfig.body.merchantids = merchantIds.join(',')
                        axiosConfig.body.sortby = 'apiID,desc'
                        axiosConfig.body.limit = '1|200'
                        // todo probably want to refactor axiosConfig so we can call it as a function and pass it a
                        // body every time. That way we won't have to delete fields on the fly in a scenario like this
                        // only needed for the call to /merhcants24.
                        delete axiosConfig.body.fields
                    })
                    .then(() => axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/cbalerts', axiosConfig))
                    .then(res => {
                        let data = res.data
                        commit('setCbdAlerts', {data})
                        resolve()
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))*/
                axios.post(`${process.env.VUE_APP_WARPLITE_API_SERVER}/cbalerts`, axiosConfig)
                    .then(res => {
                        const { data } = res
                        commit('setCbdAlerts', {data})
                        resolve()
                    })
                    .catch(err => {
                        console.log('Fetch Sites Error: ', err)
                        reject()
                    })
            })
        },
        getCbdDescriptors({commit, rootGetters}) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig.headers['token'] = userData.token
                //let formData = {base: userData.base, token: userData.token};
                let formData = {}
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/descriptors', qs.stringify(formData), axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbdDescriptors', {data})
                        resolve()
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        //COmmitting

        getCbdMerchants({commit, rootGetters}, data) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                //'fields': 'merchantid,customerid,merchantname,merchantnumber,merchanturl,merchantdescriptor',
                /*
                let formData = {
                    'merchantonoff': 1,
                    //fixing typo customerId
                    'customerid': userData.customerInfo.customerid,
                    ...data
                }
                 */
                let axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        customerid: userData.customerInfo.customerid,
                        'merchantonoff': 1,
                        ...data
                    }
                })

                //todo put this back when there are more custs
                //'customerid_IN': userData.customerPostIds.IN,
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/merchants',  axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbdMerchants', {data})
                        resolve(data)
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        getCbdPortals({commit, rootGetters}, data) {
            return new Promise((resolve, reject) => {
                let userData = rootGetters["login/getUserInfo"]
                let axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: data
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/portals',  axiosConfig)
                    .then(res => {
                        const { data } = res
                        commit('setCbdPortals', { data })
                        resolve(data)
                    })
                    .catch(err => {
                        console.log('Fetch Sites Error: ', err)
                        reject()
                    })
            })
        },
        getCbdMerchantApis({commit, rootGetters}, data) {
            return new Promise((resolve, reject) => {
                let userData = rootGetters["login/getUserInfo"]
                let axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: data
                })

                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/merchantapis',  axiosConfig)
                    .then(res => {
                        const { data } = res
                        commit('setCbdMerchantApis', { data })
                        resolve(data)
                    })
                    .catch(err => {
                        console.log('Fetch Sites Error: ', err)
                        reject()
                    })
            })
        },
        getCbDisputeSearch({commit, rootGetters}) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig.headers['token'] = userData.token
                let formData = {
                    customerid: userData.customerInfo.customerid
                }
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/cbdisputes', qs.stringify(formData), axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbDisputeSearch', {data})
                        resolve(data)
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        getCbCustomerReports({commit, rootGetters}) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        customerid: userData.customerInfo.customerid
                    }
                })
                // 08/01/2020 used to pass this in as a query string. we decided we might not need to. leaving for now just in case we revert
                // let formData = {'customerid_IN': userData.customerPostIds.IN}
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/customers_reports', axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbCustomerReports', {data, userData})
                        resolve(data)
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        getCbCustomerChargebacks({commit, rootGetters}) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                let axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        customerid: userData.customerInfo.customerid
                    }
                })
                // axiosConfig.headers['token'] = userData.token
                // 08/01/2020 used to pass this in as a query string. we decided we might not need to. leaving for now just in case we revert
                // let formData = {'customerid_IN': userData.customerPostIds.IN}
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/cbdisputes', axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbCustomerChargebacks', {data, userData})
                        resolve(data)
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        // todo we are not using the data param right now. We were passing in some customer IDs before which is commented out
        // in the method body. It seems like we may no longer need to use these but I'm keeping them in place for now
        // in case we change course. 08/01/2020
        // eslint-disable-next-line
        getCbMerchantChargebacks({commit, rootGetters}, data) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                let axiosConfig = buidAxiosConfig({
                    headers: {
                        token: userData.token
                    },
                    body: {
                        customerid: userData.customerInfo.customerid,
                        ...data
                    }
                })
                // 08/01/2020 used to pass this in as a query string. we decided we might not need to. leaving for now just in case we revert
                //let formData = {'customerid_IN': userData.customerPostIds.IN}
                //let formData = {'customerid_IN': 3383}
                //'customerid_IN': userData.customerPostIds.IN,
                // let formData = {
                //     'merchantonoff': 1,
                //     'customerid_IN': userData.customerPostIds.IN,
                //     ...data
                // }
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/cbdisputes', axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbMerchantChargebacks', {data, userData})
                        resolve(data)
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        getCbCustomerAlerts({commit, rootGetters}) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig.headers['token'] = userData.token
                axiosConfig.body = {}
                axiosConfig.body.customerid = userData.customerInfo.customerid
                // 08/01/2020 used to pass this in as a query string. we decided we might not need to. leaving for now just in case we revert
                // let formData = {'customerid_IN': userData.customerPostIds.IN}
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/cbalerts', axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbCustomerAlerts', {data, userData})
                        resolve(data)
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        getCbMerchantAlerts({commit, rootGetters}) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig.headers['token'] = userData.token
                // 08/01/2020 used to pass this in as a query string. we decided we might not need to. leaving for now just in case we revert
                // This statment is the issue = {'customerid_IN': userData.customerPostIds.IN}
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/cbalerts', axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbMerchantAlerts', {data})
                        resolve(data)
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        getCbCustomers({commit, rootGetters}) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig.headers['token'] = userData.token
                let formData = {'customerid': userData.customerInfo.customerid}
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/customers', qs.stringify(formData), axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbCustomers', {data})
                        resolve(data)
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        getCbClients({commit, rootGetters}) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig.headers['token'] = userData.token
                // incorrect formData fixing customerid_IN
                let formData = {'customerid': userData.customerInfo.customerid}
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/clients', qs.stringify(formData), axiosConfig)
                    .then(res => {
                        let data = res.data
                        commit('setCbClients', {data})
                        resolve(data)
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        getCbCustomerCharts({dispatch, rootGetters}) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig.headers['token'] = userData.token
                let chargebacks = dispatch('getCbCustomerChargebacks', userData);
                let custreports = dispatch('getCbCustomerReports', userData);
                let custalerts = dispatch('getCbCustomerAlerts', userData);
                Promise.all([chargebacks, custreports, custalerts]).then(() => {
                    resolve();
                })
            })
        }
    },
    mutations: {
        setCbdDisputesTemplates(state, {data}){
            state.disputetemplate = data.data

            data.data.forEach(dis => {
                state.disputetemplateObj[dis.fileid] = dis
            })
        },
        setCbdStatus(state, {data}){
            state.statuses = data.data

            data.data.forEach(dis => {
                state.statusesObj[dis.statusid] = dis.statusname
            })
        },
        setApiConnections(state, {data}) {
            state.apiConnections = data.data
        },
        setCbdRecordType(state, {data}){
            state.recordtype = data.data

            data.data.forEach(dis => {
                state.recordtypeObj[dis.rectypeid] = dis
            })
        },
        setlData(state, {data}){
            state.ldata = data
        },
        setCbClients(state, {data}){
            state.clients = data.data
        },
        setCbCustomers(state, {data}){
            state.customers = data.data
        },
        setCbMerchantAlerts(state, {data}){
            state.merchantAlerts = data
        },
        setCbCustomerAlerts(state, {data}){
            state.AllCustomerAlerts = data.data
            // todo we are typically expecting 2 items here but sometimes we are getting one. This may be a backend issue. If this gets fixed later, the if guard can be removed
            if(data.data.length > 1) {
                const sortedCB = data.data.sort((a, b) => b.last_updated - a.last_updated)
                state.customerAlerts = sortedCB.pop()
            } else {
                state.customerAlerts = data.data[0]
            }
            state.customerAlertsLoaded = true
        },
        setCbMerchantChargebacks(state, {data}){
            state.merchantChargebacks = data.data
            state.merchantChargebacksSummary = data.summary
            const sortedCB = data.data.sort((a, b) => b.last_updated - a.last_updated)
            state.latestMerchantChargebacks = sortedCB.pop()
            state.MerchantChargebacksLoaded = true
        },
        setCbCustomerReports(state, {data}) {
            state.AllCustomerReports = data.data
            //get most recent date
            const sortedCB = data.data.sort((a, b) => b.last_updated - a.last_updated)
            state.customerReports = sortedCB.pop()
            state.customerReportLoaded = true
        },
        setCbCustomerChargebacks(state, {data}) {

            state.AllCustomerChargebacks = data.data

            //get most recent date
            const sortedCB = data.data.sort((a, b) => b.last_updated - a.last_updated)
            state.customerChargebacks = sortedCB.pop()
            state.customerChargebacksLoaded = true;
            /*
            data.data.forEach(dis => {
                if (userData.customerId == dis.customerid) {
                    state.customerChargebacks = dis;
                }
            })
            */
        },
        setCbdMerchants(state, { data }) {
            state.cbdmerchantsList.push({value: '', text: ''});
            state.cbdmerchantsData = data.data
            state.cbdmerchantsDataSummary = data.summary
            data.data.forEach(dis => {
                //count for progress
                let progressCT = 0;
                Object.keys(dis).forEach(pd => {
                    if (dis[pd] != "" && dis[pd] != 0) {
                        progressCT++
                    }
                })
                state.cbdmerchantProgress[dis.merchantid] = (progressCT / Math.round(Object.keys(dis).length) * 100);
                state.cbdmerchants[dis.merchantid] = dis;
                state.cbdmerchantsList.push({value: dis.merchantid, text: dis.merchantname})
            })
            state.cbdmerchantsList.sort((a, b) => (a.text > b.text) ? 1 : -1)
        },
        setCbdPortals(state, { data }) {
            state.portals = data
        },
        setCbdMerchantApis(state, { data }) {
            state.merchantApis = data
        },
        setCbdDescriptors(state, {data}) {
            state.cbddescriptors = data.data
            data.data.forEach(dis => {
                if (state.cbdByMerchIddescriptors[dis.merchantid] === undefined) {
                    state.cbdByMerchIddescriptors[dis.merchantid] = {}
                    state.cbdByMerchIddescriptors[dis.merchantid][dis.descid] = {}
                } else if (state.cbdByMerchIddescriptors[dis.merchantid][dis.descid] === undefined) {
                    state.cbdByMerchIddescriptors[dis.merchantid][dis.descid] = {}
                }
                state.cbdByMerchIddescriptors[dis.merchantid][dis.descid] = dis

                if (state.cbdByMerchId5descriptors[dis.merchantid5] === undefined) {
                    state.cbdByMerchId5descriptors[dis.merchantid5] = {}
                    state.cbdByMerchId5descriptors[dis.merchantid5][dis.descid] = {}
                } else if (state.cbdByMerchId5descriptors[dis.merchantid5][dis.descid] === undefined) {
                    state.cbdByMerchId5descriptors[dis.merchantid5][dis.descid] = {}
                }
                state.cbdByMerchId5descriptors[dis.merchantid5][dis.descid] = dis
            })
        },
        setCbdDisputes(state, {data}) {
            state.cbdisputes = data
            state.cbdisputesLoaded = true
        },
        setCbdAlerts(state, {data}) {
            state.cbdalerts = data
        },
        setCbdAlertStatusOfId(state, param) {
            const { data } = state.cbdalerts
            const { alertId, statusId } = param
            let alert = data.find(ele => ele.apiID === alertId)
            alert.statusid = statusId
        }
    }
}