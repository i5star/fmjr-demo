<template>
    <div id="app">
        <Index></Index>
        <TabBar></TabBar>
    </div>
</template>

<script>
    import Index from './pages/index/index';

    import TabBar from './pages/tabBar';

    export default {
        name: 'app',
        components: {
            Index,
            TabBar,
        },
    };
</script>

<style>

</style>