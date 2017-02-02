<template>
   <div @click="back">
       提现记录
   </div>
</template>

<script>
    export default {
        name: 'withdrawRecord',
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>