<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
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