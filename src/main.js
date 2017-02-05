// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import vueAxios from 'vue-axios';
import vuex from 'vuex';
import vueRouter from 'vue-router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueCookie from 'vue-cookie';
import App from './App';
import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts/highstock';

// stores
import stores from './stores/index.js';
// routers
import router from './router.js';

require('normalize.css');

Vue.prototype.getUserCookie = function(acctKey) {
    const userAcctKey = this.$cookie.get(acctKey);
    if (userAcctKey != null) {
        this.$cookie.set(acctKey, userAcctKey, {
            expires: '7D',
        });
        return userAcctKey;
    } else {
        return null;
    }
};
Vue.use(vueAxios, axios);
Vue.use(vuex);
Vue.use(vueRouter);
Vue.use(MintUI);
Vue.use(VueCookie);
Vue.use(VueHighcharts, { Highcharts });

// 使用mock.js拦截ajax请求
if (process.env.NODE_ENV !== 'production') {
    require('./mocks/index.js');
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: stores,
    template: '<App/>',
    components: { App },
});