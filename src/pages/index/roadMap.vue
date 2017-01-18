<template>
    <div class="index-roadmap">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="banner in bannerList">
                <a :href="banner.linkUrl" v-bind:style="{'background-image':'url('+ banner.rootPath+banner.picUrl +')'}" class="index-roadmap-a"></a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import vue from 'vue';
    import { Swipe, SwipeItem } from 'mint-ui';

    export default {
        name: 'RoadMap',
        data() {
            return {
                bannerList: [],
            };
        },
        components: {
            Swipe,
            SwipeItem,
        },
        computed: mapState({
            bannerList: state => state.bannerList,
        }),
        created() {
            this.$store.dispatch('getBanners');
        },
    };
</script>

<style lang="scss">
    .index-roadmap {
        width: 100%;
        height: 155px;
        background-color: cornflowerblue;
    }
    .index-roadmap-a{
            display: block;
            width: 100%;
            height: 155px;
            background-position: center center;
            background-size: 100% 100%;
        }
</style>