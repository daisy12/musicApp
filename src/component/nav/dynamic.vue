<template>
	<main>
		<div class="banner">
			<img src="../../assets/image/dyBanner.jpg">
		</div> 
		<div class="title"> 
			<h3>热门话题</h3>
			<router-link to="/more">更多></router-link>
		</div>
		<div class="show_pic">
			<div class="item">
				<img src="../../assets/image/dyshow_01.jpg"/>
				<div class="shade"><p>#你单曲循环最多的是哪一首歌</p></div>
			</div>
			<div class="item">
				<img src="../../assets/image/dyshow_02.jpg"/>
				<div class="shade"><p>手牵手一起做歌单</p></div>
			</div>
		</div>
		<ul class="topic">
			<li class="topic_item">
				<div class="topic_top">
					<i class="image"></i>
					<div class="topic_box">
						<h3>欢乐颂音乐带你发现世界</h3>
					 	<time>11-29</time>
					</div>
					<span class="follow">+关注</span>
				</div>
				<div class="topic_con">
					<p>今天是钟汉良欧巴的生日！想不起来是什么时候开始关注他的作品，
						不例外的从电视剧电影里认识他，从而了解原来它还是歌手，并且
					获得不少奖项</p>
					<p>唱跳俱佳，影视双栖，用对演艺事业的不懈追求书写小太阳的耀眼荣光</p>
					<span class="label">#手拉手一起做歌单</span>
					<div class="topic_show">
						<img src="../../assets/image/topic_show_02.jpg"/>
						<img src="../../assets/image/topic_show_01.jpg"/>
						<img src="../../assets/image/topic_show_01.jpg"/>
					</div>
				</div>
				<div class="topic_btm">
					<div class="song">
						<div class="pic"> 
							<img src="../../assets/image/image.png">
						</div>
						<div class="des">
							<p>重阳节|送给家人的一首情歌</p>
						</div>
						<span class="more"><i class="iconfont icon-dayuhao"></i></span>
					</div>
					<div class="comment">
						<span><i class="iconfont icon-zhuanfa"></i>转发</span>
						<span><i class="iconfont icon-pinglun"></i>评论</span>
						<span><i class="iconfont icon-dianzan"></i>16</span>
					</div>
				</div>
			</li>
			<li class="topic_item">
				<div class="topic_top">
					<i class="image"></i>
					<div class="topic_box">
						<h3>欢乐颂音乐带你发现世界</h3>
					 	<time>11-29</time>
					</div>
					<span class="follow">+关注</span>
				</div>
				<div class="topic_con">
					<p>今天是钟汉良欧巴的生日！想不起来是什么时候开始关注他的作品，
						不例外的从电视剧电影里认识他，从而了解原来它还是歌手，并且
					获得不少奖项</p>
					<p>唱跳俱佳，影视双栖，用对演艺事业的不懈追求书写小太阳的耀眼荣光</p>
					<span class="label">#手拉手一起做歌单</span>
					<div class="topic_show">
						<img src="../../assets/image/topic_show_02.jpg"/>
						<img src="../../assets/image/topic_show_01.jpg"/>
						<img src="../../assets/image/topic_show_01.jpg"/>
					</div>
				</div>
				<div class="topic_btm">
					<div class="song">
						<div class="pic"> 
							<img src="../../assets/image/image.png">
						</div>
						<div class="des">
							<p>重阳节|送给家人的一首情歌</p>
						</div>
						<span class="more"><i class="iconfont icon-dayuhao"></i></span>
					</div>
					<div class="comment">
						<span><i class="iconfont icon-zhuanfa"></i>转发</span>
						<span><i class="iconfont icon-pinglun"></i>评论</span>
						<span><i class="iconfont icon-dianzan"></i>16</span>
					</div>
				</div>
			</li>
		</ul>
	</main>
</template>
<style scoped>
	main{
		width:100%;
		margin-bottom: 60px;
	}
	main .banner,main .banner img{
		width:100%;
	}
	.title{
		height: 36px;
		line-height: 36px;
		font-size: 14px;
		padding: 0 10px;
		box-sizing: border-box;
	}
	.title h3{
		float:left;
		position: relative;
	}
	.title a{
		float:right;
		color: #555;
		text-decoration: none;
		font-size: 12px;
	}
	.show_pic{
		width:100%;
		padding: 0 10px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.show_pic .item{
		width:50%;
		float:left;
		box-sizing: border-box;
		position: relative;
	}
	.show_pic .item:nth-of-type(1){
		padding-right: 5px;
	}
	.show_pic .item:nth-of-type(2){
		padding-left: 5px;
	}
	.show_pic .item img{
		width:100%;
	}
	.show_pic .item .shade{
		width:100%;
		position: absolute;
		height:100%;
		top:0;
		left:0;
		text-align: center;
		box-sizing: border-box;
	}
	.show_pic .item .shade>p{
		width:80%;
		position: absolute;
		text-align: center;
		top:50%;
		left:50%;
		transform: translate(-55%,-50%);
		color:#fff;
		font-family: "微软雅黑";
	}
	.topic{
		width:100%;
		padding:10px;
		box-sizing: border-box;
	}
	.topic .topic_item{
		border-bottom: 1px solid #ccc;
		margin-bottom: 10px;
	}
	.topic .topic_item .topic_top{
		overflow: hidden;
	}
	.topic .topic_item .topic_top .image{
		display: inline-block;
		width:38px;
		height:38px;
		float:left;
		background: url('../../assets/image/topic_icon.png');
		background-size: 38px 38px;
		margin-right: 8px;
	}
	.topic .topic_item .topic_top .topic_box{
		float:left;
	}
	.topic .topic_item .topic_top time{
		color:#999;
	}
	.topic .topic_item .topic_top h3{
		font-size: 16px;
		font-weight: bold;
		color:#666;
		line-height: 20px;
	}
	.topic .topic_item .topic_top .follow{
		float:right;
		background: #e7a173;
		padding: 2px;
		color:#b30000;
		border-radius: 4px;
	}
	.topic_con{
		margin: 10px 0;
	}
	.topic_con p{
		line-height: 24px;
		font-family: "微软雅黑";
	}
	.topic_con .label{
		color:#b30000;
		background:#d88262;
		padding:3px 5px;
		display: inline-block;
		font-size: 14px;
		margin:6px 0;
	}
	.topic_con .topic_show{
		width:100%;
		overflow: hidden;
	}
	.topic_con .topic_show img{
		width:50%;
		float:left;
		padding: 2px;
		box-sizing: border-box;
	}
	.topic_btm .song{
		background: #f1f1f1;
	}
	.topic_btm .song{
		overflow: hidden;
		height:70px;
	}
	.topic_btm .song .pic{
		float:left;
		display: inline-block;
		height:100%;
		width:25%;
	}
	.topic_btm .song .pic img{
		height: 100%;
	}
	.topic_btm .song .des{
		float:left;
		width:70%;
		white-space:nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-family: "微软雅黑";
	}
	.topic_btm .song .des p{
		margin-top: 18px;
	}
	.topic_btm .song .more{
		width: 5%;
		display: inline-block;
		margin-top:26px;
	}
	.topic_btm .comment{
		height: 40px;
		line-height: 40px;
	}
	.topic_btm .comment span{
		float:right;
		margin-left: 10px;
	}
	.topic_btm .comment span i{
		color:#333;
		background: #fff;
		margin-right: 3px;
	}
</style>