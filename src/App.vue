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
    body,
    html,
    #app {
        width: 100%;
        height: 100%;
        /*overflow: hidden;*/
        font-family: "HiraginoSansGB-w3", Arial, Verdana, 微软雅黑, 黑体, serif;
    }
    
    * {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    
    .fix-float {
        &::after {
            content: ' ';
            display: block;
            clear: both;
        }
    }
</style>