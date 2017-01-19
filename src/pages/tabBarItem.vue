<template>
    <div
        class="item-container"
        @click="handleClick"
    >
        <img
            :src="selected ? imageSelected : image"
            class="item-img"
        >
        <p
            class="item-name"
            :class="{ selected }"
        >
            {{ name }}
        </p>
    </div>
</template>

<script>
    import defaultImage from '../assets/home@3x.png';
    import defaultImageSelected from '../assets/home_hover@3x.png';
    import Invest from './invest/invest.vue';

    export default {
        name: 'tabBarItem',
        props: {
            name: {
                type: String,
                default: 'name',
            },
            image: {
                type: String,
                default: defaultImage,
            },
            imageSelected: {
                type: String,
                default: defaultImageSelected,
            },
            selected: {
                type: Boolean,
                default: false,
            },
            route: {
                type: String,
                default: '/',
            },
        },
        methods: {
            handleClick() {
                this.$router.push(`/main${this.route}`);
            },
        },
        components: {
            Invest,
        },
    };
</script>

<style lang="scss">
   .item-container {
       float: left;
       width: 25%;
       text-align: center;
   }
   .item-name {
       font-size: 11px;
       color: #666;
       &.selected {
           color: #ff6c00;
       }
   }
   .item-img {
       width: 24px;
       height: 24px;
   }
</style>
