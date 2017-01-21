<template>
    <div class="index-goodlist" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <Good v-for="good of shengXinGoodList" :lendDate="good.lendDate" :subjectName="good.subjectName" :lendRate="good.lendRate"
            :rewardRate="good.rewardRate" :lendAmt="good.lendAmt" :investMoney="good.investMoney">
        </Good>
        <div v-show="showAnimatie">加载动画</div>
    </div>
</template>

<script>
    import {
        mapState,
    } from 'vuex';
    import {
        InfiniteScroll,
    } from 'mint-ui';
    import Good from '../index/good.vue';

    export default {
        data() {
            return {
                showAnimatie: false,
            };
        },
        name: 'InvestShengXinList',
        components: {
            Good,
            InfiniteScroll,
        },
        computed: mapState({
            shengXinGoodList: state => state.home.shengXinGoodList,
        }),
        created() {
            this.$store.dispatch('getShengXinGoodList');
        },
        methods: {
            loadMore() {
                this.loading = true;
                this.showAnimatie = true;
                setTimeout(() => {
                    this.$store.dispatch('getShengXinGoodList').then(() => {
                        this.loading = false;
                        this.showAnimatie = false;
                    });
                }, 2500);
                console.log('load more');
            },
        },
    };
</script>
