<template>
    <div class="index-roadmap" id="map">
        <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="banner in bannerList">
               <img :src="banner.pic_url" class="img">
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
    .img {
      width: 100%;
      height: 155px;  
    }
</style>