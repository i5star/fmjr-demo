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
			};
		},
		components: {
			MintHeader,
		},
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
				width: 95%;
				margin: auto;
				display: -webkit-box;
				padding-bottom: 22px;
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
			
			
			 &>.mine-topNav{
				width:90%;
					margin:auto;
				&>.mine-topNav-navCenter{
					
					&>.mine-navCenter-span1{
						color:#fff;
						font-size:15px;
						float:left;
					}
					&>.mine-navCenter-span2{
						color:#fff;
						font-size:18px;
						float:right;
					}
					&>.mine-navCenter-a1{
						float:right;
						&>img{
							width:7px;
							height:13px;
						}	
					}
				}
			} 
		
			
			
			
		}
	}
</style>