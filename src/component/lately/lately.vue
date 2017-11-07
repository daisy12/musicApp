<template>
	<main>
		<div class="header">
			<span @click="goBefore">&lt;&nbsp;最近播放</span>
			<span class="expand">
				<img src="../../assets/image/btn_left.png"/>
			</span>
			<span class="search" @click="search">
				<img src="../../assets/image/btn_right.png"/>
			</span>
		</div>	
		<div class="song_left">
			<div class="song_top">
				<h4><i class="iconfont icon-bofang"></i>播放全部<span>（共10首）</span></h4>
			</div>
			<div class="song_item">
				<div class="rank">
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
						</li><li>
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
		<search v-if="change.sch" :a="change"></search>
	</main>
</template>
<script>
	import vsearch from '../slide/search.vue';
	export default {
		data(){
			return{
				msg:'',
				change:{
					sch:false
				},
				url:'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&uin=0&needNewCode=1&jsonpCallback=__jp0'
			}
		},
		methods:{
			goBefore(){
				this.$router.go(-1);
			},
			search(){
				this.change.sch=true;
			}
		},
		components:{
			'search':vsearch
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
				/*console.log(fun);*/
				console.log(allData);
				that.msg=allData.data.songList;
				console.log(that.msg)
			},1000);
		}
	}
</script>
<style scoped>
	main{
		position: fixed;
		width:100%;
		height:100%;
		z-index:10;
		top:0;
		left:0;
		margin-bottom:70px;
	}
	main .header{
		width:100%;
	 	height: 80px;
	 	line-height: 80px;
	 	background-color: #b30000;
	 	padding: 0 20px;
	 	color: #fff;
	 	font-weight: bold;
	 	box-sizing: border-box;
	 	font-size: 18px;
	 	z-index:28;
	 	overflow: hidden;
	}
	.header .search,.header .expand{
		float:right;
		width:24px;
		margin-top:6px;
		margin-left: 10px;
	}
	.header .search img,.header .expand img{
		width: 100%;
	}
	.song_left{
		width:100%;
		height:100%;
		padding: 0 10px 0 10px;
		box-sizing: border-box;
		font-family: "微软雅黑";
		position: absolute;
		overflow-y: scroll;
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
	.song_top h4 span{
		font-size: 12px;
		color:#ccc;
	}
	.song_item{
		text-align: left;
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