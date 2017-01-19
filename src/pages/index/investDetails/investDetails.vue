<template>
    <div class="invest-details-page">
        <mt-header :title="title">
            <span @click="handleBack"></span>
        </mt-header>
        <InvestDetailsGoodList></InvestDetailsGoodList>
    </div>
</template>

<script>
    import { Header } from 'mint-ui';
    import InvestDetailsGoodList from './investDetailsGoodList';

    export default {
        name: 'InVestDetails',
        data() {
            return {
                title: '投资详情',
            };
        },
        components: {
            Header,
            InvestDetailsGoodList,
        },
        methods: {
            handleBack() {
                this.$router.back();
            },
        },
    };
</script>