<template>
   <div @click="back">
       提现
   </div>
</template>

<script>
    export default {
        name: 'withdraw',
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>