window.WPPayFormsBus = new window.WPPayForms.Vue();

window.WPPayForms.Vue.mixin({
    methods: {
        $t(str) {
            let transString = wpPayFormsAdmin.i18n[str];
            if(transString) {
                return transString;
            }
            return str;
        },
        setStoreData(key, value) {
            if(window.localStorage) {
                localStorage.setItem("wppayforms_"+key, value);
            }
        },
        getFromStore(key, defaultValue) {
            if(window.localStorage) {
                let itemValue = localStorage.getItem('wppayforms_'+key);
                if(itemValue) {
                    return itemValue;
                }
            }
            return defaultValue;
        },
        applyFilters: window.WPPayForms.applyFilters,
        addFilter: window.WPPayForms.addFilter,
        addAction: window.WPPayForms.addFilter,
        doAction: window.WPPayForms.doAction,
        $get: window.WPPayForms.$get,
        $adminGet: window.WPPayForms.$adminGet,
        $adminPost: window.WPPayForms.$adminPost,
        $post: window.WPPayForms.$post
    },
    data(){
        return {

        }
    },
    filters: {
        ucFirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
});

import {routes} from './routes'

const router = new window.WPPayForms.Router({
    routes: routes,
    linkActiveClass: 'active'
});

new window.WPPayForms.Vue({
    el: '#wppayformsapp',
    render: h => h(require('./App')),
    router: router
});
