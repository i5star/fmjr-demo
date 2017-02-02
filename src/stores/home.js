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
        shengXinGoodList: [],
        yueYingGoodList: [],
        redPackage: [],
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
        addShengXinGoodList(state, shengXinGoodList) {
            if (shengXinGoodList.data != null && shengXinGoodList.data.length > 0) {
                for (let i = 0; i < shengXinGoodList.data.length; i++) {
                    state.shengXinGoodList.data.push(shengXinGoodList.data[i]);
                }
            }
        },
        // 分秒月盈
        setYueYingGoodList(state, yueYingGoodList) {
            state.yueYingGoodList = yueYingGoodList;
        },
        addYueYingGoodList(state, yueYingGoodList) {
            if (yueYingGoodList.data != null && yueYingGoodList.data.length > 0) {
                for (let i = 0; i < yueYingGoodList.data.length; i++) {
                    state.yueYingGoodList.data.push(yueYingGoodList.data[i]);
                }
            }
        },
        // 账户可用余额
        setAvailableBalance(state, availableBalance) {
            state.availableBalance = availableBalance;
        },
        // 获取红包
        setRedPackage(state, redPackage) {
            state.redPackage = redPackage;
        },
    },
    actions: {
        getGoodList(context) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/list?pageOffset=1&pageSize=3').then((response) => {
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
        getShengXinGoodList(context, pageOffset) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/list?pageOffset=' + pageOffset.pageOffset + '&pageSize=5&subjectProdType=5').then((response) => {
                if (context.state.shengXinGoodList.data == null) {
                    context.commit('setShengXinGoodList', response.data);
                } else {
                    context.commit('addShengXinGoodList', response.data);
                }
            });
        },
        // 分秒月盈
        getYueYingGoodList(context, pageOffset) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/list?pageOffset=' + pageOffset.pageOffset + '&pageSize=5&subjectProdType=6').then((response) => {

                if (context.state.yueYingGoodList.data == null) {
                    context.commit('setYueYingGoodList', response.data);
                } else {
                    context.commit('addYueYingGoodList', response.data);
                }
            });
        },
        // 项目描述
        getProjectDescription(context, id) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/viewInfo?id=' + id.id).then((response) => {
                context.commit('setProjectDescription', response.data.data);
            });
        },
        // 相关资料
        getRelativeInformation(context, id) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/viewFile?id=' + id.id).then((response) => {
                context.commit('setRelativeInformation', response.data.data);
            });
        },
        // 投资记录
        getDepositsHistory(context, id) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/investmentList?id=' + id.id).then((response) => {
                context.commit('setDepositsHistory', response.data);
            });
        },
        // 账户可用余额
        getAvailableBalance(context, acctKey) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/user/getBlance?acctKey=' + acctKey.acctKey).then((response) => {
                context.commit('setAvailableBalance', response.data.data.balance);
            });
        },
        // 红包
        getRedPackage(context, data) {
            vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/user/getCoupons?acctKey=' + data.acctKey + '&subjectId=' + data.subjectId + '&buyCount=' + data.buyCount).then((response) => {
                context.commit('setRedPackage', response.data.data);
            });
        },

    },
};

export default home;