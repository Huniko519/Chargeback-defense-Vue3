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
        customersArr: []
    },
    getters: {
        getCustomers(state){
            return state.customersArr
        }
    },
    actions: {
        customers({commit, rootGetters}) {
            return new Promise((resolve,reject) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig.headers['token'] = userData.token
                let formData = {}
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/qb/customer/view', qs.stringify(formData), axiosConfig)
                    .then(res => {
                        let data = res.data
                        if(data.name === 'Error'){
                            reject({msg: 'Service unavailable please contact support'})
                        }else {
                            commit('setCustomers', {data})
                            resolve()
                        }
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        createCustomers({rootGetters},{formData}) {
            console.log('run me');
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                axiosConfig.headers['token'] = userData.token
                //let formData = {base: userData.base, token: userData.token};
                //let formData = {}
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/qb/customer/create', qs.stringify(formData), axiosConfig)
                    .then(() => {
                        //let data = res.data

                        resolve()
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