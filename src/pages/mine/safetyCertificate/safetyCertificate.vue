<template>
   <div @click="back">
       安全认证
   </div>
</template>

<script>
    export default {
        name: 'safetyCertificate',
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>