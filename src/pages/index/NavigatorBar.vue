<template>
    <div class="navigatorBar">
        <div class="navigatorBar-container">
             <NavigatorBarItem
                v-for="item of items"
                :name="item.name"
                :image="item.image"
            ></NavigatorBarItem>
        </div>
    </div>
</template>

<script>
    import NavigatorBarItem from './navigatorBarItem.vue';

    export default {
        data() {
            return {
                items: [
                    {
                        name: '安全保障',
                        image: require('../../assets/home_safe@3x.png'),
                    },
                    {
                        name: '新手指引',
                        image: require('../../assets/home_new@3x.png'),
                    },
                    {
                        name: '帮助中心',
                        image: require('../../assets/home_help@3x.png'),
                    },
                    {
                        name: '关于分秒',
                        image: require('../../assets/home_us@3x.png'),
                    },
                ],
            };
        },
        name: 'navigatorBar',
        components: {
            NavigatorBarItem,
        },
    };
</script>
<style lang="scss">
    .navigatorBar {
        width: 100%;
        overflow: hidden;
        & > .navigatorBar-container {
            padding:12px 0px;
        }
    }
    
</style>