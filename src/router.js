import VueRouter from 'vue-router';

import Index from './pages/index/index.vue';

const routers = new VueRouter({
    routes: [
        {
            path: 'index',
            component: Index,
            alias: '/',
        },
    ],
});

export default routers;
