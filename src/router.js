import VueRouter from 'vue-router';

import Main from './pages/main.vue';
import Index from './pages/index/index.vue';
import Invest from './pages/invest/invest.vue';
import Find from './pages/find/find.vue';
import Mine from './pages/mine/mine.vue';
import InvestDetail from './pages/index/investDetails/investDetails.vue';
import InvestAffirm from './pages/index/investDetails/investAffirm/investAffirm.vue';

import SafetyGuarantee from './pages/index/safetyGuarantee/safeGuarntee.vue';
import GreenHand from './pages/index/greenHand/greenHand.vue';
import HelpCenter from './pages/index/helpCenter/helpCenter.vue';
import AboutFenmiao from './pages/index/aboutFenmiao/aboutFenmiao.vue';

import Login from './pages/mine/login/entryLogin.vue';
import Forget from './pages/find/login/forget/forget.vue';
import Forget2 from './pages/find/login/forget/forget2/forget2.vue';
import ResetPassword from './pages/find/login/forget/forget2/resetPassword/resetPassword.vue';

import AcccountDetails from './pages/mine/accountDetails/accountDetails.vue';
import Recharge from './pages/mine/recharge/recharge.vue';
import Withdraw from './pages/mine/withdraw/withdraw.vue';
import MyRedPackage from './pages/mine/myRedPackage/myRedPackage.vue';
import MyInterestRate from './pages/mine/myInterestRate/myInterestRate.vue';
import AssetsManagement from './pages/mine/assetsManagement/assetsManagement.vue';
import AssetsRunningWater from './pages/mine/assetsRunningWater/assetsRunningWater.vue';
import WithdrawRecord from './pages/mine/withdrawRecord/withdrawRecord.vue';
import RechargeRecord from './pages/mine/rechargeRecord/rechargeRecord.vue';
import SafetyCertificate from './pages/mine/safetyCertificate/safetyCertificate.vue';
import BankCard from './pages/mine/bankCard/bankCard.vue';


const routers = new VueRouter({
    routes: [{
            path: '/main',
            component: Main,
            alias: '/',
            children: [{
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
            path: '/investDetail/*',
            component: InvestDetail,
        },
        {
            path: '/investAffirm/*',
            component: InvestAffirm,
        },
        {
            path: '/safetyGuarantee',
            component: SafetyGuarantee,
        },
        {
            path: '/greenHand',
            component: GreenHand,
        },
        {
            path: '/helpCenter',
            component: HelpCenter,
        },
        {
            path: '/aboutFenmiao',
            component: AboutFenmiao,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/forget',
            component: Forget,
        },
        {
            path: '/forget2',
            component: Forget2,
        },
        {
            path: '/resetPassword',
            component: ResetPassword,
        },
        {
            path: '/acccountDetails', //资产详情
            component: AcccountDetails,
        },
        {
            path: '/recharge', //充值
            component: Recharge,
        },
        {
            path: '/withdraw', //提现
            component: Withdraw,
        },
        {
            path: '/myRedPackage', //我的红包
            component: MyRedPackage,
        },
        {
            path: '/myInterestRate', //我的加息劵
            component: MyInterestRate,
        },
        {
            path: '/assetsManagement', //资产管理
            component: AssetsManagement,
        },
        {
            path: '/assetsRunningWater', //资产流水
            component: AssetsRunningWater,
        },
        {
            path: '/withdrawRecord', //提现记录
            component: WithdrawRecord,
        },
        {
            path: '/rechargeRecord', //充值记录
            component: RechargeRecord,
        },
        {
            path: '/safetyCertificate', //安全认证
            component: SafetyCertificate,
        },
        {
            path: '/bankCard', //银行卡
            component: BankCard,
        },

    ],
});

export default routers;