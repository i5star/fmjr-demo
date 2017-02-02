<template>
	<div>
		<mt-header :title="title" class="com-header">
			<router-link to="/" slot="left">
			</router-link>
		</mt-header>
		<div class="fm-mine-topNav">
			<div class="main-topNav-top">
				<dl>
					<dt><img src="../../assets/my_touxiang@2x.png" alt="" /></dt>
					<dd>
						<a href="javascript:;" class="mine-topNav-a1">
							<span class="mine-topNav-span1">18714752677</span>
							<span class="mine-topNav-span2">新手</span>
						</a>
						<a href="javascript:;" class="mine-topNav-a2"><img src="../../assets/my_message@2x.png" /></a>
					</dd>
				</dl>
			</div>
			<div class="mine-topNav">
				<div class="mine-topNav-navCenter">
					<span class="mine-navCenter-span1">资产总额：</span>
					<a href="javascript:;" class="mine-navCenter-a1">
						<img src="../../assets/find_angle_right@2x.png" />
					</a>
					<span class="mine-navCenter-span2">50000.00</span>
				</div>
			</div>
			<div class="mine-bottomNav">
				<div class="mine-bottomNav-left">
					<span class="mine-money">50000.00</span>
					<span class="mine-balance">可用余额</span>
				</div>
				<div class="mine-bottomNav-right">
					<span class="mine-allspan mine-Withdrawals">提现</span>
					<span class="mine-allspan mine-Recharge">充值</span>
				</div>
			</div>
		</div>
		<div class="fm-mine-message">
			<p>
				<img src="../../assets/home_notice@3x.png" class="mine-message-music"/> 
				<span class="mine-message-span2">开通托管账户，确保您的正常使用和资金安全</span>
				<img src="../../assets/find_angle_right@2x.png" class="mine-message-right"/>
			</p>
		</div>
		<div class="fm-mine-nav">
			<div class="mine-nav-left">
				 <img src="../../assets/my_hongbao@3x.png"/> 
				<a>
					<span class="nav-left-red">红包</span>
				<span class="nav-left-money">600.00</span>
				<span class="nav-left-yuan">元</span>
				</a>
			</div>
			<div class="mine-nav-right">
				 <img src="../../assets/my_jiaxi@3x.png"/> 
					<span class="nav-left-red">加息劵</span>
					<span class="nav-left-money">1</span>
					<span class="nav-left-yuan">张</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { Header } from 'mint-ui';

	const MintHeader = Header;

	export default {
		name: 'Mine',
		data() {
			return {
				title: '我的',
				userAcctKey:'',
			};
		},
		components: {
			MintHeader,
		},
		beforeCreate(){
			  this.userAcctKey = this.getUserCookie('acctKey');
            if (this.userAcctKey === null || this.userAcctKey === '') {
               this.$router.push('/login');
            }
		}
	};
</script>
<style lang="scss">
	.fm-mine-topNav {
		width: 100%;
		height: 190px;
		background: url("../../assets/my_bg@2x.png") center center no-repeat;
		background-size: cover;
		display: block;
		background-position: center;
		&>.main-topNav-top {
			&>dl {
				width: 93%;
				margin: auto;
				display: -webkit-box;
				padding-bottom: 10px;
				&>dt {
					&>img {
						width: 50px;
						height: 50px;
						padding-top: 18px;
					}
				}
				&>dd {
					padding-left: 13px;
					padding-top: 25px;
					-webkit-box-flex: 1;
					&>.mine-topNav-a1 {
						display: block;
						float: left;
						&>span {
							display: block;
						}
						&>.mine-topNav-span1 {
							font-size: 15px;
							color: #fff;
							padding-bottom: 8px;
						}
						&>.mine-topNav-span2 {
							font-size: 12px;
							color: #fff;
						}
					}
					&>.mine-topNav-a2 {
						display: block;
						float: right;
						padding-top: 8px;
						&>img {
							width: 17px;
							height: 17px;
						}
					}
				}
			}
		}
		 &>.mine-topNav{
					width:93%;
					margin:auto;
					padding-bottom:18px; 
				&>.mine-topNav-navCenter{
					
					&>.mine-navCenter-span1{
						color:#fff;
						font-size:15px;
					}
					&>.mine-navCenter-span2{
						color:#fff;
						font-size:18px;
						float: right;
					}
					&>.mine-navCenter-a1{
						float:right;
						width:30px;
						padding-top:3px; 
						&>img{
							width:7px;
							height:13px;
							float:right;
							text-align: center;
							margin:auto;
							
						}	
					}
				}
			} 
			&>.mine-bottomNav{
				display:-webkit-box;
				width:93%;
				margin:auto;
				&>.mine-bottomNav-left{
					-webkit-box-flex:1;
					&>.mine-money{
						display:block;
						font-size:24px;
						color:#fff;
						padding-bottom:8px;
					}
					&>.mine-balance{
						font-size:15px;
						color:#fff;
					}
				}
				&>.mine-bottomNav-right{
					-webkit-box-flex:1;text-align: right;
					padding-top:15px;
					&>.mine-allspan{
						width:65px;
						height:33px;
						display:inline-block;
						background:#fff;
						text-align: center;
						line-height:33px;
						border-radius:5px;
						font-size:15px;
					}
					&>.mine-Withdrawals{
						margin-right:15px;
						color:#666;
					}
					&>.mine-Recharge{
						color:#ff6c00;
					}
				}
			}
		}
		
	.fm-mine-message{
		width:100%;
		background:#feffb6;
		padding:16px 0;
		&>p{
			width:93%;
			margin:auto;
			&>.mine-message-music{
				width:20px;
				height:17px;
				float:left;
			}
			&>.mine-message-span2{
				font-size: 12px;
			    color: #666;
			    white-space: nowrap;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    padding-left:7px;
			}
			&>.mine-message-right{
				float:right;
				width:6px;
				height:11px;	
				padding-top:4px;
			}
		}
	}
	
	.fm-mine-nav{
		display: -webkit-box;
		width:100%;
		margin:auto;
		padding:21px 0;
		margin-bottom:10px;
		&>.mine-nav-left{
			-webkit-box-flex:1;
			text-align: center;
			padding:9px 0;
			border-right:1px solid #e5e5e5;
				&>img{
					width:33px;
					height:33px;
					padding-right:10px;
					vertical-align: top;
				}
			&>a{
				
				&>.nav-left-red{
				font-size: 13px;
			    color: #666;
			    line-height:40px;
			    display:inline-block;
			}
			&>.nav-left-money{
				font-size:16px;
				color:#ff6c00;
				  display:inline-block;
			}
			&>.nav-left-yuan{
				  display:inline-block;
				  font-size:13px;
				  color:#ff6c00;
			}
			}
		}
		&>.mine-nav-right{
			-webkit-box-flex:1;
			text-align: center;
			padding:9px 0;
				&>img{
					width:33px;
					height:33px;
					padding-right:9px;
					vertical-align: top;
				}
			&>.nav-left-red{
				font-size: 13px;
			    color: #666;
			    line-height:40px;
			    display:inline-block;
			}
			&>.nav-left-money{
				font-size:20px;
				color:#3fadf9;
				  display:inline-block;
			}
			&>.nav-left-yuan{
				  display:inline-block;
				  font-size:13px;
				  color:#3fadf9;
			}
		}
	}
</style>