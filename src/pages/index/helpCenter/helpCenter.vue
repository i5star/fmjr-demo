<template>
   <div>
       <ComHead :pageTitle="title"></ComHead>
       <div class="help-menu fix-float">
           <div class="menu1 menu fix-float">
                <div>
                    <img src="../../../assets/help_land@3x.png" >
                    <p>登录与注册</p>
                </div>
                <div class="middle">
                    <img src="../../../assets/help_anquan@3x.png" >
                    <p>认证与安全</p>
                </div>
                <div>
                    <img src="../../../assets/help_chongzhi@3x.png" >
                    <p>充值与提现</p>
                </div>
           </div>
           <div class="menu2 menu fix-float">
               <div>
                    <img src="../../../assets/help_touzi@3x.png" >
                    <p>投资</p>
                </div>
                <div class="middle">
                    <img src="../../../assets/help_xinshou@3x.png" >
                    <p>新手专享</p>
                </div>
                <div>
                    <img src="../../../assets/help_zifei@3x.png" >
                    <p>资费声明</p>
                </div>
           </div>
       </div>
       <div class="help-contact">
           <p>
               <img src="../../../assets/help_kefu@3x.png">
               <span>联系客服：&nbsp;400-608-2001</span>
               <span>（9:30-18:30）</span>
           </p>
           <p>
               <img src="../../../assets/help_weixin@3x.png">
               <span>官方微信</span>
              
           </p>
           <div class="help-weixin">
               <img src="../../../assets/erweima@3x.png" class="weixin">
           </div>
            
       </div>
   </div>
</template>

<script>
    import ComHead from '../../comHead';

    export default {
        name: 'HelpCenter',
        data() {
            return {
                title: '帮助中心',
            };
        },
        components: {
            ComHead,
        },
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>

<style lang="scss">
    .help-menu {
        padding: 15px;
        border-bottom: 5px solid #f1f1f1;
        .menu1 {
            border-bottom: 1px solid #e5e5e5;
        }
        .menu {
            font-size: 13px;
            color: #666;
            div {
                float: left;
                /*height: 100px;*/
                width: 33%;
                text-align: center;
                padding: 20px 0px;
                img {
                    width: 37px;
                    height: 35px;
                    padding-bottom: 15px;
                }
            }
        }
        .middle {
            border-left: 1px solid #e5e5e5;
            border-right: 1px solid #e5e5e5;
        }
    }
    
    .help-contact {
        padding: 0px 15px;
        p {
            padding: 15px 0px;
            over-flow: hidden;
            img {
                width: 20px;
                height: 20px;
                float: left;
                margin-right: 8px;
            }
            span:nth-of-type(1) {
                font-size: 15px;
                color: #666;
            }
            span:nth-of-type(2) {
                font-size: 12px;
                color: #999;
            }
        }
        p:nth-of-type(1) {
            border-bottom: 1px solid #e5e5e5;
        }
        .help-weixin {
            text-align: center;
            .weixin {
                width: 145px;
                height: 145px;
                margin-top: -35px;
            }
        }
    }
</style>