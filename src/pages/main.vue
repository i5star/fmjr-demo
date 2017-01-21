<template>
    <div class="main-div">
        <router-view></router-view>
        <TabBar></TabBar>
    </div>
</template>

<script>
    import TabBar from './tabBar';

    export default {
        name: 'Main',
        components: {
            TabBar,
        },
    };
</script>
<style>
    .main-div{
        width:100%;
        height:100%;
    }
</style>