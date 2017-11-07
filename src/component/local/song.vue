<template>
	<main>
		<div class="song_left">
			<div class="song_top">
				<h4><i class="iconfont icon-bofang"></i>随机播放全部</h4>
				<span>批量处理</span>
			</div>
			<div class="song_item">
				<div class="rank">
					<h5>A</h5>
					<ul class="list">
						<li>
							<h3>爱火花</h3>
							<p>周笔畅-我是歌手第二节 第六期</p>
						</li>
						<li>
							<h3>爱人动物</h3>
							<p>苏打绿-陪我唱歌</p>
						</li>
						<li>
							<h3>爱在波西米亚</h3>
							<p>几米 向左转 向右走 -几米 向左转 向右走 话剧原声带</p>
						</li>
						<li>
							<h3>爱转角</h3>
							<p>罗志祥-残酷舞台 真实录</p>
						</li>
						<li>
							<h3>爱转角</h3>
							<p>罗志祥-残酷舞台 真实录</p>
						</li>
					</ul>
				</div>
				<div class="rank">
					<h5>B</h5>
					<ul class="list">
						<li>
							<h3>爱火花</h3>
							<p>周笔畅-我是歌手第二节 第六期</p>
						</li>
						<li>
							<h3>爱人动物</h3>
							<p>苏打绿-陪我唱歌</p>
						</li>
						<li>
							<h3>爱在波西米亚</h3>
							<p>几米 向左转 向右走 -几米 向左转 向右走 话剧原声带</p>
						</li>
						<li>
							<h3>爱转角</h3>
							<p>罗志祥-残酷舞台 真实录</p>
						</li>
						<li>
							<h3>爱转角</h3>
							<p>罗志祥-残酷舞台 真实录</p>
						</li>
						<li>
							<h3>爱转角</h3>
							<p>罗志祥-残酷舞台 真实录</p>
						</li>
						<li>
							<h3>爱转角</h3>
							<p>罗志祥-残酷舞台 真实录</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="song_right">
			<ul>
				<li v-for="v in letter">{{v}}</li>
			</ul>
		</div>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				msg:'',
				letter:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
				url:'https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1576475597&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&platform=yqq&needNewCode=0&jsonpCallback=__jp0'
			}
		},
		mounted(){
			this.$http.jsonp(this.url,{
				params:{
					
				},
				jsonp:'__jp0'
			}).then(function(res){
				
			},function(res){
				
			})
			var that=this;
			setTimeout(function(){
				that.msg=allData.data.list;
				console.log(that.msg)
			},1000);
		}
	}
	 
</script>
<style scoped>
	main{
		width:100%;
		box-sizing: border-box;
		font-family: "微软雅黑";
		position:absolute;
		top:120px;
		overflow-y: scroll;
		padding-bottom: 70px;
	}
	.song_left{
		width:100%;
		padding: 0 20px 0 10px;
		box-sizing: border-box;
	}
	.song_right{
		position: fixed;
		width:14px;
		color:#fff;
		text-align: center;
		font-size: 14px;
		right:0;
		top:0;
		height: 100%;
		margin-top: 120px;
		margin-bottom: 70px;
	}
	.song_right ul{
		height:100%;
		background: #ccc;
	}
	.song_right ul li{
		height:2.7%;
	}
	.song_top{
		height: 40px;
		line-height: 40px;
		font-size: 14px;
	}
	.song_top h4{
		float:left;
	}
	.song_top h4 i{
		margin-right: 4px;
	}
	.song_top span{
		float:right;
	}
	.song_item{
		text-align: left;
		margin-top: 4px;
	}
	.song_item .rank h5{
		text-align: left;
	}
	.song_item .list li{
		padding:10px 0;
		border-top:1px solid #ccc;
	}
	.song_item .list li h3{
		font-size: 14px;
		color:#333;
	}
	.song_item .list li p{
		font-size: 12px;
		color:#999;
	}
</style>