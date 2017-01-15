<template>
    <div class="index">
        <RoadMap></RoadMap>
        <NavigatorBar></NavigatorBar>
        <GoodList></GoodList>
    </div>
</template>

<script>
    import RoadMap from './roadMap';
    import NavigatorBar from './navigatorBar.vue';
    import GoodList from './goodList.vue';

    export default {
        name: 'index',
        components: {
            RoadMap,
            NavigatorBar,
            GoodList,
        },
    };
</script>

<style lang="scss">
    .index {
        width: 100%;
        height: 100%;
    }
</style>