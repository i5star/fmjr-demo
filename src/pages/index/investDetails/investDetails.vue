<template>
    <div class="invest-details-page" transition="fadeOutLeft">
        <ComHead :pageTitle="title"></ComHead>
        <InvestDetailsGoodList></InvestDetailsGoodList>
        <mt-navbar v-model="selected" class="vest-about">
            <mt-tab-item id="1">
                <p>
                    <img src="../../../assets/tz_miaoshu@3x.png" v-show="selected != 1">
                    <img src="../../../assets/tz_miaoshuhover@3x.png" v-show="selected == 1">
                </p>
                <p>项目描述</p>
                <p><img src="../../../assets/tz_miaoshujd@3x.png" v-show="selected == 1"></p>
            </mt-tab-item>
            <mt-tab-item id="2">
                <p>
                    <img src="../../../assets/tz_fengkong@3x.png" v-show="selected != 2">
                    <img src="../../../assets/tz_fengkonghover@3x.png" v-show="selected == 2">
                </p>
                <p>风控措施</p>
                <p><img src="../../../assets/tz_fengkongjd@3x.png" v-show="selected == 2"></p>
            </mt-tab-item>
            <mt-tab-item id="3">
                <p>
                    <img src="../../../assets/tz_ziliao@3x.png" v-show="selected != 3">
                    <img src="../../../assets/tz_ziliaohover@3x.png" v-show="selected == 3">
                </p>
                <p>相关资料</p>
                <p><img src="../../../assets/tz_ziliaojd@3x.png" v-show="selected == 3"></p>
            </mt-tab-item>
            <mt-tab-item id="4">
                <p>
                    <img src="../../../assets/tz_jilu@3x.png" v-show="selected != 4">
                    <img src="../../../assets/tz_jiluhover@3x.png" v-show="selected == 4">
                </p>
                <p>投资记录</p>
                <p><img src="../../../assets/tz_jilujd@3x.png" v-show="selected == 4"></p>
            </mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="invest-text-wrap">
                <div v-for="item in projectDescriptionLists" class="invest-text invest-info">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.content }}</p>
                </div>
                 </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                 <div class="invest-text-wrap">
                <div  class="invest-text">
                    <h3>风控措施</h3>
                    <p>    1、分秒金融风控部门对借款企业做初级审核；<br>
    2、对借款企业进行实地考察，审核建设企业及融资项目的背景、财务报表及以往经营状况等数十项材料，实行审贷双线全面调查；
    <br>3、第三方企业的反担保保证代偿；
    <br>4、签署回购担保协议；
    <br>5、产品上线再次审核确认；
    <br>6、公司派驻董事及专业团队进驻项目方，进行资金监管、了解项目运营情况，确保企业按期归还借款本息。；
    <br>7、项目建设完成后项目回款；
    <br>8、风险保证金。 </p>
                </div>
                 </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="invest-text-wrap">
                <div v-for="item in relativeInformationLists" class="invest-about">
                    <img :src="item.path" ></img>
                    <p>{{ item.name }}</p>
                </div>
                 </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <div class="invest-text-wrap">
                    <div class="invest-total">
                        <p>已投资总额： <span>200000.00元</span> </p>
                        <p>已投资总人数：<span>48人</span></p>
                    </div>
                    <div  class="invest-record">
                            <ul class="record-title fix-float">
                                <li>投资用户</li>
                                <li>投资金额</li>
                                <li class="thLong">投资时间</li>
                            </ul>
                            <ul class="record-list fix-float"  v-for="item in depositsHistoryLists">
                                <li>{{ item.mobile }}</li>
                                <li>{{ item.buyCount }}</li>
                                <li class="thLong">{{ item.buyDate }}</li>
                            </ul>
                      
                    </div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <div class="invest-btn">
            <p>账户可用余额：<span>{{ availableBalances }}元</span></p>
            <mt-button type="default" class="investBtn"  @click="handleJump">立即投资</mt-button>
        </div>
    </div>
