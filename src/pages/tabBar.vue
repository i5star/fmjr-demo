<template>
    <div class="tab-bar">
        <ul class="tab-bar-container">
            <TabBarItem
                v-for="(item, index) of items"
                :name="item.name"
                :image="item.image"
                :imageSelected="item.imageSelected"
                :selected="index === selectedIndex"
            ></TabBarItem>
        </ul>
    </div>
</template>

<script>
    import TabBarItem from './tabBarItem';

    export default {
        data() {
            return {
                items: [
                    {
                        name: '首页',
                        image: require('../assets/home@3x.png'),
                        imageSelected: require('../assets/home_hover@3x.png'),
                    },
                    {
                        name: '投资',
                        image: require('../assets/invest@3x.png'),
                        imageSelected: require('../assets/invest_hover@3x.png'),
                    },
                    {
                        name: '发现',
                        image: require('../assets/find@3x.png'),
                        imageSelected: require('../assets/find_hover@3x.png'),
                    },
                    {
                        name: '我的',
                        image: require('../assets/my@3x.png'),
                        imageSelected: require('../assets/my_hover@3x.png'),
                    },
                ],
                selectedIndex: 0,
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