<template>
    <div>
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