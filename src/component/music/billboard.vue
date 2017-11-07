<template>
	<main>
		<div>
			<div class="title">
				<h3>全部</h3>
				<div class="new_hot"> 
					<router-link to="/more" class="active">最新</router-link>
					<router-link to="/more">最热</router-link>
				</div>
			</div>
			<ul class="songlist">
				<li>
					<div class="pic">
						<img src="../../assets/image/bill_list_01.jpg"/>
					</div>
					<div class="des">
						<p>执子之手，与子偕老</p>
						<span>By 陌咩咩</span>
					</div>
				</li>
				<li>
					<div class="pic">
						<img src="../../assets/image/bill_list_02.jpg"/>
					</div>
					<div class="des">
						<p>执子之手，与子偕老</p>
						<span>By 陌咩咩</span>
					</div>
				</li>
				<li>
					<div class="pic">
						<img src="../../assets/image/bill_list_03.jpg"/>
					</div>
					<div class="des">
						<p>执子之手，与子偕老</p>
						<span>By 陌咩咩</span>
					</div>
				</li>
				<li>
					<div class="pic">
						<img src="../../assets/image/bill_list_04.jpg"/>
					</div>
					<div class="des">
						<p>执子之手，与子偕老</p>
						<span>By 陌咩咩</span>
					</div>
				</li>
				<li>
					<div class="pic">
						<img src="../../assets/image/bill_list_01.jpg"/>
					</div>
					<div class="des">
						<p>执子之手，与子偕老</p>
						<span>By 陌咩咩</span>
					</div>
				</li>
				<li>
					<div class="pic">
						<img src="../../assets/image/bill_list_02.jpg"/>
					</div>
					<div class="des">
						<p>执子之手，与子偕老</p>
						<span>By 陌咩咩</span>
					</div>
				</li>
				<li>
					<div class="pic">
						<img src="../../assets/image/bill_list_03.jpg"/>
					</div>
					<div class="des">
						<p>执子之手，与子偕老</p>
						<span>By 陌咩咩</span>
					</div>
				</li>
				<li>
					<div class="pic">
						<img src="../../assets/image/bill_list_04.jpg"/>
					</div>
					<div class="des">
						<p>执子之手，与子偕老</p>
						<span>By 陌咩咩</span>
					</div>
				</li>
			</ul>
		</div>
	</main>
</template>
<style scoped>
	main{
		padding-bottom: 60px;
	}
	main,main>div{
		width:100%;
	}
	.title{
		width:100%;
		height: 36px;
		line-height: 36px;
		font-size: 14px;
	 
		padding: 0 20px;
		box-sizing: border-box;
	}
	.title h3{
		position: absolute;
		padding-left:18px;
		float:left;
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
	.title .new_hot{
		float:right;
	}
	.title .new_hot a{
		text-decoration: none;
		font-size: 14px;
	}
	.title .new_hot a:nth-of-type(1){
		padding:0px 10px;
		border-right:1px solid #ccc;
	}
	.title .new_hot a:nth-of-type(2){
		padding-left: 8px;
	}
	.title .new_hot .active{
		color:#b30000;
	}
	 
	.songlist{
		width:100%;
		padding: 0 10px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.songlist li{
		width:50%;
		overflow: hidden;
		float:left;
		margin-bottom: 10px;
	}
	.songlist li:nth-of-type(2n-1){
		padding-right: 5px;
		box-sizing: border-box;
	}
	.songlist li:nth-of-type(2n){
		padding-left: 5px;
		box-sizing: border-box;
	}
	.songlist li .pic{
		width:100%;
	}
	.songlist li .pic img{
		width:100%;
	}
	.songlist li .des p{
		line-height: 22px;
		font-size: 14px;
		font-weight: bold;
		color:#333;
	}
	.songlist li .des span{
		font-size: 14px;
		color:#555;
	}
	
</style>