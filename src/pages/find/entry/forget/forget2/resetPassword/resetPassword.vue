<template>
	 <div class="fm-forget-password1 fm-forget-password2">
	 <mt-header class="com-header" title="重置密码">
			<router-link to="/forget" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		
		<div class="entry-button">
			<div class="entry-button-top">
				 <a><img src="../../../../../../assets/land_mima@2x.png" alt="" /></a>
				<input type="text" placeholder="新密码"/>
			</div>
			<div class="entry-button-top bottom-1">
				<a><img src="../../../../../../assets/land_mima@2x.png" alt="" /></a>
				<input type="text" placeholder="确认密码"/>
			</div>
		</div>
		<div class="entry-denglu">
			<a href="javascript:;">
				<span>完成</span>
			</a>
		</div>
	 </div>
</template>