<template>
    <div class="index-roadmap" id="map">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="banner in bannerList">
                <a :href="banner.link_url" v-bind:style="{'background-image':'url('+banner.pic_url+')'}"></a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
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
        created() {
            const url = 'http://192.168.1.13:8080/jinshizi-manage-web/api/banner/banners';
            const self = this;
            vue.axios.get(url).then((response) => {
                self.bannerList = response.data.data;
            });
        },
    };
</script>

<style lang="scss">
    .index-roadmap {
        width: 100%;
        height: 155px;
        background-color: cornflowerblue;
    }
     a {
            display: block;
            width: 100%;
            height: 155px;
            background-position: center center;
            background-size: 100% 100%;
        }
</style>