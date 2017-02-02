<template>
   <div @click="back">
       我的红包
   </div>
</template>

<script>
    export default {
        name: 'myRedPackage',
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>