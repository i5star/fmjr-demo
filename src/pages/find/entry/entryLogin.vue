<template>
	<div class="fm-entry-allPage">
		<mt-header title="">
		  <router-link to="/main/find" slot="left">
		    <mt-button icon="back"></mt-button>
		    <mt-button @click="handleClose"></mt-button>
		  </router-link>
		  <mt-button icon="" slot=""></mt-button>
		</mt-header>
	</div>
</template>
<style lang="scss">
.fm-entry-allPage{
	&>.mint-header{
		height:44px;
		padding:0;
		&>.mint-header-button{
			&>.a{
				&>.mint-button{
					height:20px;
				}
			}
			
		}
		
	}
}
	
</style>
