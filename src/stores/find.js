import vue from 'vue';

const find = {
    state: {
        mediaList: [],
        activeList: [],
    },
    mutations: {
        setMediaList(state, mediaList) {
            state.mediaList = mediaList;
        },
        setBanner(state, activeList) {
            state.activeList = activeList;
        },
    },
    actions: {
        getMediaList(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/article/list?articleType=2').then((response) => {
                context.commit('setMediaList', response.data.data);
            });
        },
        getBanner(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/banner/banners?count=2').then((response) => {
                context.commit('setBanner', response.data.data);
                console.log(response.data.data);
            });
        },
    },
};


export default find;
