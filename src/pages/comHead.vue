<template>
<div>
    <div class="com-header">
        <img src="../assets/angle-left@3x.png" class="backBtn" @click="investBack">
        <span>{{ pageTitle }}</span>
    </div>
</div>
</template>

<script>
    export default {
        name: 'ComHead',
        props: {
            pageTitle: {
                String,
            },
        },
        methods: {
            investBack() {
                this.$router.back();
            },
        },
    };
</script>
<style lang="scss">
    .com-header {
        height: 30px !important;
        padding: 5px;
        text-align: center;
        line-height: 30px;
        background-color: #fff;
        font-size: 18px;
        color: #333;
        border-bottom: 1px solid #e5e5e5 !important;
        /*overflow: hidden;*/
        .backBtn {
            height: 20px;
            margin-top: 5px;
            width: 15px;
            float: left;
        }
    }
</style>