import VueRouter from 'vue-router';

import Main from './pages/main.vue';
import Index from './pages/index/index.vue';
import Invest from './pages/invest/invest.vue';
import Find from './pages/find/find.vue';
import Mine from './pages/mine/mine.vue';
import InvestDetail from './pages/index/investDetail/investDetail.vue';

const routers = new VueRouter({
    routes: [
        {
            path: '/main',
            component: Main,
            alias: '/',
            children: [
                {
                    path: 'index',
                    alias: '',
                    component: Index,
                },
                {
                    path: 'invest',
                    component: Invest,
                },
                {
                    path: 'find',
                    component: Find,
                },
                {
                    path: 'mine',
                    component: Mine,
                },
            ],
        },
        {
            path: '/investDetail',
            component: InvestDetail,
        },
    ],
});

export default routers;
