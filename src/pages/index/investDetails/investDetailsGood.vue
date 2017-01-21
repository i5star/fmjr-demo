<template>
    <div class="vest-good">
        <div class="vest-good-detail" style="background-color: #fff;">
<div class="good-detail-title">
    <span>{{ subjectName }}</span>
    <span>按月付息，到期还本</span>
</div>
<div class="good-detail-rate">
    <p>
        <span>{{ lendRate | toFixed(2) }}</span><span v-show="rewardRate>0" class="rewardRate">+{{ rewardRate }}</span>
    </p>
    <p>年化收益(%)</p>
</div>

<div class="good-detail-percent">
    <div class="fix-float">
        <div class="allLength">
            <div :style="{ width: `${investMoney / lendAmt * 100}%` }" class="rate"></div>
        </div>
        <span>{{ investMoney / lendAmt * 100 | toFixed(0) }}%</span>
    </div>
</div>
<ul class="fix-float">
    <li>
        <p style="font-size:23px">{{ lendCycleValue }}</p>
<p>投资期限（月）</p>
</li>
<li>
    <p style="color:#ff6c00;font-size:18px"><span>{{  investMoney/10000 |  toFixed(2) }}</span></p>
<p>可投金额（万元）</p>
</li>
<li>
    <p style="font-size:18px">{{ lendAmt / 10000 | toFixed(2) }}</p>
<p>融资总额(万元）</p>
</li>
</ul>
<div class="invest-day">
    <span>发布日期：{{ publishDate | todate }}</span>&nbsp;&nbsp;&nbsp;
    <span>还款日期：{{ payBackDate | todate }}</span>
    <p>剩余时间：{{ restTime }}</p>
</div>
</div>
<div class="invest-process fix-float">
    <div class="invest-process-active">
        <p>
            <img src="../../../assets/tz_date@3x.png" v-show="status < 5">
            <img src="../../../assets/tz_datehover@3x.png" v-show="status>=5">
        </p>
        <p>预计起息日</p>
        <p>{{ planInterestDate }}</p>
    </div>
    <div :class="{'invest-process-active': status === 6}">
        <p>
            <img src="../../../assets/tz_zq@3x.png" v-show="status!=6">
            <img src="../../../assets/tz_zqhover@3x.png" v-show="status==6">
        </p>
        <p>拼命赚钱</p>
        <p>收益快速增长中</p>
    </div>
    <div :class="{'invest-process-active': status === 8}">
        <p>
            <img src="../../../assets/tz_hk@3x.png" v-show="status<=8">
            <img src="../../../assets/tz_hkhover@3x.png" v-show="status==8">
        </p>
        <p>预计到期日</p>
        <p>{{ payBackDate }}</p>
    </div>
</div>


</div>
</template>

<script>
    import moment from 'moment';

    // console.log(moment.duration(818373532).get('days'));

    export default {
        name: 'vestDetailsGood',
        data() {
            return {
                restTime:0,
            };
        },
        props: {
            subjectName: {
                type: String,
            },
            lendRate: {
                type: Number,
            },
            rewardRate: {
                type: Number,
            },
            lendAmt: {
                type: Number,
            },
            investMoney: {
                type: Number,
            },
            lendCycleValue: {
                type: Number,
            },
            publishDate: {
                type: String,
            },
            payBackDate: {
                type: String,
            },
            planInterestDate: {
                type: String,
            },
            overDate: {
                type: String,
            },
            status: {
                type: Number,
            },
        },
        filters: {
            toFixed(value, digit) {
                if (typeof value === 'number') {
                    return value.toFixed(digit);
                }
                return value;
            },
            todate(value) {
                return moment(value).locale('zh-cn').format('LL');
            },
            fromNow(value) {
                return value.to(new Date());
            },
        },
        created() {
            var restEvent=setInterval(() => {
                const time = (new Date(this.overDate) - Date.now());
                if(time>0){
                const day = moment.duration(time).get('days');
                const hour = moment.duration(time).get('hours');
                const minutes = moment.duration(time).get('minutes');
                const seconds = moment.duration(time).get('seconds');
                this.restTime = day + '天' + hour + '小时' + minutes + '分' + seconds + '秒';
                }else{
                    clearInterval(restEvent);
                    this.restTime = 0+ '天' + 0 + '小时' +0 + '分' + 0 + '秒';
                }
                return this.restTime;
            }, 1000);
        },
    };
</script>

<style lang="scss">
    .vest-good {
        $allColor: #ff6c00;
        .rewardRate {
            font-size: 24px ! important;
        }
        // 上面部分
        .good-detail-title{
            padding: 15px 20px 0px;
            $labelColor: #3fadf9;
            &>span:nth-of-type(1) {
                font-size: 15px;
                padding-right: 10px;
                color: #333;
            }
            &>span:nth-of-type(2) {
                display: inline-block;
                width: 115px;
                text-align: center;
                padding: 2px;
                color: $labelColor;
                font-size: 11px;
                border-radius: 1px;
                border: 1px solid $labelColor;
            }
        }
        // 中间部分
        .good-detail-rate {
            padding: 0 20px;
            text-align: center;
            color: #666;
            p:nth-of-type(1) {
                color: $allColor;
                padding: 25px 0px 13px 0px;
                padding-bottom: 10px;
                text-align: center;
                font-size: 24px;
                &>span {
                    font-size: 34px;
                }
            }
        }
       .good-detail-percent{
            padding: 13px 20px 8px;
            .allLength {
                width: 85%;
                height: 2.5px;
                background-color: #e5e5e5;
                float: left;
                &>.rate {
                    height: 100%;
                    background-color: $allColor;
                }
            }
            span {
                float: right;
                margin-top: -8px;
                margin-right: 10px;
                color: #999;
            }
        }
        ul {
            width: 100%;
            padding-bottom: 20px;
            li {
                color: #666;
                width: 33%;
                float: left;
                text-align: center;
                font-size: 13px;
                p:nth-of-type(1) {
                    height: 36px;
                    line-height: 30px;
                }
            }
        }
        .invest-day {
            border-top: 1px solid #e5e5e5;
            padding: 20px 20px;
            background-color: #fff;
            font-size: 12px;
            span {
                color: #999;
            }
            p {
                padding-top: 12px;
                color: #666;
            }
        }
        .invest-process {
             text-align: center;
             margin:5px 0; 
             padding:15px 0;
             background-color: #fff;
            div {
                width: 33%;
                float: left;
                font-size: 13px;
                color: #999;
                &>p:nth-of-type(3) {
                    padding-top: 7px;
                }
            }
            .invest-process-active {
                color: $allColor;
            }
            img {
                width: 20px;
                height: 20px;
                padding-bottom: 10px;
            }
        }
    }
</style>