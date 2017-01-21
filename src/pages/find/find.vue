<template>
	<div class="find">
		<mt-header fixed title="发现"></mt-header>
		<div class="fm-find-nav">
			<ul>
				<li class="find-nav-li1 nav-li">
					<a href="javascript:;">
						<img src="../../assets/find_moni@2x.png" />
						<span class="find-nav-span1">模拟收益</span>
						<span class="find-nav-span2">模拟预算，收益早知道</span>
					</a>
				</li>
				<li class="find-nav-li1">
					<a href="javascript:;">
						<img src="../../assets/find_hongbao@2x.png" />
						<span class="find-nav-span1">现金红包</span>
						<span class="find-nav-span2">红包卡卷，投资更省钱</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="fm-find-playCenter"
        	@click="entryClick"
			>
			<h2>
    	 		<span>活动中心</span>
    	 	</h2>
			<div class="find-playCenter-banner" v-for="banner1 in banners">
				<a :href="banner1.linkUrl" >
					<img v-bind:src="banner1.picUrl"/>
				</a>
				<div class="find-playCenter-posit">
					<img src="../../assets/find_hover@3x.png" alt="" />
				</div>
			</div> 
		</div>
		<div class="fm-find-main">
			<a>
				<h2>资讯中心</h2>
			</a>
		</div>
		<div class="fm-find-center">
			<div class="find-center-title page-loadmore-list" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<p v-for="item in medias" class="page-loadmore-listitem">
					<a href="javascript">
						<span class="find-center-span1">{{item.articleTitle}}</span><span class="find-center-span2"><img src="../../assets/find_angle_right@2x.png" alt="" /></span>
					</a>
				</p>

			</div>
		</div>
		<div class="fm-find-look">
			<a href="javascript:;">查看更多</a>
		</div>
	</div>
</template>

<script>
    import { mapState } from 'vuex';
	import { InfiniteScroll } from 'mint-ui';

	export default {
    name: 'find',
		components: {
			InfiniteScroll,
		},
		computed: mapState({
			medias: state => state.find.mediaList,
			banners: state => state.find.activeList,
		}),
		created() {
			this.$store.dispatch('getMediaList');
			this.$store.dispatch('getBanner');
		},
	methods: {
            entryClick() {
                this.$router.push('/entry');
            },
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
	
	.find {
		width: 100%;
		background-color: #f5f5f5;
		padding-bottom: 49px;
		padding-top: 44px;
	}
	
	.mint-header {
		background-color: #fff;
		color: #333;
		font-size: 18px;
	}
	/*nav*/
	
	.fm-find-nav {
		background: #fff;
		margin-bottom: 10px;
		&>ul {
			display: -webkit-box;
			padding-top: 30px;
			padding-bottom: 30px;
			&>li {
				-webkit-box-flex: 1;
				display: -webkit-box;
				-webkit-box-align: center;
				-webkit-box-pack: center;
				-webkit-box-orient: horizontal;
				text-align: center;
			}
			&>.find-nav-li1 {
				&>a {
					&>img {
						width: 50px;
						height: 50px;
						padding-bottom: 15px;
						display: -webkit-box;
					    -webkit-box-flex: 1;
					    -webkit-box-align: center;
					    -webkit-box-pack: center;
					    -webkit-box-orient: vertical;
					    margin: auto;
					}
					&>span {
						display: block;
					}
					&>.find-nav-span1 {
						font-size: 15px;
						color: #333;
						padding-bottom: 13px;
					}
					&>.find-nav-span2 {
						font-size: 12px;
						color: #999;
					}
				}
			}
			&>.nav-li {
				border-right: 1px solid #e5e5e5;
			}
		}
	}
	/*playCenter*/
	
	.fm-find-playCenter {
		background: #fff;
		margin-bottom: 10px;
		&>h2 {
			width: 100%;
			height: 54px;
			background: url("../../assets/find_bg01@2x.png") center center no-repeat;
			background-size: cover;
			display: block;
			background-position: center;
			&>span {
				font-size: 15px;
				color: #ff6c00;
				display: -webkit-box;
				-webkit-box-flex: 1;
				-webkit-box-align: center;
				-webkit-box-pack: center;
				-webkit-box-orient: horizontal;
				line-height: 56px;
			}
		}
		&>.find-playCenter-banner{
			position:relative;
			&>a {
				width: 100%;
			&>img {
				width: 100%;
				height: 155px;
				display: block;
				margin-bottom: 10px;
			}
		  }
		}
		
	}
	/*fm-find-main*/
	
	.fm-find-main {
		background: #fff;
		display: -webkit-box;
		&>a {
			width: 100%;
			height: 56px;
			background: url("../../assets/find_bg01@2x.png") center center no-repeat;
			background-size: cover;
			display: block;
			background-position: center;
			&>h2 {
				font-size: 15px;
				color: #ff6c00;
				display: -webkit-box;
				-webkit-box-flex: 1;
				-webkit-box-align: center;
				-webkit-box-pack: center;
				-webkit-box-orient: horizontal;
				padding-top: 20px;
			}
		}
	}
	
	.fm-find-center {
		background: #fff;
		padding-bottom: 20px;
		&>.find-center-title {
			width: 95%;
			margin: auto;
			&>p {
				&>a {
					padding-top: 20px;
					padding-bottom: 40px;
					border-bottom: 1px solid #e5e5e5;
					display: block;
					&>.find-center-span2 {
						float: right;
						&>img {
							width: 7px;
							height: 13px;
						}
					}
					&>.find-center-span1 {
						width:90%;
						font-size: 15px;
						color: #000;
						float:left;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
					}
				}
			}
		}
	}
	
	.fm-find-look {
		background: #fff;
		&>a {
			font-size: 15px;
			color: #666;
			padding-bottom: 15px;
			display: -webkit-box;
			-webkit-box-flex: 1;
			-webkit-box-pack: center;
		}
	}
</style>
