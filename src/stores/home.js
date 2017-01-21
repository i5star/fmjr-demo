import vue from 'vue';

const home = {
    state: {
        goodList: [],
        bannerList: [],
        notice: [],
        detailsGoodList: [],
        projectDescriptionList: [],
        relativeInformationList: [],
        depositsHistoryList: [],
        availableBalance: 0,
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
        // 项目描述
        setProjectDescription(state, projectDescriptionList) {
            state.projectDescriptionList = projectDescriptionList;
        },
        // 相关资料
        setRelativeInformation(state, relativeInformationList) {
            state.relativeInformationList = relativeInformationList;
        },
        // 投资记录
        setDepositsHistory(state, depositsHistoryList) {
            state.depositsHistoryList = depositsHistoryList;
        },
        // 分秒省心
        setShengXinGoodList(state, shengXinGoodList) {
            state.shengXinGoodList = shengXinGoodList;
        },
        // 分秒月盈
        setYueYingGoodList(state, yueYingGoodList) {
            state.yueYingGoodList = yueYingGoodList;
        },
        // 账户可用余额
        setAvailableBalance(state, availableBalance) {
            state.availableBalance = availableBalance;
        },
    },
    actions: {
        getGoodList(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/list?pageOffset=1&pageSize=3').then((response) => {
                // console.log(response.data.data);
                context.commit('setGoodList', response.data.data);
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
        getDetailsGoodList(context, id) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/view?id=' + id.id).then((response) => {
                context.commit('setDetailsGoodList', response.data.data);
            });
        },
        // 分秒省心
        getShengXinGoodList(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/list?pageOffset=1&pageSize=5&subjectProdType=5').then((response) => {
                context.commit('setShengXinGoodList', response.data.data);
            });
        },
        // 分秒月盈
        getYueYingGoodList(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/list?pageOffset=1&pageSize=5&subjectProdType=6').then((response) => {
                context.commit('setYueYingGoodList', response.data.data);
            });
        },
        // 项目描述
        getProjectDescription(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/viewInfo?id=310012').then((response) => {
                context.commit('setProjectDescription', response.data.data);
            });
        },
        // 相关资料
        getRelativeInformation(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/viewFile?id=310012').then((response) => {
                context.commit('setRelativeInformation', response.data.data);
            });
        },
        // 投资记录
        getDepositsHistory(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/investmentList?id=310012').then((response) => {
                context.commit('setDepositsHistory', response.data.data);
            });
        },
        // 账户可用余额
        getAvailableBalance(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/user/getBlance?acctKey=f4b37ae9978cb85c0529de792b87f115').then((response) => {
                context.commit('setAvailableBalance', response.data.data.balance);
                // console.log(response.data.data.balance);
            });
        },

    },
};

export default home;