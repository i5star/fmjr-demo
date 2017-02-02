<template>
   <div @click="back">
       充值记录
   </div>
</template>

<script>
    export default {
        name: 'rechargeRecord',
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>