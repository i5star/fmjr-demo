<template>
   <div @click="back">
       关于分秒
   </div>
</template>

<script>
    export default {
        name: 'AboutFenmiao',
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>