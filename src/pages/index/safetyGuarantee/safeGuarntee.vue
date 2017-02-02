<template>
    <div>
        <div class="safeGuarnteeInfo">
             <div class="messageBox" v-show="step1">
                 <div class="messageBox-info">
                     <p>强大的企业背景</p>
                     <p>保通控股有限公司是一家专门从事投资管理、资产管理、项目投资、投资咨询等业务的大型企业，注册资金5亿元，成立初期便获得央企多级全资子公司的战略投资。目前公司与政府、央企、大型国有公司及产业基金建立了良好的业务联系，具备“天时、地利、人和”的成长条件和发展背景。</p>
                 </div>
                 <div class="close" @click="stepIsShow1">
                     X
                 </div>
             </div>
             <div class="messageBox" v-show="step2">
                 <div class="messageBox-info">
                     <p>借款机构准入审查</p>
                     <p>平台的项目多数来自于政府、央企、大型国有公司及产业基金，借款机构筛选严苛，分秒金融对借款机构设定了严格的准入审查机制，对机构的的资金实力、经营情况、信用状况、风控能力、偿债能力等都要进行严格的审查，符合标准且通过审核的机构方可与平台合作为用户提供服务。</p>
                 </div>
                 <div class="close" @click="stepIsShow2">
                     X
                 </div>
             </div>
             <div class="messageBox" v-show="step3">
                 <div class="messageBox-info">
                     <p>对项目进行实地考察审核</p>
                     <p>分秒金融的专业风控团队对建设企业及融资项目进行严格的实地考察，审核建设企业及融资项目的背景、财务报表及以往经营状况等数十项材料，结合资料审查和数据分析综合评估项目的还款意愿及还款能力，筛选出最优质的融资项目。资产通过第三方评估机构估值后办理相关抵押手续。</p>
                 </div>
                 <div class="close" @click="stepIsShow3">
                     X
                 </div>
             </div>
             <div class="messageBox" v-show="step4">
                 <div class="messageBox-info">
                     <p>真正的第三方资金托管</p>
                     <p>分秒金融致力于为投资人做最安全的投资平台，资金完全不经手平台，真正采用第三方资金托管，资金流转在第三方支付公司（汇潮支付）实现，通过第三方资金托管实现了平台和借贷双方、合作机构方资金的完全隔离，为投资人提供安全的资金托管和流向监管渠道。同时，第三方资金托管平台能有效保障用户账户资金独立存放，从而最大限度的保障了用户的资金安全。</p>
                 </div>
                 <div class="close" @click="stepIsShow4">
                     X
                 </div>
             </div>
             <div class="messageBox" v-show="step5">
                 <div class="messageBox-info">
                     <p>完善的贷后管理</p>
                     <p>平台对借款机构及抵质押物情况进行定期追踪检查，严格控制资金用途，避免资金挪作他用，规避欺诈风险，保证专款专用。在项目建设完成后，派专人高频监控借款机构的经营情况，及时更新借款机构的真实还款能力，监管借款机构按时还款并对可能的风险及时预警。</p>
                 </div>
                 <div class="close" @click="stepIsShow5">
                     X
                 </div>
             </div>
             <div class="messageBox" v-show="step6">
                 <div class="messageBox-info">
                     <p>专业客服顾问式指导</p>
                     <p>平台拥有专业的投资理财顾问团队，为客户提供理财指导、项目资金流向跟踪、还款提醒、投资金额建议等全方位顾问式指导。为投资理财客户合理配置资产，实现收益最大化提供投资策略指导，降低投资风险，VIP会员用户还可以享受专业客服一对一投资指导。</p>
                 </div>
                 <div class="close" @click="stepIsShow6">
                     X
                 </div>
             </div>
             <div class="messageBox" v-show="step7">
                 <div class="messageBox-info">
                     <p>权威律师行提供法律保障</p>
                     <p>平台引入行业权威的律师事务所作为平台法律顾问，为平台提供全程法律建议、咨询及保障，确保平台及交易各方操作符合国家政策法规要求，保障各方利益。</p>
                 </div>
                 <div class="close" @click="stepIsShow7">
                     X
                 </div>
             </div>
             <div class="messageBox" v-show="step8">
                 <div class="messageBox-info">
                     <p>系统与数据安全</p>
                     <p>分秒金融打造最有安全保障的投资平台，拥有行业领先的技术团队和先进的加密技术，依托阿里云强大的硬件与网络，采用云端、线下双服务器交互数据管理，系统架构采用前后端分离安全设计，采用SSL证书加密数据传输，符合金融安全标准，尽最大努力保护投资人和借款人的资金和账户信息安全。</p>
                 </div>
                 <div class="close" @click="stepIsShow8">
                     X
                 </div>
             </div>
        </div>
        <div  class="safeGuarntee">
                <div class="safe-banner">
                    <img src="../../../assets/angle-left@3x.png" class="backBtn" @click="back">
                </div>
                <div class="safe-step" @click="stepIsShow1">
                    <img src="../../../assets/1qiyebeijing@3x.png" class="stepImg">
                    <span>强大的企业背景</span>
                    <img src="../../../assets/1@3x.png" class="stepNum"> 
                </div>
                <div class="safe-step safe-step2 title-left fix-float"  @click="stepIsShow2">
                    <img src="../../../assets/2shencha@3x.png" class="stepImg">
                    <span>借款机构准入审查</span>
                    <img src="../../../assets/2@3x.png" class="stepNum num-left"> 
                </div>
                <div class="safe-step fix-float"  @click="stepIsShow3 ">
                    <img src="../../../assets/3shidishenhe@3x.png" class="stepImg">
                    <span>项目实地考察审核</span>
                    <img src="../../../assets/3@3x.png" class="stepNum"> 
                </div>
                <div class="safe-step safe-step4 title-left fix-float"  @click="stepIsShow4">
                    <img src="../../../assets/4disanfang@3x.png" class="stepImg">
                    <span>真正的第三方资金托管</span>
                    <img src="../../../assets/4@3x.png" class="stepNum num-left"> 
                </div>
                <div class="safe-step fix-float"  @click="stepIsShow5">
                    <img src="../../../assets/5daihouguanli@3x.png" class="stepImg">
                    <span>完善的贷后管理</span>
                    <img src="../../../assets/5@3x.png" class="stepNum"> 
                </div>
                <div class="safe-step safe-step6 title-left fix-float"  @click="stepIsShow6">
                    <img src="../../../assets/6zhuanyekefu@3x.png" class="stepImg">
                    <span>专业客服顾问式指导</span>
                    <img src="../../../assets/6@3x.png" class="stepNum num-left"> 
                </div>
                <div class="safe-step fix-float"  @click="stepIsShow7">
                    <img src="../../../assets/7lvshi@3x.png" class="stepImg">
                    <span>权威律师提供法律保障</span>
                    <img src="../../../assets/7@3x.png" class="stepNum"> 
                </div>
                <div class="safe-step safe-step8 title-left fix-float"  @click="stepIsShow8">
                    <img src="../../../assets/8xitongshuju@3x.png" class="stepImg">
                    <span>系统与数据安全</span>
                    <img src="../../../assets/8@3x.png" class="stepNum num-left"> 
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SafeGuarntee',
        data() {
            return {
                step1: false,
                step2: false,
                step3: false,
                step4: false,
                step5: false,
                step6: false,
                step7: false,
                step8: false,
            }
        },
        methods: {
            back() {
                this.$router.back();
            },
            stepIsShow1() {
                this.step1 = !this.step1;
            },
            stepIsShow2() {
                this.step2 = !this.step2;
            },
            stepIsShow3() {
                this.step3 = !this.step3;
            },
            stepIsShow4() {
                this.step4 = !this.step4;
            },
            stepIsShow5() {
                this.step5 = !this.step5;
            },
            stepIsShow6() {
                this.step6 = !this.step6;
            },
            stepIsShow7() {
                this.step7 = !this.step7;
            },
            stepIsShow8() {
                this.step8 = !this.step8;
            },
        }
    }
