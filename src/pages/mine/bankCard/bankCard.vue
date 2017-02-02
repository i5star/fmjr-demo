<template>
   <div @click="back">
       银行卡
   </div>
</template>

<script>
    export default {
        name: 'bankCard',
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>