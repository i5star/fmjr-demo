<template>
    <div class="invest-page">
        <mt-header :title="title" class="com-header">
            <router-link to="/index" slot="left">
            </router-link>
        </mt-header>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">分秒月盈</mt-tab-item>
            <mt-tab-item id="2">分秒省心</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <GoodList></GoodList>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <GoodList></GoodList>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import { Header, Navbar, TabItem } from 'mint-ui';
    import GoodList from '../index/goodList.vue';

    const MintHeader = Header;
    export default {
        name: 'Invest',
        data() {
            return {
                title: '投资',
                selected: '1',
                selectedIndex: 0,
            };
        },
        components: {
            GoodList,
            MintHeader,
            Navbar,
            TabItem,
        },
    };
</script>

<style lang="scss">
    .invest-page {
        width: 100%;
        height: 100%;
        margin:0;
        padding:0;
        background-color: #f1f1f1;
        .mint-tab-item-label {
        font-size:18px !important;
        }
        .is-selected {
        color:#ff6c00 !important;
        border:0 !important;
      }
    
    }
</style>