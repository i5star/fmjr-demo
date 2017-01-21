<template>
    <div class="index-goodlist">
        <Good
            v-for="good of yueYingGoodList"
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
    import Good from '../index/good.vue';

    export default {
        data() {
            return {};
        },
        name: 'InvestShengXinList',
        components: {
            Good,
        },
        computed: mapState({
            yueYingGoodList: state => state.home.yueYingGoodList,
        }),
        created() {
            this.$store.dispatch('getYueYingGoodList');
        },
    };
</script>

<style lang="scss">

</style>