<template>
   <div class="assetsManagement">
       <ComHead :pageTitle="title"></ComHead>
       <AssetsManagementItem></AssetsManagementItem>
   </div>
</template>

<script>
    import ComHead from '../../comHead.vue';
    import AssetsManagementItem from './assetsManagementItem.vue';

    export default {
        name: 'assetsManagement',
        data() {
            return {
                title: '资产管理',
            };
        },
        components: {
            ComHead,
            AssetsManagementItem,
        },
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>
<style lang="scss">

</style>