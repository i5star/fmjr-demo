<template>
   <div @click="back">
       我的加息劵
   </div>
</template>

<script>
    export default {
        name: 'myInterestRate',
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>