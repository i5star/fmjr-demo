<template>
    <div>
        投资详情页
        <button @click="handleBack">返回</button>
        <router-link to="/main/index">link返回</router-link>
    </div>
</template>

<script>
    export default {
        name: 'InvestDetail',
        methods: {
            handleBack() {
                this.$router.back();
                this.$route.push('');
            },
        },
    };
</script>