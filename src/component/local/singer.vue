<template>
	<main>
		<ul class="singer">
			<li>
				<div class="pic">
					<img src="../../assets/image/singer1.jpg"/>
				</div>
				<div class="des">
					<h3>陈奕迅</h3>
					<p>3首</p>
				</div>
				<i class="iconfont icon-shenglvehao"></i>
			</li>
			<li>
				<div class="pic">
					<img src="../../assets/image/singer2.jpg"/>
				</div>
				<div class="des">
					<h3>苏打绿</h3>
					<p>3首</p>
				</div>
				<i class="iconfont icon-shenglvehao"></i>
			</li>
			<li>
				<div class="pic">
					<img src="../../assets/image/singer3.jpg"/>
				</div>
				<div class="des">
					<h3>王力宏</h3>
					<p>7首</p>
				</div>
				<i class="iconfont icon-shenglvehao"></i>
			</li>
			<li>
				<div class="pic">
					<img src="../../assets/image/singer1.jpg"/>
				</div>
				<div class="des">
					<h3>陈奕迅</h3>
					<p>3首</p>
				</div>
				<i class="iconfont icon-shenglvehao"></i>
			</li>
			<li>
				<div class="pic">
					<img src="../../assets/image/singer2.jpg"/>
				</div>
				<div class="des">
					<h3>苏打绿</h3>
					<p>3首</p>
				</div>
				<i class="iconfont icon-shenglvehao"></i>
			</li>
			<li>
				<div class="pic">
					<img src="../../assets/image/singer3.jpg"/>
				</div>
				<div class="des">
					<h3>王力宏</h3>
					<p>7首</p>
				</div>
				<i class="iconfont icon-shenglvehao"></i>
			</li>
		</ul>
	</main>
</template>
<script>
	 
</script>
<style scoped>
	main{
		width:100%;
		box-sizing: border-box;
		font-family: "微软雅黑";
		position:absolute;
		top:120px;
		overflow-y: scroll;
		padding: 0 10px 70px 10px;
	}
	main .singer li{
		height:100px;
		border-bottom: 1px solid #ccc;
		padding: 10px 0;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;
	}
	main ul li .pic{
		margin-right: 10px;
	}
	main ul li .pic,main ul li .pic img{
		height:100%;
	}
	main ul li .pic{
		float:left;
	}
	main ul li .des{
		float: left;
		font-size: 14px;
	}
	main ul li i{
		color: #666;
		position: absolute;
		top:50%;
		right:8px;
		font-size: 18px;
		transform: translateY(-50%);
	}
</style>