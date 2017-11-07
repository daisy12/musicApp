<template>
	<main>
		<div class="my_top">
			<span class="musicPic">
				<img src="../../assets/image/my_icon.png"/>
			</span>
			<div class="about">
				<h3>小草的幽思</h3>
				<ul class="msg">
					<li>动态<span>6</span></li>
					<li>关注<span>8</span></li>
					<li>粉丝<span>15</span></li>
				</ul>
			</div>
			<span class="random">随便听听</span>
		</div>
		<div class="my_com">
			<ul>
				<li class="myItem">
					<router-link to="/local">
						<span class="icon"></span>
						<span class="title">本地音乐</span>
						<span class="num">207首</span>
						<i class="play"></i> 
					</router-link>
				</li>
				<li class="myItem">
					<router-link to="/lately"> 
						<span class="icon"></span>
						<span class="title">最近播放</span>
						<span class="num">207首</span>
						<span class="go"><i class="iconfont icon-dayuhao"></i></span> 
					</router-link>
				</li>
				<li class="myItem">
					<span class="icon"></span>
					<span class="title">本地音乐</span>
					<span class="num">207首</span>
					<span class="go"><i class="iconfont icon-dayuhao"></i></span> 
				</li>
			</ul>
		</div>
		<div class="create">
			<div class="create_top">
				<span class="title">自建歌单</span>
				<span class="new">+新建</span>
			</div>
			<div class="create_con">
				<span class="icon"></span>
				<div class="des">
					<h3>我喜欢的单曲</h3>
					<span>0首</span>
				</div>
				<div class="go"><i class="iconfont icon-dayuhao"></i></div>
			</div>
		</div>
		<div class="storage">
			<div class="storage_top">
				<span class="title">我的收藏</span>
				<ol>
					<li>歌单</li>
					<li>专辑</li>
					<li>歌手</li>
				</ol>
			</div>
		</div>
	</main>
</template>
<style scoped>
	main{
		width:100%;
		font-family: "微软雅黑";
		margin-bottom: 60px;
	}
	main .my_top{
		width:100%;	
		padding:10px 5px;
		box-sizing: border-box;
		overflow: hidden;
		background:rgba(203,193,169,0.6);
	}
	main .my_top .musicPic{
		width:15%;
		float:left;
	}
	main .my_top .musicPic img{
		width:100%;
	}
	main .my_top .about{
		width:65%;
		float:left;
		padding: 8px;
		box-sizing: border-box;
	}
	main .my_top .about .msg{
		overflow: hidden;
	}
	main .my_top .about h3{
		font-weight: bold;
		font-size: 16px;
		color:#555;
		line-height: 26px;
	}
	main .my_top .about .msg li{
		float:left;
		font-family: "微软雅黑"; 
		margin-right: 10px;
	}
	main .my_top .about .msg li:nth-last-of-type(1){
		margin-right: 0;
	}
	main .my_top .about .msg li:after{
		content: "";
		display: inline-block;
		width:1px;
		height:14px;
		background: #666;
		margin-left: 10px;
		vertical-align: middle;
	}
	main .my_top .about .msg li:nth-last-of-type(1):after{
		width:0;
		height:0;
		margin-right: 0;
	}
	 
	main .my_top .random{
		width:20%;
		float:left;
		margin-top: 36px;
		font-size:14px;
	}
	.my_com{
		width:100%;
		padding:0 20px;
		box-sizing: border-box;
	}
	.my_com ul{
		width:100%;
		overflow: hidden;
	}
	.my_com ul .myItem{
		width:100%;
		line-height: 80px;
		overflow: hidden;
		border-bottom: 1px solid #ccc;
		position: relative;
	}
	.my_com ul .myItem>a{
		display: inline-block;
		width:100%;
		color:#000;
		text-decoration: none;
	}
	.my_com ul .myItem .icon{
		width:20%;
		float: left; 
		height: 40px;
		display: inline-block;
		line-height: 80px;
		background: url('../../assets/image/home_01.png') no-repeat;
		background-size: 40px 40px; 
		margin-top: 20px;
	}
	.my_com ul .myItem:nth-of-type(2) .icon{	 
		background: url('../../assets/image/home02.png') no-repeat;
		background-size: 40px 40px; 
	}
	.my_com ul .myItem:nth-of-type(3) .icon{
		background:url('../../assets/image/home03.png') no-repeat;
		background-size: 40px 40px; 
	}
	.my_com ul .myItem .play{
		position: absolute;
		background: url('../../assets/image/play.png');
		right: 0;
		top:50%;
		width:30px;
		height:30px;
		display: inline-block;
		background-size: 30px 30px;
		transform:translateY(-50%);
	}
	.my_com ul .myItem .go{
		position: absolute;
		right: 0;
		top:50%;
		display: inline-block;
	 	font-weight: bold;
		transform:translateY(-50%);
		color:#666;
	}
	.create,.storage{
		padding: 0 20px;
		box-sizing: border-box;
		width:100%;
	}
	.create .create_top{
		line-height: 40px;
	}
	.create .create_top .new{
		float:right;
	}
	.create .create_top .title{
		font-weight: bold;
		color:#333;
	}
	.create .create_con{
		overflow: hidden;
		position: relative;
		padding-bottom: 20px;
		border-bottom: 1px solid #ccc;
	}
	.create .create_con .icon{
		display: inline-block;
		width:50px;
		height:50px;
		background: url('../../assets/image/love.png');
		background-size: 50px 50px;
		float:left;
		margin-right: 6px;
	}
	.create .create_con .des{
		float: left;
	}
	.create .create_con .go{
		position: absolute;
		font-weight: bold;
		right: 0;
		top:50%;
		transform: translateY(-50%);
		color:#666;
	}
	.storage .title{
		font-weight: bold;
		color:#333;
	}
	.storage .storage_top{
		line-height: 40px;
	}
	.storage .storage_top ol{
		float:right;
	}
	.storage .storage_top ol li{
		float: left;
		margin-left: 8px;
	}
	.storage .storage_top ol li:after{
		content: "";
		display: inline-block;
		border:1px solid #666;
		height: 10px;
		margin-left: 6px;
	}
	.storage .storage_top ol li:nth-last-of-type(1):after{
		border: none;
		margin: 0;
		height: 0;
	}
</style>