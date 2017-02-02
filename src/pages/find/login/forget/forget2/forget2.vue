<template>
	 <div class="fm-forget-password1 fm-forget-password2">
	 <mt-header class="com-header" title="找回密码">
			<router-link to="/forget" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="forget2-pass">
			<span>已发送验证码短信到</span>
		</div>
		<div class="forget2-phone">
			<span id="phone">{{phone}}</span>
		</div>
		<div class="entry-button">
			<div class="entry-button-top">
				<a><img src="../../../../../assets/register_mail@2x.png" alt="" /></a>
				<input type="text" placeholder="短信验证码"/>
			</div>
		</div>
		<div class="entry-denglu" @click="resetPasswordClick">
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
			return {
				phone : '18714752677',
			};
		},
		components: {
			Field,
		},
		created() {
			this.phone = this.phone.substring(0,3) + ' **** ' + this.phone.substring(7,11);
		},
		methods: {
            resetPasswordClick() {
                this.$router.push('/resetPassword');
            },
        },
	};
</script>
<style lang="scss">
	.fm-forget-password2{
		width: 100%;
		height: 100%;
		background: url("../../../../../assets/forget_bg@2x.png") center center no-repeat;
		background-size: cover;
		display: block;
		background-position: center;
		&>.mint-header {
			background-color: transparent;
			margin-bottom:15px;
		}
		 &>.forget2-pass{
		 	width:90%;
		 	margin:auto;
		 	margin-bottom:15px;
		 	&>span{
		 		font-size:13px;
		 		color:#666;
		 	}
		 }
		 &>.forget2-phone{
		 	display:-webkit-box;
				-webkit-box-align:center;
				-webkit-box-flex:1;
				-webkit-box-pack:center;
				-webkit-box-orient: vertical;
				margin-bottom:40px;
		 	&>span{
		 		color:#ff6c00;
		 		font-size:30px;
		 	}
		 }
		 &>.entry-button{
		 	padding-top:0;
		 }
	}
</style>