</script>

<style lang="scss">
    .safeGuarntee {
        width: 100%;
        height: 100%;
        .backBtn {
            height: 20px;
            margin-top: 15px;
            width: 15px;
            padding-left: 15px;
        }
        .safe-banner {
            width: 100%;
            height: 155px;
            background: url("../../../assets/banner_anquan@3x.png") 0 0 no-repeat;
            background-size: 100% 100%;
        }
        .safe-step {
            padding: 10px 43px;
            background-color: #fff;
            color: #666;
            position: relative;
            font-size: 18px;
            .stepImg {
                width: 98px;
                height: 93px;
            }
            span {
                float: right;
                line-height: 93px;
            }
            .stepNum {
                height: 74px;
                float: left;
                position: absolute;
                left: 230px;
                top: 15px;
            }
        }
        .title-left {
            span {
                float: left;
                line-height: 93px;
            }
            .stepImg {
                float: right;
            }
        }
        .num-left {
            left: 80px ! important;
        }
        .safe-step2 {
            background-color: #f2fcff;
        }
        .safe-step4 {
            background-color: #fffaf2;
        }
        .safe-step6 {
            background-color: #fafff2;
        }
        .safe-step8 {
            background-color: #fff4f2;
        }
    }
    
    .safeGuarnteeInfo {
        .messageBox {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 20;
            background-color: rgba(0, 0, 0, 0.8);
            color: #fff;
            .messageBox-info {
                padding: 40px 15px;
                text-indent: 2em;
                p:nth-of-type(1) {
                    font-size: 18px;
                    padding-bottom: 15px;
                }
                p:nth-of-type(2) {
                    font-size: 15px;
                    line-height: 25px;
                }
            }
            .close {
                width: 40px;
                height: 40px;
                color: #fff;
                font-size: 30px;
                line-height: 40px;
                text-align: center;
                border: 2px solid #fff;
                border-radius: 50%;
                position: absolute;
                left: 50%;
                bottom: 31px;
                margin-left: -20px;
            }
        }
    }
</style>