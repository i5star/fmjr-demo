// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import vueAxios from 'vue-axios';
import vuex from 'vuex';
import vueRouter from 'vue-router';

import App from './App';

// stores
import indexStore from './store/index.js';

require('normalize.css');

Vue.use(vueAxios, axios);
Vue.use(vuex);
Vue.use(vueRouter);

// 使用mock.js拦截ajax请求
if (process.env.NODE_ENV !== 'production') {
    require('./mocks/index.js');
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store: indexStore,
    template: '<App/>',
    components: { App },
});
