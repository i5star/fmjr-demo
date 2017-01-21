<template>
<div>
    <ComHead :pageTitle="pageHead"></ComHead>
</div>
</template>

<script>
    import ComHead from '../../../comHead.vue';

    export default {
        name: 'InvestAffirm',
        data() {
            return {
                pageHead: '分秒YY100-20170103期',
            };
        },
        components: {
            ComHead,
        },
    };
</script>
<style>

</style>