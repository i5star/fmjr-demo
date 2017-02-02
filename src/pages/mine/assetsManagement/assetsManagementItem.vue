<template>
   <div class="assetsManagementItem fix-float">
       <div class="itemTitle fix-float">
           <span>新手专享-20170111期</span>
           <span>回款明细</span>
       </div>
       <div class="itemList">
           <p class="itemNum">30000.00</p>
           <p class="itemNumInfo">投资金额</p>
       </div>
       <div class="itemList">
           <p class="itemNum">400.00</p>
           <p class="itemNumInfo">利息</p>
       </div>
       <div class="itemList">
           <p class="itemNum">8%</p>
           <p class="itemNumInfo">年化收益</p>
       </div>
       
   </div>
</template>

<script>
    export default {
        name: 'assetsManagementItem',
        data() {
            return {
                title: '资产管理',
            };
        },
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>

<style lang="scss">
    .assetsManagementItem {
        padding: 15px;
        border-top: 5px solid #f1f1f1;
        font-size: 15px;
        .itemTitle {
            span:nth-of-type(1) {
                color: #666;
                float: left;
            }
            span:nth-of-type(2) {
                color: #3fadf9;
                border: 1px solid #3fadf9;
                border-radius: 2px;
                padding: 2px 5px;
                float: right;
            }
        }
        .itemList {
            float: left;
            width: 33%;
            text-align: center;
            padding-top: 23px;
            .itemNum {
                color: #ff6c00;
                padding-bottom: 10px;
            }
            .itemNumInfo {
                color: #999;
            }
        }
    }
</style>