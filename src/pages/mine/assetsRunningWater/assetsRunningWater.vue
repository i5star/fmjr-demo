<template>
   <div @click="back">
       资产流水
   </div>
</template>

<script>
    export default {
        name: 'assetsRunningWater',
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>