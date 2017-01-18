<template>
	<div class="find">
		<!--<header class="fm-find-header">
    		<span class="find-header-title">发现</span>
    	</header>-->
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
		<div class="fm-find-playCenter">
			<h2>
    	 		<span>活动中心</span>
    	 	</h2>
			<a href="javascript:;">
				<img src="../../assets/find_huodong01@2x.png" />
			</a>
			<a href="javascript:;">
				<img src="../../assets/banner02.png" />
			</a>
		</div>
		<div class="fm-find-main">
			<a>
				<h2>资讯中心</h2>
			</a>
		</div>
		<div class="fm-find-center">
			<div class="find-center-title page-loadmore-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<p v-for="item in list" class="page-loadmore-listitem">
					{{ item }}
					<a href="javascript">
						<span class="find-center-span">【分秒资讯】</span><span class="find-center-span1">微信小程序正式上线，央行确定...</span><span class="find-center-span2"><img src="../../assets/find_angle_right@2x.png" alt="" /></span>
					</a>
				</p>
				<p class="page-loadmore-listitem">
					<a href="javascript">
						<span class="find-center-span">【分秒资讯】</span><span class="find-center-span1">微信小程序正式上线，央行确定...</span><span class="find-center-span2"><img src="../../assets/find_angle_right@2x.png" alt="" /></span>
					</a>
				</p>
				<p class="page-loadmore-listitem">
					<a href="javascript">
						<span class="find-center-span">【分秒资讯】</span><span class="find-center-span1">微信小程序正式上线，央行确定...</span><span class="find-center-span2"><img src="../../assets/find_angle_right@2x.png" alt="" /></span>
					</a>
				</p>
				<p class="page-loadmore-listitem">
					<a href="javascript">
						<span class="find-center-span">【分秒资讯】</span><span class="find-center-span1">微信小程序正式上线，央行确定...</span><span class="find-center-span2"><img src="../../assets/find_angle_right@2x.png" alt="" /></span>
					</a>
				</p>
				<p class="page-loadmore-listitem">
					<a href="javascript">
						<span class="find-center-span">【分秒资讯】</span><span class="find-center-span1">微信小程序正式上线，央行确定...</span><span class="find-center-span2"><img src="../../assets/find_angle_right@2x.png" alt="" /></span>
					</a>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	import { InfiniteScroll } from 'mint-ui';
	
	export default {
	    name: 'find',
	    components: {
        InfiniteScroll,
    },
    methods: {
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                const last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i += 1) {
                    this.list.push(last + i);
                }
                this.loading = false;
	            }, 2500);
        },
    },
	};
</script>

<style lang="scss">
 body {
        font-family: "HiraginoSansGB-w3",Arial,Verdana,微软雅黑,黑体,serif;
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
			width: 375px;
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
	/*fm-find-main*/
	
	.fm-find-main {
		background: #fff;
		display: -webkit-box;
		&>a {
			width: 375px;
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
		&>.find-center-title {
			width: 95%;
			margin: auto;
			&>p {
				border-bottom: 1px solid #e5e5e5;
				padding-top: 20px;
				padding-bottom: 20px;
				&>a {
					&>.find-center-span2 {
						float: right;
						&>img{
							width:7px;
							height:13px;
						}
					}
					&>.find-center-span {
						font-size: 15px;
						color: #ff3131;
					}
					&>.find-center-span1 {
						font-size: 15px;
						color: #000;
					}
				}
			}
		}
	}
</style>
