<template>
    <div id="app">
        <router-view></router-view>
        <TabBar></TabBar>
    </div>
</template>

<script>
    import TabBar from './pages/tabBar';

    export default {
        name: 'app',
        components: {
            TabBar,
        },
    };
</script>

<style lang="scss">
    body, html, #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    * {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    #app {
        overflow-y: scroll;
    }
    .fix-float {
        &::after {
            content: ' ';
            display: block;
            clear: both;
        }
    }
</style>