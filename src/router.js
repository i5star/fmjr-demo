import VueRouter from 'vue-router';

import Index from './pages/index/index.vue';
import Invest from './pages/invest/invest.vue';
import Find from './pages/find/find.vue';
import Mine from './pages/mine/mine.vue';

const routers = new VueRouter({
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/index',
            component: Index,
        },
        {
            path: '/invest',
            component: Invest,
        },
        {
            path: '/find',
            component: Find,
        },
        {
            path: '/mine',
            component: Mine,
        },
    ],
});

export default routers;
