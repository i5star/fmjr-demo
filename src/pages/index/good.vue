<template>
    <div class="index-good">
        <div>
            <div>
                <span>{{ lendDate }}个月</span>
            </div>
            <span>{{ subjectName }}</span>
        </div>
        <div class="fix-float">
            <div>
                <p>
                    <strong>{{ lendRate }}</strong>+{{ rewardRate }}
                </p>
                <p>年化收益(%)</p>
            </div>
            <div>
                <div>
                    <p>
                        <span>
                            <strong>{{ (lendAmt - investMoney) / 10000 }}</strong>.00
                        </span>
                        万元可投
                    </p>
                    <div class="fix-float">
                        <div>
                            <div></div>
                        </div>
                        <p>{{ investMoney / lendAmt * 100 | toFixed(0) }}%</p>
                    </div>
                    <p>融资总额{{ lendAmt / 10000 }}万</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Good',
        props: {
            lendDate: {
                type: Number,
            },
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
    .index-good {
        $allColor: #ff6c00;
        padding:10px 15px;
        background-color: white;
        margin-top: 5px;

        // 上面部分
        & > :nth-child(1) {
            $labelColor: #3fadf9;
            & > div {
                display: inline-block;
                width: 48px;
                height: 22px;
                border-radius: 5px;
                border: 1px solid $labelColor;
                text-align: center;
                & > span {
                    color: $labelColor;
                    font-size: 13px;
                    line-height: 22px;
                }
            }
            & > span {
                font-size: 13px;
                color: 333;
            }
        }

        // 下面部分
        & > :nth-child(2) {
            // 下左部分
            & > :nth-child(1) {
                float: left;
                width: 40%;
                & > :nth-child(1) {
                    color: $allColor;
                    font-size: 18px;
                    padding:20px 0px 13px;
                    & > strong {
                        font-size: 30px;
                    }
                }
                & > :nth-child(2) {
                    font-size: 13px;
                    color: #666;
                }
            }

            // 下右部分
            & > :nth-child(2) {
                $rateTextWidth: 45px;

                float: right;
                width:60%;
                & > div {
                    padding:20px $rateTextWidth 13px 0px;
                    & > :nth-child(1) {
                        font-size: 13px;
                        color: #666;
                        & > span {
                            color: $allColor;
                            & > strong {
                                font-size: 18px;
                            }
                        }
                    }
                    & > :nth-child(2) {
                        & > :nth-child(1) {
                            width: 100%;
                            height: 2.5px;
                            background-color: #f1f1f1; 
                            & > div {
                                width: 100%;
                                height: 2.5px;
                                margin:5px 5px 15px 0px;
                                background-color: $allColor;
                            }
                        }
                        & > :nth-child(2) {
                            float: right;
                            margin-right: -$rateTextWidth;
                            margin-top: -11px;
                            color :#999;
                        }
                    }
                    & > :nth-child(3) {
                        font-size: 13px;
                        color: #666;
                        text-align: right;
                        padding-top: 8px;
                    margin-right: -$rateTextWidth;
                    }
                }
            }
        }
    }
</style>