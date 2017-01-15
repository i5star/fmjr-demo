<template>
    <div class="index-good">
        <div>
            <div>
                <span>2个月</span>
            </div>
            <span>分秒月盈WX0829期</span>
        </div>
        <div class="fix-float">
            <div>
                <p>
                    <strong>7.6</strong>+2
                </p>
                <p>年化收益(%)</p>
            </div>
            <div>
                <p>
                    <span>
                        <strong>15</strong>.00
                    </span>
                    万元可投
                </p>
                <div class="fix-float">
                    <div>
                        <div></div>
                    </div>
                    <p>25%</p>
                </div>
                <p>融资总额20.00万</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Good',
    };
</script>

<style lang="scss">
    .index-good {
        $allColor: #ff6c00;

        width: 100%;
        background-color: white;
        margin-top: 10px;

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

                & > :nth-child(1) {
                    color: $allColor;
                    font-size: 18px;
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
                float: right;

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
                        height: 5px;
                        float: left;
                        & > div {
                            height: 5px;
                            padding-right: 36px;
                            background-color: $allColor;
                        }
                    }
                    & > :nth-child(2) {
                        float: left;
                        margin-right: -36px;
                        width: 36px;
                    }
                }
                & > :nth-child(3) {
                    font-size: 13px;
                    color: #666;
                    text-align: right;
                }
            }
        }
    }
</style>