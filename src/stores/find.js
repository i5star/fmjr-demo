import vue from 'vue';

const find = {
    state: {
        mediaList: [],
    },
    mutations: {
        setMediaList(state, mediaList) {
            state.mediaList = mediaList;
        },
    },
    actions: {
        getMediaList(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/article/list/2?pageSize=6').then((response) => {
                context.commit('setMediaList', response.data.data.list);
            });
        },
    },
};


export default find;
