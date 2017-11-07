<template>
	<main>
		<ul class="album">
			<li>
				<i class="left_label iconfont icon-wenjianjia"></i>
				<div class="des">
					<h3>我的下载</h3>
					<p>12首/storage/sdcsd1/i音乐</p>
				</div>
				<i class="right_btn iconfont icon-shenglvehao"></i>
			</li>
			<li>
				<i class="left_label iconfont icon-wenjianjia"></i>
				<div class="des">
					<h3>录音</h3>
					<p>12首/storage/sdcsd1/i音乐</p>
				</div>
				<i class="right_btn iconfont icon-shenglvehao"></i>
			</li>
			<li>
				<i class="left_label iconfont icon-wenjianjia"></i>
				<div class="des">
					<h3>song</h3>
					<p>song/storage/sdcsd1/i音乐</p>
				</div>
				<i class="right_btn iconfont icon-shenglvehao"></i>
			</li>
			<li>
				<i class="left_label iconfont icon-wenjianjia"></i>
				<div class="des">
					<h3>12530</h3>
					<p>12首/storage/sdcsd1/i音乐</p>
				</div>
				<i class="right_btn iconfont icon-shenglvehao"></i>
			</li>
		</ul>
	</main>
</template>
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
	main .album li{
		height:80px;
		border-bottom: 1px solid #ccc;
		position: relative;
	}
	main .album li>.left_label{
		position: absolute;
		top:50%;
		left:8px;
		transform: translateY(-50%);
		color:#999;
		font-size: 18px;
	}
	main .album li .des{
		padding-top: 20px;
		float: left;
		padding-left: 40px;
		font-size: 14px;
		height: 100%;
		box-sizing: border-box;
	}
	main .album li>.right_btn{
		position: absolute;
		top:50%;
		right:8px;
		font-size: 18px;
		transform: translateY(-50%);
		color:#999;
	}
</style>