</template>

<script>
    import {
        Navbar,
        TabItem,
        Button,
    } from 'mint-ui';
    import {
        mapState,
    } from 'vuex';
    import InvestDetailsGoodList from './investDetailsGoodList';
    import ComHead from '../../comHead.vue';

    const MintButton = Button;
    export default {
        name: 'InVestDetails',
        data() {
            return {
                title: '投资详情',
                selected: '1',
            };
        },
        components: {
            ComHead,
            InvestDetailsGoodList,
            Navbar,
            TabItem,
            MintButton,
        },
        methods: {
            handleBack() {
                this.$router.back();
            },
            handleJump() {
                this.$router.push('/investAffirm');
            },
        },
        computed: mapState({
            projectDescriptionLists: state => state.home.projectDescriptionList,
            relativeInformationLists: state => state.home.relativeInformationList,
            depositsHistoryLists: state => state.home.depositsHistoryList,
            availableBalances: state => state.home.availableBalance,
        }),
        created() {
            this.$store.dispatch('getProjectDescription');
            this.$store.dispatch('getRelativeInformation');
            this.$store.dispatch('getDepositsHistory');
            this.$store.dispatch('getAvailableBalance');
            console.log(this.availableBalances);
        },
    };
</script>
<style lang="scss">
    .invest-details-page {
        padding-bottom: 100px;
        .vest-about {
            color: #666;
            border-bottom: 1px solid #e5e5e5;
            p:nth-of-type(1) {
                img {
                    width: 50px;
                    height: 50px;
                    padding-bottom: 10px;
                }
            }
            p:nth-of-type(3) {
                img {
                    width: 65%;
                    height: 2px;
                    padding-top: 12px;
                }
            }
            .mint-tab-item-label {
                font-size: 13px ! important;
            }
            .mint-tab-item {
                padding-bottom: 0 ! important;
            }
        }
        .is-selected {
            color: #666 !important;
            border: 0 !important;
        }
        .invest-text-wrap {
            padding: 15px 15px;
        }
        .invest-text {
            h3 {
                font-size: 13px;
                color: #666;
                padding: 10px 0px;
                font-weight: normal;
            }
            p {
                font-size: 11px;
                color: #888;
                line-height: 20px;
            }
        }
        .invest-info {
            p {
                text-indent: 2em;
            }
        }
        .invest-about {
            width: 50%;
            float: left;
            text-align: center;
            padding-bottom: 13px;
            img {
                width: 145px;
                height: 100px;
                padding-bottom: 10px;
            }
            p {
                color: #666;
                font-size: 12px;
            }
        }
        .invest-btn {
            padding: 15px;
            background-color: #f1f1f1;
            p {
                font-size: 12px;
                color: #666;
                span {
                    color: #ff6c00;
                    font-size: 18px;
                }
                padding-bottom:5px;
            }
            position: fixed;
            bottom: 0;
            .investBtn {
                width: 345px;
                background-color: #ff6c00;
                color: white;
                height: 47px;
            }
        }
        .invest-total {
            font-size: 13px;
            color: #666;
            p {
                padding-bottom: 10px;
                span {
                    color: #ff6c00;
                }
            }
        }
        .invest-record {
            border: 1px solid #e5e5e5;
            border-bottom: 0;
            .record-title {
                text-align: center;
                background-color: #f5f5f5;
                font-size: 11px;
                color: #666;
                padding: 10px;
                li {
                    float: left;
                    width: 30%;
                }
                .thLong {
                    width: 120px;
                }
            }
            ul {
                border-bottom: 1px solid #e5e5e5;
            }
            .record-list {
                width: 100%;
                text-align: center;
                li {
                    font-size: 10px;
                    color: #999;
                    width: 30%;
                    padding: 10px 0;
                    float: left;
                }
                .thLong {
                    width: 120px;
                }
            }
        }
    }
</style>