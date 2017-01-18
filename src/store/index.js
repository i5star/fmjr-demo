import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

const index = new vuex.Store({
    state: {
        goodList: [],
        bannerList: [],
    },
    mutations: {
        setGoodList(state, goodList) {
            state.goodList = goodList;
        },
        // setBanners(state, bannerList) {
        //     state.bannerList = bannerList;
        // },
    },
    actions: {
        getGoodList(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/list?pageOffset=2&pageSize=3').then((response) => {
                context.commit('setGoodList', response.data.data.list);
            });
        },
        getBanners(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/banner/banners').then((response) => {
                context.commit('setBanners', response.data.data.list);
            });
        },
    },
});

export default index;
