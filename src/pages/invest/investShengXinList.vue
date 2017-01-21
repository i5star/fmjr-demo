<template>
    <div class="index-goodlist" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <Good v-for="good of shengXinGoodList" :lendDate="good.lendDate" :subjectName="good.subjectName" :lendRate="good.lendRate"
            :rewardRate="good.rewardRate" :lendAmt="good.lendAmt" :investMoney="good.investMoney">
        </Good>
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
            return {};
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
                setTimeout(() => {
                    const last = this.shengXinGoodList[this.shengXinGoodList.length - 1];
                    console.log(this.shengXinGoodList.length);
                    for (let i = 1; i <= 2; i += 1) {
                        this.shengXinGoodList.push(last + i);
                    }
                    console.log(this.shengXinGoodList.length);
                    this.loading = false;
                }, 2500);
                console.log('load more');
            },
        },
    };
</script>