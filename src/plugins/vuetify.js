import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
    theme: {
        primary: '#3f6ad8',
        secondary: '#444054',
        accent: '#794c8a',
        error: '#d92550',
        info: '#78C3FB',
        success: '#3ac47d',
        warning: '#f7b924',
        inigo: '#3F51B5',
        darkgreen: '#1B5E20',
        bluegrey: '#263238',
        darkred: '#B71C1C'

    },
    options: {
        customProperties: true
    },
    iconfont: 'md' || 'mdi',
})
