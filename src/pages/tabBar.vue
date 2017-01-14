<template>
    <div class="tab-bar">
        <ul class="tab-bar-container">
            <TabBarItem name="首页" :image="require('../assets/home@3x.png')" :focus="true"></TabBarItem>
            <TabBarItem name="投资" :image="require('../assets/invest@3x.png')"></TabBarItem>
            <TabBarItem name="发现" :image="require('../assets/find@3x.png')"></TabBarItem>
            <TabBarItem name="我的" :image="require('../assets/my@3x.png')"></TabBarItem>
        </ul>
    </div>
</template>

<script>
    import TabBarItem from './tabBarItem';

    export default {
        data() {
            return {
            };
        },
        name: 'tabBar',
        components: {
            TabBarItem,
        },
    };
</script>
<style>
    .tab-bar {
        width: 100%;
        height: 49px;
        background-color: #f1f1f1;
        position: fixed;
        bottom: 0;
    }
    .tab-bar-container {
        padding: 6px 0px; 
    }
    
</style>