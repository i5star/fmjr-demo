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
        font-family: "HiraginoSansGB-w3",Arial,Verdana,微软雅黑,黑体,serif;
    }
    * {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    #app {
        overflow-y: scroll;
    }
     .com-header {
        height: 40px;
        background-color: #fff;
        font-size:18px;
        color:#333;
        border-bottom:1px solid #e5e5e5;
    }
    .fix-float {
        &::after {
            content: ' ';
            display: block;
            clear: both;
        }
    }
</style>