<template>
    <div class="index-goodlist">
        <Good
            v-for="good of shengXinGoodList"
            :lendDate="good.lendDate"
            :subjectName="good.subjectName"
            :lendRate="good.lendRate"
            :rewardRate="good.rewardRate"
            :lendAmt="good.lendAmt"
            :investMoney="good.investMoney"
        ></Good>
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
    };
</script>

<style lang="scss">

</style>