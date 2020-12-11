//import router from 'src/routes/routes'

import axios from "axios";
import qs from "qs";

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
        user: JSON.parse(localStorage.getItem('user'))
    },
    getters: {
        getUserInfo(state) {
            return state.user
        }
    },
    actions: {
        isAuth({state}) {
            return new Promise((resolve) => {
                if (state.user != undefined && state.user.isLoggedIn !== undefined && state.user.isLoggedIn) {
                    //todo verify token is legit
                    console.log('user logged in')
                    resolve(true)
                } else {
                    console.log('not logged in')
                    resolve(false)
                }
            })
        },
        loginUser({dispatch, commit}, data) {
            return new Promise((resolve) => {
                //this.$store.dispatch('warpliteapi/login', data);
                dispatch('warpliteapi/login', {data}, {root: true}).then(res => {
                    if(res.customerInfo && (res.customerInfo.customerid === undefined || res.customerInfo.customerid === '')){
                        resolve(false)
                    }else if (res.name !== undefined && res.name === 'Error') {
                        resolve(false)
                    } else if (res.status === 200 && res.message === 'Successful Login') {
                        commit('setLoggedIn', {res})
                        //dispatch('loginUserDetails',{res});
                        resolve(true)
                    }else {
                        resolve(false)
                    }
                })
            })
        },
        loginUserDetails({rootGetters}, data) {
            return new Promise((resolve) => {
                let userData = rootGetters["login/getUserInfo"]
                let formData = {base: userData.base, token: userData.token, customerid: data};
                axios.post(process.env.VUE_APP_WARPLITE_API_SERVER + '/login_config', qs.stringify(formData), axiosConfig)
                    .then(res => {
                        let data = res.data
                        //commit('setLoginDetails', {data})
                        resolve(data)
                    })
                    .catch(err => console.log('Fetch Sites Error: ', err))
            })
        },
        logout({commit}) {
            commit('setLoggedOut')
        }
    },
    mutations: {
        setLoggedIn(state, {res}) {
            let customerPost = '';
            if(typeof res.customerInfo === 'object') {
                let custArr = []
                Object.keys(res.customerInfo).forEach((ckey) => {
                    custArr.push(res.customerInfo[ckey].customerid);
                })
                customerPost = {IN:custArr.join(',')}
            }
            let logdata = {
                base: res.base,
                token: res.token,
                isLoggedIn: true,
                customerInfo: res.customerInfo,
                customerPostIds: customerPost,
                adminInfo: res.adminidARR
            }
            //companyName: res.customerInfo,
            state.user = logdata;
            localStorage.setItem('user', JSON.stringify(logdata))
        },
        setLoggedOut(state) {
            state.user = {};
            localStorage.removeItem('user')
        }
    }
}
