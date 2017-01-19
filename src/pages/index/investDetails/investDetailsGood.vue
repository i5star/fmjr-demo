<template>
    <div class="vest-good">
        <div>
            <span>{{ subjectName }}</span>
            <span>按月付息，到期还本</span>
        </div>
        <div>
            <div>
                <p>
                    <span>{{ lendRate | toFixed(1) }}</span>+{{ rewardRate }}
                </p>
                <p>年化收益(%)</p>
            </div>
        </div>
        <div>
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
    <span>发布日期：2016年12月28日</span>&nbsp;&nbsp;&nbsp;
    <span>还款日期：2016年12月28日</span>
    <p>剩余时间：8天13小时42分07秒</p>
</div>
</div>

</div>
</template>

<script>
    export default {
        name: 'vestDetailsGood',
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

        },
        filters: {
            toFixed(value, digit) {
                if (typeof value === 'number') {
                    return value.toFixed(digit);
                }
                return value;
            },
        },
    };
</script>

<style lang="scss">
    .vest-good {
        $allColor: #ff6c00;
        padding:15px 0px;
        background-color: white;

        // 上面部分
        & > :nth-child(1) {
            padding:0 20px;
            $labelColor: #3fadf9;
            & > span:nth-of-type(1) {
                font-size: 15px;
                padding-right: 10px;
                color: #333;
            }
             & > span:nth-of-type(2) {
                    display: inline-block;
                    width: 115px;
                    text-align: center;
                    padding:2px;
                    color: $labelColor;
                    font-size: 11px;
                    border-radius: 1px;
                    border: 1px solid $labelColor;
            }
        }

        // 中间部分
        & > :nth-child(2) {
                 padding:0 20px;
                 text-align: center;
                 color: #666;
                 p:nth-of-type(1) {
                   color: $allColor;
                   padding:25px 0px 13px 0px;
                   padding-bottom:10px;
                   text-align: center;
                    font-size: 24px;
                   & > span {
                       font-size: 34px;
                   }
               }
        }
        & > :nth-child(3) {
              padding:13px 20px 8px;
                .allLength {
                    width:85%;
                    height:2.5px;
                    background-color: #e5e5e5;
                    float:left; 
                    & > .rate{
                        height: 100%;
                         background-color: $allColor;
                    }
                }
                span{
                    float: right;
                    margin-top: -8px;
                    margin-right: 10px;
                    color:#999;
                }
        }
        ul {
            width: 100%;
            padding-bottom: 20px;
           li{
               color:#666;
               width:33%;
               float:left;
               text-align:center;
               font-size:13px;
               p:nth-of-type(1){
                   height: 36px;
                   line-height: 30px;
               }
           } 
        }
        .invest-day {
            border-top:1px solid #e5e5e5;
            padding:20px 20px;
            font-size:12px;
            span{
                color:#999;
            }
            p{
                padding-top:12px;
                color:#666;
            }
        }
    }
</style>