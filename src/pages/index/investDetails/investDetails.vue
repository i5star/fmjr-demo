<template>
    <div class="invest-details-page">
        <mt-header :title="title" class="com-header">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <InvestDetailsGoodList></InvestDetailsGoodList>
        <mt-navbar v-model="selected" class="vest-about">
            <mt-tab-item id="1">
                <p>
                    <img src="../../../assets/tz_miaoshu@3x.png" v-show="selected !== 1">
                    <img src="../../../assets/tz_miaoshuhover@3x.png" v-show="selected == 1">
                </p>
                <p>项目描述</p>
            </mt-tab-item>
            <mt-tab-item id="2">
                <p>
                    <img src="../../../assets/tz_fengkong@3x.png" v-show="selected !== 2">
                    <img src="../../../assets/tz_fengkonghover@3x.png" v-show="selected == 2">
                </p>
                <p>风控措施</p>
            </mt-tab-item>
            <mt-tab-item id="3">
                <p>
                    <img src="../../../assets/tz_ziliao@3x.png"  v-show="selected !== 3">
                    <img src="../../../assets/tz_ziliaohover@3x.png" v-show="selected == 3">
                </p>
                <p>相关资料</p>
            </mt-tab-item>
            <mt-tab-item id="4">
                <p>
                    <img src="../../../assets/tz_jilu@3x.png" v-show="selected !== 4">
                    <img src="../../../assets/tz_jiluhover@3x.png" v-show="selected == 4">
                </p>
                <p>投资记录</p>
            </mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :title="'内容 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>
        </div>
</template>

<script>
    import {
        Header,
        Navbar,
        TabItem,
    } from 'mint-ui';
    import InvestDetailsGoodList from './investDetailsGoodList';

    const MintHeader = Header;
    export default {
        name: 'InVestDetails',
        data() {
            return {
                title: '投资详情',
                selected: '1',

            };
        },
        components: {
            MintHeader,
            InvestDetailsGoodList,
            Navbar,
            TabItem,
        },
        methods: {
            handleBack() {
                this.$router.back();
            },
        },

    };
</script>
<style lang="scss">
    .invest-details-page {
        .vest-about {
            color: #666;
            img {
                width: 50px;
                height: 50px;
                padding-bottom: 10px;
            }
            .mint-tab-item-label {
                font-size: 13px ! important;
            }
        }
        .is-selected {
            color: #ff6c00 !important;
            border-bottom: 1px solid #ff6c00 !important;
        }
    }
</style>