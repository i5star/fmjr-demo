<template>
    <router-view></router-view>
    <TabBar></TabBar>
</template>

<script>
    import TabBar from './pages/tabBar';
   
    export default {
        name: 'indexTab',
        components: {
            TabBar,
        },
    };
</script>