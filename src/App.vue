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
    body {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    * {
        padding: 0;
        margin: 0;
        list-style: none;
    }
</style>