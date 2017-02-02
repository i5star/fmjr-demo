<template>
   <div class="greenHand">
     <div class="greenHand-banner">
        <img src="../../../assets/angle-left@3x.png" class="backBtn" @click="back">
    </div>
    <div class="fenmiao-advantage fix-float">
        <h1>分秒优势</h1>
        <div>
            <img src="../../../assets/xs_advantage01@3x.png">
            <h2>股东优势</h2>
            <p>央企多级全资公司参股注册资金5亿元</p>
        </div>
        <div>
            <img src="../../../assets/xs_advantage02@3x.png">
            <h2>项目优势</h2>
            <p>政府、央企、大型国有公司及产业基金项目</p>
        </div>
        <div>
            <img src="../../../assets/xs_advantage03@3x.png">
            <h2>资金安全</h2>
            <p>银行级别风控第三方资金存管</p>
        </div>
        <div>
            <img src="../../../assets/xs_advantage04@3x.png">
            <h2>收益稳健</h2>
            <p>预期年化收益6%-12% 投资门槛低</p>
        </div>
    </div>
    <div class="operation-mode">
        <h1>运营模式</h1>
        <div>
            <img src="../../../assets/xs_moshi@3x.png" >
        </div>
    </div>
    <div class="investment-process">
        <h1>投资流程</h1>
        <div>
            <ul class="fix-float">
                <li><span>注册</span></li>
                <img src="../../../assets/xs_jiantou@3x.png">
                <li><span>开通托管账户</span></li>
                <img src="../../../assets/xs_jiantou@3x.png">
                <li><span>投资</span></li>
                <img src="../../../assets/xs_jiantou@3x.png">
                <li><span>收益提现</span></li>
            </ul>
        </div>
    </div>
   </div>
</template>

<script>
    export default {
        name: 'GreenHand',
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>

<style lang="scss">
    .greenHand {
        .backBtn {
            height: 20px;
            margin-top: 15px;
            width: 15px;
            padding-left: 15px;
        }
        .greenHand-banner {
            width: 100%;
            height: 155px;
            background: url("../../../assets/banner_anquan@3x.png") 0 0 no-repeat;
            background-size: 100% 100%;
        }
        h1 {
            text-align: center;
            padding: 10px 0px;
            font-weight: normal;
            font-size: 18px;
        }
        .fenmiao-advantage {
            border-bottom: 5px solid #f1f1f1;
            padding-bottom: 10px;
            div {
                float: left;
                width: 25%;
                text-align: center;
                h2 {
                    font-weight: normal;
                    color: #666;
                    font-size: 11px;
                    padding: 13px 0px 7px;
                }
                p {
                    font-size: 7px;
                    color: #888;
                }
                img {
                    width: 40px;
                    height: 40px;
                }
            }
        }
        .operation-mode {
            border-bottom: 5px solid #f1f1f1;
            padding: 15px;
            div {
                img {
                    width: 100%;
                    height: 200px;
                }
            }
        }
        .investment-process {
            padding: 15px;
            div {
                width: 100%;
                border: 1px solid #3fadf9;
                ul {
                    padding: 15px 10px;
                    img {
                        width: 15px;
                        float: left;
                        margin-top: 20px;
                        margin-right: 11px;
                    }
                    li {
                        float: left;
                        width: 19%;
                        text-align: left;
                        span {
                            display: block;
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            text-align: center;
                            line-height: 50px;
                            color: #fff;
                            background-color: #3fadf9;
                        }
                    }
                }
            }
        }
    }
</style>