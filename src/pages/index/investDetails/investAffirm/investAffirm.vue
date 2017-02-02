<template>
    <div class="invest-affirm">
        <ComHead :pageTitle="detailsGoodLists.subjectName"></ComHead>
        <div class="left-over fix-float">
            <span>{{detailsGoodLists.subjectName}}剩余金额</span>
            <span class="mainColor">{{detailsGoodLists.lendAmt-detailsGoodLists.investMoney}}元</span>
        </div>
        <div class="invest-detail">
            <div class="invest-detail-main">
            <div class="invest-detail-rate">
                <p>年化收益率: <span class="mainColor">{{detailsGoodLists.lendRate + detailsGoodLists.rewardRate}}%</span> </p>
                <p>投资期限: <span class="mainColor">{{detailsGoodLists.lendCycleValue}}个月</span></p>
            </div>
            <div class="invest-money">
                <p>投资金额(元) <span>100元起投,100的倍数递增...</span></p>
                <div class="fix-float">
                    <span><img src="../../../../assets/tzqr_jian@2x.png" @click="subValue"></span>
                    <input type="number" v-model="investValue" class="mainColor">
                    <span><img src="../../../../assets/tzqr_jia@2x.png" @click="addValue"></span>
                </div>
                <p>投资收益(元): 
                    <span class="mainColor">{{ investValue*(detailsGoodLists.lendRate + detailsGoodLists.rewardRate)/12/100*detailsGoodLists.lendCycleValue | toFixed(2) }}</span>
                </p>
               
            </div>
             <p class="accountRest">账户余额(元): <span class="mainColor">{{ availableBalances }}</span></p>
             </div>
            
            <div class="available-red-package">
                    <div class="discount">
                        <transition  name="slide">
                        <ul class="discount-wrap fix-float"v-if="show">
                            <li :class="{'discount-deduction':redPackage.couponType==1,'discount-raise':redPackage.couponType==2}"  v-for="redPackage in redPackages">
                               <span v-show="redPackage.couponType==1">￥{{redPackage.couponMoney}}元</span>
                               <span v-show="redPackage.couponType==2">{{ redPackage.couponMoney|toFixed(2) }}%</span>
                            </li>
                        </ul>
                        </transition>   
                    </div>
                
                <p>可用红包
                    <span class="mainColor">{{ redPackages[0] ? redPackages[0].couponMoney:0 }}</span>
                    <input v-model="couponCode" v-show="false">
                    <img src="../../../../assets/tzqr_xiala@3x.png" @click="show=!show" v-show="!show">
                    <img src="../../../../assets/tzqr_zhankai@3x.png" v-show="show" @click="show=!show">
                </p>
                   
                <p>已按最优方案匹配红包券</p>
            </div>
            <div class="fixed-bottom">
                <div class="protocol">
                    <input type="checkbox" checked>
                    <span>我已阅读并同意分秒金融<a href="#">《借贷及服务协议》</a></span>
                </div>
                <div class="recharge-btn affirm-btn" v-show="availableBalances<investValue">
                    <p>账户余额不足</p>
                    <p>立即充值</p>
                </div>
                <div class="invest-btn affirm-btn" v-show="availableBalances>investValue">
                    <p>开启财富之旅</p>
                    <p @click="tipMessage">立即投资</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {
        mapState,
    } from 'vuex';
    import ComHead from '../../../comHead.vue';
    import {
        Indicator,
        MessageBox,
        Toast,

    } from 'mint-ui';
    import vue from 'vue';

    export default {
        name: 'InvestAffirm',
        data() {
            return {
                investValue: 1000.00,
                investReward: 0,
                show: false,
                userAcctKey: '',
                couponCode: '',
            };
        },
        components: {
            ComHead,
            Indicator,
            MessageBox,
            Toast,
        },
        computed: mapState({
            detailsGoodLists: state => state.home.detailsGoodList,
            availableBalances: state => state.home.availableBalance,
            redPackages: state => state.home.redPackage,

        }),
        created() {
            this.$store.dispatch('getDetailsGoodList', {
                id: this.$route.params[0],
            });

            // 获取cookie
            this.userAcctKey = this.getUserCookie('acctKey');
            if (this.userAcctKey != null) {
                this.isLogin = true;
                this.$store.dispatch('getAvailableBalance', {
                    acctKey: this.userAcctKey,
                });
                this.$store.dispatch('getRedPackage', {
                    acctKey: this.userAcctKey,
                    subjectId: this.$route.params[0],
                    buyCount: this.investValue,
                });
            }

        },
        filters: {
            toFixed(value, digit) {
                if (typeof value === 'number') {
                    return value.toFixed(digit);
                }
                return value;
            }
        },
        methods: {
            addValue() {
                this.investValue += 1000;
            },
            subValue() {
                if (this.investValue <= 0) {
                    this.investValue = 0;
                } else {
                    this.investValue -= 1000;
                };
            },
            tipMessage() {
                Indicator.open({
                    text: '正在投资中...',
                    spinnerType: 'fading-circle'
                })
                this.couponCode = this.redPackages[0] ? this.redPackages[0].couponCode : 0;
                vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/subject/invest?acctKey=' + this.userAcctKey + '&subjectId=' + this.$route.params[0] + '&buyCount=' + this.investValue + '&channelCode=1&couponCode=' + this.couponCode).then((response) => {
                    Indicator.close();
                    if (response.data.retCode === '0000') {
                        MessageBox.confirm('您已成功投资' + this.investValue + '元,是否去我的资产管理中查看？').then(action => {
                            if (action === 'confirm') {
                                console.log(action);
                            }
                        });
                    } else {
                        Toast({
                            message: response.data.errorDesc,
                            duration: 2000
                        });
                    }
                });
                // setTimeout(() => {
                //     Indicator.close();
                // }, 2000)
            }
        },
    };
