<template>
    <div class="index-goodlist">
        <InvestDetailsGood :subjectName="detailsGoodLists.subjectName" :lendRate="detailsGoodLists.lendRate" :rewardRate="detailsGoodLists.rewardRate"
            :lendAmt="detailsGoodLists.lendAmt" :investMoney="detailsGoodLists.investMoney" :lendCycleValue="detailsGoodLists.lendCycleValue"></InvestDetailsGood>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import InvestDetailsGood from './investDetailsGood.vue';

    export default {
        data() {
            return {
            };
        },
        name: 'vestDetailsGoodList',
        components: {
            InvestDetailsGood,
        },
        computed: mapState({
            detailsGoodLists: state => state.home.detailsGoodList,
        }),
        created() {
            this.$store.dispatch('getDetailsGoodList');
        },

    };
</script>

<style lang="scss">
</style>