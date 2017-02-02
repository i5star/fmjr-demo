<template>
    <div class="index-goodlist">
        <InvestDetailsGood 
        :subjectName="detailsGoodLists.subjectName" 
        :lendRate="detailsGoodLists.lendRate" 
        :rewardRate="detailsGoodLists.rewardRate"
        :lendAmt="detailsGoodLists.lendAmt" 
        :investMoney="detailsGoodLists.investMoney" 
        :lendCycleValue="detailsGoodLists.lendCycleValue"
        :publishDate="detailsGoodLists.publishDate"
        :payBackDate="detailsGoodLists.payBackDate"
        :planInterestDate="detailsGoodLists.planInterestDate"
        :overDate="detailsGoodLists.overDate"
        :status="detailsGoodLists.status"
        :id="detailsGoodLists.id"
        ></InvestDetailsGood>
    </div>
</template>

<script>
    import {
        mapState,
    } from 'vuex';
    import InvestDetailsGood from './investDetailsGood.vue';

    export default {
        data() {
            return {};
        },
        name: 'vestDetailsGoodList',
        components: {
            InvestDetailsGood,
        },
        computed: mapState({
            detailsGoodLists: state => state.home.detailsGoodList,
        }),
        created() {
            this.$store.dispatch('getDetailsGoodList', {
                id: this.$route.params[0],
            });
        },
    };
</script>

<style lang="scss">

</style>