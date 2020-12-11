import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'

import customer from '../Pages/Customers/customer'
import customerDashboard from '../Pages/Customers/dashboard'
import customerList from '../Pages/Customers/customerList'
import customerInvoice from '../Pages/Customers/customerInvoice'
import customerMerchants from '../Pages/Customers/customerMerchantsList'

// import chargebacks from '../Pages/Chargeback/chargeback'
import chargebacksdashboard from '../Pages/Chargeback/chargebackdashboard'
import mychargebacks from '../Pages/Chargeback/main'

import alerts from '../Pages/Alerts/alerts'
import myalerts from '../Pages/Alerts/main'

import messages from '../Pages/Messages/messages'
import messagesSend from '../Pages/Messages/messagesSend'
import messagesInbox from '../Pages/Messages/messagesInbox'
import messagesChat from '../Pages/Messages/messagesChat'
import messagesReports from '../Pages/Messages/messagesReports'
import customerListDetails from "../Pages/Customers/customerListDetails";
import customerSetting from "../Pages/Customers/customerSetting";
import disputeTemplates from "../Pages/Chargeback/disputeTemplates";

Vue.use(Router);

const routes = [
    //login
    {
        path: '/',
        name: 'login',
        meta: { layout: 'userpages' },
        component: () => import('../Pages/Login/LoginBoxed.vue'),
    },
    // Dashboards
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: { requiresAuth: true, layout: 'default' },
        component: () => import('../Pages/Dashboard/main'),
    },
    {
        path: '/customers',
        redirect: '/customers/dashboard',
        component: customer,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'dashboard',
                name: 'customersdashboard',
                component: customerDashboard,
                meta: { requiresAuth: true, layout: 'default' }
            },
            {
                path: 'invoices',
                name: 'invoices',
                component: customerInvoice,
                meta: { requiresAuth: true, layout: 'default' }
            },
            {
                path: 'list',
                name: 'customerlist',
                component: customerList,
                meta: { requiresAuth: true, layout: 'default' },
            },
            {
                path: 'list/details/:id',
                name: 'customerdetails',
                component: customerListDetails,
                meta: { requiresAuth: true, layout: 'default' },
                props: true
            },
            {
                path: 'merchants',
                name: 'merchants',
                component: customerMerchants,
                meta: { requiresAuth: true, layout: 'default' }
            },
            {
                path: 'setting',
                name: 'setting',
                component: customerSetting,
                meta: { requiresAuth: true, layout: 'default' }
            }
        ]
    },
    {
        path: '/alerts',
        redirect: '/alerts/dashboard',
        component: alerts,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'myalerts',
                name: 'myalerts',
                component: myalerts,
                meta: { requiresAuth: true, layout: 'default' }
            }
        ]
    },
    {
        path: '/chargebacks',
        redirect: '/chargebacks/list',
        component: mychargebacks,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'list',
                name: 'chargebacklist',
                component: mychargebacks,
                meta: { requiresAuth: true, layout: 'default' }
            },
            {
                path: 'list',
                name: 'disputetemplates',
                component: disputeTemplates,
                meta: { requiresAuth: true, layout: 'default' }
            },
            {
                path: 'dashboard',
                name: 'chargebackdashboard',
                component: chargebacksdashboard,
                meta: { requiresAuth: true, layout: 'default' }
            }
        ]
    },
    {
        path: '/messages',
        redirect: '/messages/list',
        component: messages,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'send',
                name: 'send',
                component: messagesSend,
                meta: { requiresAuth: true, layout: 'default' }
            },
            {
                path: 'inbox',
                name: 'inbox',
                component: messagesInbox,
                meta: { requiresAuth: true, layout: 'default' }
            },
            {
                path: 'chat',
                name: 'chat',
                component: messagesChat,
                meta: { requiresAuth: true, layout: 'default' }
            },
            {
                path: 'reports',
                name: 'reports',
                component: messagesReports,
                meta: { requiresAuth: true, layout: 'default' }
            }
        ]
    },

    { path: '*', redirect: '/' }
]

const router = new Router({
    mode: 'history',
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes, // short for routes: routes
})

router.beforeEach((to, from, next) => {
    store.dispatch('login/isAuth')
        .then(loggedin => {
            if (to.matched.some(route => route.meta.requiresAuth)) {
                if (loggedin) {
                    next()
                } else {
                    next({name: 'login'})
                }
            }else{
                next()
            }
        })
})

export default router