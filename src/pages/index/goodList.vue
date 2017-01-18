<template>
    <div class="index-goodlist">
        <Good v-for="good of goods" :lendDate="good.lendDate" :subjectName="good.subjectName" :lendRate="good.lendRate" :rewardRate="good.rewardRate"
            :lendAmt="good.lendAmt" :investMoney="good.investMoney"></Good>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import Good from './good.vue';

    export default {
        data() {
            return {
            };
        },
        name: 'GoodList',
        components: {
            Good,
        },
        computed: mapState({
            goods: state => state.goodList,
        }),
        created() {
            this.$store.dispatch('getGoodList');
        },

    };
</script>

<style lang="scss">
</style>