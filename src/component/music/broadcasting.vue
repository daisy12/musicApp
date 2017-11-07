<template>
	<main>
		<ul class="radio_select">
			<li class="radio_item">
				<div class="wrap">
					<div class="info"> 
						<span>欢乐颂电台</span>
						<p>当前热度12.3万</p>
					</div>
				</div>
			</li>
			<li class="radio_item">
				<div class="info"> 
					<span>私人电台</span>
					<p>当前热度5.4万</p>
				</div>	
			</li>
		</ul> 
		<div class="title"> 
			<h3>推荐</h3>
		</div>
		<ul class="radio_list">
			<li class="item"> 
				<div class="pic">
					<img src="../../assets/image/radio_01.jpg" />
				</div>
			 	<div class="des">
			 		<h3>轻音乐</h3>
			 		<p>当前热度4.3万</p>
			 	</div>
			</li>
			<li class="item"> 
				<div class="pic">
					<img src="../../assets/image/radio_02.jpg" />
				</div>
			 	<div class="des">
			 		<h3>新歌</h3>
			 		<p>当前热度6.9万</p>
			 	</div>
			</li>
			<li class="item"> 
				<div class="pic">
					<img src="../../assets/image/radio_03.jpg" />
				</div>
			 	<div class="des">
			 		<h3>轻音乐</h3>
			 		<p>当前热度4.3万</p>
			 	</div>
			</li>
			<li class="item"> 
				<div class="pic">
					<img src="../../assets/image/radio_04.jpg" />
				</div>
			 	<div class="des">
			 		<h3>轻音乐</h3>
			 		<p>当前热度4.3万</p>
			 	</div>
			</li>
			<li class="item"> 
				<div class="pic">
					<img src="../../assets/image/radio_01.jpg" />
				</div>
			 	<div class="des">
			 		<h3>轻音乐</h3>
			 		<p>当前热度4.3万</p>
			 	</div>
			</li>
			<li class="item"> 
				<div class="pic">
					<img src="../../assets/image/radio_02.jpg" />
				</div>
			 	<div class="des">
			 		<h3>新歌</h3>
			 		<p>当前热度6.9万</p>
			 	</div>
			</li>
			<li class="item"> 
				<div class="pic">
					<img src="../../assets/image/radio_03.jpg" />
				</div>
			 	<div class="des">
			 		<h3>轻音乐</h3>
			 		<p>当前热度4.3万</p>
			 	</div>
			</li>
			<li class="item"> 
				<div class="pic">
					<img src="../../assets/image/radio_04.jpg" />
				</div>
			 	<div class="des">
			 		<h3>轻音乐</h3>
			 		<p>当前热度4.3万</p>
			 	</div>
			</li>
		</ul>
	</main>
</template>
<style scoped>
	main{
		width:100%;
		padding: 10px;
		box-sizing: border-box;
	}
	main .banner,main .banner img{
		width:100%;
	}
	.radio_select{
		width:100%;
		overflow: hidden;
		border:1px solid #d58c89;
	}
	.radio_select li{
		float:left;
		width:50%;
		padding:20px 0;
		box-sizing: border-box; 
		position:relative;
		text-align: center;
	}
	
	.radio_select li .info{
		float:left;
	}
	.radio_select li:before{
		content: "";
		display: inline-block;
		width:50px;
		height:50px;
		background: url(../../assets/image/radio_icon1.png);
		background-size: 50px 50px;
		float:left;
		margin-right: 6px;
		margin-left: 10px;
	}
	.radio_select li:nth-of-type(2):before{
		background: url(../../assets/image/radio_icon2.png);
		background-size: 50px 50px;
	}
	.radio_select li span{
		font-size: 14px;
		font-weight: bold;
		line-height: 28px;
		color:#333;
	}
	.radio_select li p{
		font-size: 12px;
		color:#555;
	}
	.title{
		height: 36px;
		line-height: 36px;
		font-size: 14px;
	}
	.title h3{
		float:left;
		position: relative;
		padding-left:18px;
	}
	.title h3:before{
		content: "";
		display: inline-block;
		width:10px;
		height:20px;
		margin-right: 8px;
		background: url('../../assets/image/recom_icon.png');
		background-size: 10px 20px;
		position:absolute;
		left:0;
		top:50%;
		transform:translateY(-50%);
	}
	.radio_list{
		width:100%;
		box-sizing: border-box;
		
	}
	.radio_list .item{
		overflow: hidden;
		padding: 10px 0;
		border-top:1px solid #ccc;
	}
	.radio_list .item .pic{
		width:20%;
		float:left;
	}
	.radio_list .item .pic img{
		width:100%;
	}
	.radio_list .item .des{
		width:80%;
		float:right;
		padding: 15px 10px 15px;
		box-sizing: border-box;
	}
	.radio_list .item .des h3{
		font-weight: bold;
		color:#333;
		line-height: 24px;
	}
	.radio_list .item .des p{
		font-size: 12px;
		line-height: 20px;
	}
</style>