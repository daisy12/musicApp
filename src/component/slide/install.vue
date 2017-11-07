<template>
	<transition enter-active-class="animated slideInLeft">
	<main>
		<div class="install_top">
			<div class="private">
				<div class="pic">
					<img src="../../assets/image/private.png"/>
				</div>
				<router-link to="/user"><span class="name">登录注册</span></router-link>
				<ul class="install_msg">
					<li class="item">
						<span>29</span>
						<p>累积播放</p>
					</li>
					<li class="item">
						<span>4</span>
						<p>关注</p>
					</li>
					<li class="item">
						<span>7</span>
						<p>粉丝</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="install_con">
			<ul class="funBtn">
				<li>签到</li>
				<li>会员中心</li>
				<li>定时开关</li>
				<li>听歌识曲</li>
				<li>音效</li>
				<li>音乐插件</li>
				<li>音乐闹钟</li>
				<li>应用推荐意见反馈</li>
				<li>主题换肤</li>
			</ul>
		</div>
		<div class="install_btm">
			<ol class="operate">
				<li>设置</li>
				<li>退出应用</li>
			</ol>
		</div>
		<span class="hide" @click="hide"><i class="iconfont icon-dayuhao"></i></span>
	</main>
	</transition>
</template>
<script>
	export default{
		data(){
			return{
			}
		},
		props:['a'],
		methods:{
			hide(){
				this.a.ins=false;
			}
		}
	}
</script>
<style scoped>
	main{
		position: fixed;
		top:0;
		left:0;
		height:100%;
		width:80%;
		background-color: #fff;
		z-index:10;
		color:#000;
		font-weight: normal;
		font-family: "微软雅黑";
		z-index:30;
	}
	.install_top{
		width:100%;
		padding: 20px 0;
		background: url('../../assets/image/install.jpg');
		background-size: 100% 100%;
	}
	.install_top .private{
		width:100%;
	}
	.install_top .private .pic{
		margin:0 auto;
		width:24%;
		text-align: center;
	}
	.install_top .private .pic img{
		width:100%;
	}
	.install_top .private .name{
		width:100%;
		display: inline-block;
		text-align: center;
	}
	.install_msg{
		overflow: hidden;
		margin:6px 0;
	}
	.install_msg .item{
		float: left;
		width:33.3%;
		text-align: center;
	}
	.install_con,.install_con .funBtn{
		width: 100%;
	}
	.install_con .funBtn>li{
		line-height: 34px;
		width:100%;
		padding-left: 20px;
		box-sizing: border-box;
	}
 	.install_btm{
 		position: absolute;
 		bottom: 0;
 		left:0;
 	}
	.install_btm,.install_btm .operate{
		width:100%;
		overflow: hidden;
		border-top:1px solid #ccc;
	}
	.install_btm .operate li{
		float:left;
		width:50%;
		text-align: center;
		line-height: 50px;
		position: relative;
	}
	.install_btm .operate li:nth-of-type(1):after{
		content: "";
		display: inline-block;
		width:0;
		height:40px;
		border:1px solid #ccc;
		position: absolute;
		right:0;
		top:50%;
		transform: translateY(-50%);
	}
	.hide{
		position: absolute;
		right:0;
		top:50%;
		transform: rotate(180deg);
		color:#666;
	}
</style>