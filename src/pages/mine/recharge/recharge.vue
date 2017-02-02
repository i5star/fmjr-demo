<template>
   <div @click="back">
       充值
   </div>
</template>

<script>
    export default {
        name: 'Recharge',
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>