</script>
<style lang="scss">
    .slide-enter-active {
        height: 100%;
    }
    
    .slide-leave-active {
        height: 0;
    }
    
    .invest-affirm {
        width: 100%;
        height: 100%;
        $allColor: #ff6c00;
        .left-over {
            padding: 20px 20px;
            border-top: 4px solid #f1f1f1;
            border-bottom: 5px solid #f1f1f1;
            font-size: 15px;
            span:nth-of-type(1) {
                color: #333;
                float: left;
            }
            span:nth-of-type(2) {
                color: $allColor;
                float: right;
            }
        }
        .invest-detail {
            font-size: 15px;
            color: #666;
            padding: 20px 0px 0px;
            .invest-detail-main {
                padding: 0px 20px;
            }
            .mainColor {
                color: $allColor;
            }
            .invest-detail-rate {
                border-bottom: 1px solid #e5e5e5;
                p:nth-of-type(2) {
                    padding: 20px 0px;
                }
            }
            .invest-money {
                padding: 20px 20px;
                p:nth-of-type(1) {
                    padding-bottom: 25px;
                    span {
                        color: #999;
                    }
                }
                div {
                    img {
                        width: 40px;
                        height: 40px;
                        float: left;
                    }
                    input {
                        width: 60%;
                        padding: 5px;
                        height: 25px;
                        float: left;
                        margin: 2px 5px;
                        border: 1px solid #f1f1f1;
                        text-align: right;
                    }
                }
                p:nth-of-type(2) {
                    padding-top: 10px;
                }
            }
            .accountRest {
                border-top: 1px solid #e5e5e5;
                padding: 20px 0px;
                font-size: 15px;
            }
            .available-red-package {
                font-size: 15px;
                padding: 15px 20px;
                border-top: 5px solid #e5e5e5;
                p {
                    padding: 5px 0px;
                }
                p:nth-of-type(1) {
                    margin-top: 10px;
                }
                p:nth-of-type(2) {
                    font-size: 13px;
                    color: #999;
                }
                img {
                    width: 15px;
                    height: 16px;
                    float: right;
                }
            }
            .protocol {
                background-color: #f1f1f1;
                padding: 20px;
                color: #3fAdF9;
                font-size: 13px;
                a {
                    color: #3fAdF9;
                }
            }
            .discount {
                border-bottom: 1px solid #e5e5e5;
                &>.discount-wrap {
                    li {
                        float: left;
                        width: 134px;
                        height: 68px;
                        margin-right: 25px;
                        margin-bottom: 10px;
                        font-size: 18px;
                        line-height: 68px;
                        text-indent: 35px;
                    }
                    .discount-deduction {
                        background: url(../../../../assets/tzqr_dikou@3x.png) center center no-repeat;
                        background-size: 100% 100%;
                        color: #ff6c00;
                    }
                    .discount-raise {
                        background: url(../../../../assets/tzqr_jiaxi@3x.png) center center no-repeat;
                        background-size: 100% 100%;
                        color: #3fadf9;
                    }
                }
            }
            .fix-bottom {
                position: fixed;
            }
            .affirm-btn {
                padding: 20px;
                text-align: center;
                p:nth-of-type(1) {
                    color: #999;
                    font-size: 12px;
                    padding-bottom: 10px;
                }
                p:nth-of-type(2) {
                    color: #fff;
                    font-size: 18px;
                    height: 47px;
                    line-height: 47px;
                    background-color: $allColor;
                    border-radius: 3px;
                }
            }
        }
    }
</style>