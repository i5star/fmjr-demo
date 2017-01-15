<template>
    <div class="navigatorBarItem-container" @click="jump">
        <img
            :src="image"
            class="navigatorBar-item-img"
        >
        <p
            class="navigatorBar-item-name"
        >
            {{ name }}
        </p>
    </div>
    
</template>

<script>
    import defaultImageNav from '../../assets/home_safe@3x.png';

    export default {
        name: 'navigatorBarItem',
        props: {
            name: {
                type: String,
                default: 'name',
            },
            image: {
                type: String,
                default: defaultImageNav,
            },
        },
        methods: {
            jump() {
                console.log('这是一个跳转的页面');
            },
        },
    };
</script>

<style lang="scss">
   .navigatorBarItem-container {
       float: left;
       width: 25%;
       text-align: center;
   }
   .navigatorBar-item-name {
       font-size: 11px;
       color: #666;
       padding-top: 9px;
   }
   .navigatorBar-item-img {
       width: 40px;
       height: 40x;
   }
</style>
