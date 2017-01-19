import vue from 'vue';

const home = {
    state: {
        goodList: [],
        bannerList: [],
        notice: [],
        detailsGoodList: [],
    },
    mutations: {
        setGoodList(state, goodList) {
            state.goodList = goodList;
        },
        setBanners(state, bannerList) {
            state.bannerList = bannerList;
        },
        setNotices(state, notice) {
            state.notice = notice;
        },
        setDetailsGoodList(state, detailsGoodList) {
            state.detailsGoodList = detailsGoodList;
        },
    },
    actions: {
        getGoodList(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/list?pageOffset=1&pageSize=3').then((response) => {
                // console.log(response.data.data);
                context.commit('setGoodList', response.data.data.list);
            });
        },
        getBanners(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/banner/banners').then((response) => {
                context.commit('setBanners', response.data.data);
            });
        },
        getNotices(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/article/list?articleType=1&pageSize=1').then((response) => {
                context.commit('setNotices', response.data.data[0]);
            });
        },
        getDetailsGoodList(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/view?id=310012').then((response) => {
                context.commit('setDetailsGoodList', response.data.data);
                console.log(response.data.data);
            });
        },
    },
};

export default home;
