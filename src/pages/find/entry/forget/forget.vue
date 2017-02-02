<template onload="createCode()">
	 <div class="fm-forget-password1" v-on:click="createCode()">
	 <mt-header  class="com-header" title="找回密码">
			<router-link to="/entry" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="entry-button">
			<div class="entry-button-top">
				 <a><img src="../../../../assets/land_yonghu@2x.png" alt="" /></a>
				<input type="text" placeholder="手机号码"/>
			</div>
			<div class="entry-button-top bottom-1">
				<a><img src="../../../../assets/forget_jiaoyan@2x.png" alt="" /></a>
				<input type="text" placeholder="校验码"/>
				<a class="forget-xzm" id="example" >
					<span class="code" id="checkCode" v-on:click="createCode">2589</span>
				</a>
			</div>
		</div>
		<div class="entry-denglu" @click="forget2Click">
			<a href="javascript:;">
				<span>下一步</span>
			</a>
		</div>
	 </div>
</template>
<script>
	import { Field } from 'mint-ui';

	export default {
		name: 'forget',
		data() {
			return {};
		},
		components: {
			Field,
		},
		methods: {
            forget2Click() {
                this.$router.push('/forget2');
            },
            createCode(){
            	var code;
            	code="";
        	var codeLength = 4; //验证码的长度
			 var checkCode = document.getElementById("checkCode");
			 var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
        	for(var i = 0; i < codeLength; i++) {
					var charNum = Math.floor(Math.random() * 10);
					code += codeChars[charNum];
					 
				}
        	 if(checkCode) {
					checkCode.className = "code";
					checkCode.innerHTML = code;
				} 
            },
       },
	};
</script>
<style lang="scss">
	.fm-forget-password1{
		width: 100%;
		height: 100%;
		background: url("../../../../assets/forget_bg@2x.png") center center no-repeat;
		background-size: cover;
		display: block;
		background-position: center;
		&>.mint-header {
			background-color: transparent;
			margin-bottom:37px !important;
		}
		&>.entry-button {
			width: 90%;
			margin: auto;
			overflow:hidden;
			padding-top:37px;
			margin-bottom:40px;
			
			&>.entry-button-top{
				width:100%;
				float:right;
				height:30px;
				border-bottom:1px  solid #ccc;
				
				&>input{
					background-color:transparent;
					border-width: 0;
					outline: none;
				}
				&>a{
					padding-left:15px;
					 padding-right:12px;
					
					&>img{
						width:16px;
						height:16px;
						text-align: center;
						padding-top:5px;
					}
				}
				&>.forget-xzm{
					float:right;
					display:-webkit-box;					 
					&>span{
						width:75px;
						height:24px;
						color:#fff;
						border: 1px solid #ff6c00;
						display:block;
						background:#ffb580;
						border-radius: 14px;
						display:-webkit-box;
						-webkit-box-align:center;
						-webkit-box-orient: vertical;
						-webkit-box-pack:center;
						-webkit-box-flex:1;
						
					}
				}
			}
		}

	}
</style>