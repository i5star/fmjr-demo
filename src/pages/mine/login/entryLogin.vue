<template>
	<div class="fm-entry-allPage">
		<mt-header  class="com-header">
			<router-link to="/main/find" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="entry-img">
			<img src="../../../assets/land_logo@2x.png" />
		</div>

		<div class="entry-button">
			<div class="entry-button-top">
				<a><img src="../../../assets/land_yonghu@2x.png" alt="" class="entry-eyes-img1"/></a>
				<input type="text" placeholder="手机号码" v-model="loginName"/>
			</div>
			<div class="entry-button-top bottom-1" style="position:relative;" id="app">
				<a><img src="../../../assets/land_mima@2x.png" alt="" class="entry-eyes-img1"/></a>
				<input type="password"  v-if="willShow" placeholder="登录密码" v-model="passWord"/>
				<input type="text" v-else style="position:absolute;left:45px;bottom:5px;" placeholder="登录密码" :value="passWord" />
				<a class="entryLongin-eyes">
					<img src="../../../assets/eye-off@2x.png" class="entry-eyes-img" @click="fn"/>
					<!--<span class="code" id="checkCode" v-on:click="createCode">img</span>-->
				</a>
			</div>
		</div>

		<div class="entry-password" >
			<a>
				<span @click="forgetClick">忘记密码？</span>
			</a>
		</div>
		<div class="entry-denglu" @click="login1">
			<a>
				<span >登录</span>
			</a>
		</div>
		<div class="entry-zhuce">
			<a href="javascript:;">
				<span>没有账号？请注册</span>
			</a>
		</div>
	</div>
</template>
<script>
	import vue from 'vue';
	import { Field, Toast } from 'mint-ui';
	import Validator from 'vue-validator';
	export default {
		name: 'entry',
		data() {
			return {
				willShow:true,
				passWord:'',
				loginName:'',
				phone:'',
				
			};
		},
		components: {
			Field,
		},
		validators: {
			integer: function (val) {
                return /^[1-9]\d*$/.test(val);
            }
		},
		methods: {
            forgetClick() {
                this.$router.push('/forget');
            },
             fn:function(){
	          if(this.willShow==true){
	            this.willShow=false;
	          }else{
	            this.willShow=true
	          }
	        },
	        change(e){
	          	this.passWord = e.target.value;
	        },
	        login1:function () {
       			var reg = /^1\d{10}$/;
       			var regpass = /^[a-zA-Z\d]{6,18}$/;
       			if(!reg.test(this.loginName)){
       				Toast('您输入的手机号不正确');
       				return;
       			}
       			if(!regpass.test(this.passWord)){
       				Toast('请输入6到18位的密码');
       				return;
       			}
   			 vue.axios.get('http://192.168.1.13:8080/jinshizi-manage-web/api/login?loginName='+this.loginName+'&password='+this.passWord).then((response) => {
              	if(response.data.retCode === '0000'){
              		this.$cookie.set('acctKey', response.data.data, {
	                    expires: '7D',
	               });
		            this.$router.back();
              	}else{
              		Toast(response.data.errorDesc);
       				return;
              	}
            });
            }
        },
	};
</script>
<style lang="scss">
	body {
		font-family: "HiraginoSansGB-w3", Arial, Verdana, 微软雅黑, 黑体, serif;
	}
	
	a {
		text-decoration: none;
	}
	
	h2 {
		font-weight: normal;
	}
	 
	.com-header{
		border-bottom:none;
		height:44px;
	}
	
	input::-webkit-input-placeholder{
		font-size:15px;
		color:#999;
		padding-top:10px;
	}
	.bottom-1{
		padding-top:43px;
	}
	.fm-entry-allPage {
		width: 100%;
		height: 100%;
		background: url("../../../assets/land_bg@2x.png") center center no-repeat;
		background-size: cover;
		display: block;
		background-position: center;
		&>.com-header {
			margin-bottom: 15px;
			background: transparent;
		}
		&>.entry-img {
			margin-bottom: 58px;
			&>img {
				width: 90px;
				height: 93px;
				display: block;
				display: -webkit-box;
				-webkit-box-align: center;
				-webkit-box-flex: 1;
				-webkit-box-pack: center;
				-webkit-box-orient: vertical;
				margin: auto;
			}
		}

			
		
		&>.entry-button {
			width: 90%;
			margin: auto;
			overflow:hidden;
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
					&>.entry-eyes-img1{
						width:16px;
						height:16px;
						text-align: center;
						padding-top:5px;
					}
				}
				&>.entryLongin-eyes{
					float:right;
					display:-webkit-box;
					&>.entry-eyes-img{
						 width:20px;
						 height:8px;
						 padding-top:10px;
						 
					}
				}
			}
		}
	}

		.entry-password{
			 padding:30px 0;
				 display:-webkit-box;
			&>a{
			 display:-webkit-box;
				-webkit-box-align:center;
				-webkit-box-flex:1;
				-webkit-box-pack:center;
				-webkit-box-orient: vertical;
				&>span{
					font-size:13px;
					color:#ff6c00;
					text-decoration: underline;
					 
					
					 
				}
			}
		}
		.entry-denglu{
			width:285px;
			height:45px;
			background:#ff6c00;
			margin:auto;
			display:-webkit-box;
			border-radius: 100px;
			margin-bottom:60px;
			
			&>a{
				display:-webkit-box;
				-webkit-box-align:center;
				-webkit-box-flex:1;
				-webkit-box-pack:center;
				-webkit-box-orient: vertical;
				&>span{
					font-size:18px;
					color:#fff;
				}
			}
		}
		.entry-zhuce{
			display:-webkit-box;
			&>a{
				display:-webkit-box;
				-webkit-box-align:center;
				-webkit-box-flex:1;
				-webkit-box-pack:center;
				-webkit-box-orient: vertical;
				&>span{
					font-size:18px;
					color:#ff6c00;
				}
			}
			
		}
</style>