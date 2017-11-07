<template>
	<transition enter-active-class="animated slideInRight">
	<main class="detail">
		<div class="detail_top">
			 <img src="../../assets/image/liyuchun.jpg"/>
			 <span class="play_btn"><i class="iconfont icon-bofang"></i>随机播放全部</span>
			<p class="title">李宇春</p>
		</div>
		<span class="fold_btn" @click="go">
			<i class="iconfont icon-dayuhao"></i>
		</span>
		<div class="detail_con">
			<!--<ul class="detail_list">
				<li v-for="v in data">
					<h3>{{v.musicData.songname}}</h3>
					<p>李宇春-{{v.musicData.albumname}}</p>
				</li>
			</ul>-->
			<ul class="detail_list"
			    v-infinite-scroll="loadMore"
			    infinite-scroll-disabled="loading"
			    infinite-scroll-distance="10">
			    <li v-for="v in subData">
			  		<h3>{{v.musicData.songname}}</h3>
					<p>李宇春-{{v.musicData.albumname}}</p>
			    </li>
			</ul>
			<div class="shade" v-if="show">
		 		<img src="../../assets/image/loader.gif" />
		 		<p>努力加载中</p>
		 	</div>
		 	<div class="loading" v-if="loading">
		 		<p>加载中...</p>
		 	</div>
		</div>
	</main>
	</transition>
</template>
<style scoped>
	.detail{
		position:fixed;
		top:0;
		left:0;
		z-index:50;
		width:100%;
		height: 100%;
		font-family: "微软雅黑";
		background: #fff;
	}
	.detail_top{
		width:100%;
		height:35%;
		overflow: hidden;
		box-sizing: border-box;
		position: relative;
	}
	.detail_top img{
		width:100%;
	}
	.detail_top .play_btn{
		display: inline-block;
		padding: 4px 6px;
		border-radius: 20px;
		border:2px solid #fff;
		color:#fff;
		position: absolute;
		bottom: 20px;
		left:50%;
		transform: translateX(-50%);
	}
	.fold_btn{
		position: fixed;
		top:4px;
		left:4px;
		width:20px;
		height:20px;
		background: #999;
		border-radius: 50%;
		transform: rotate(180deg);
		text-align: center;
		line-height: 20px;
		z-index:21;
	}
	.fold_btn i{
		color:#fff;
		font-size: 14px;
	}
	.title{
		position: fixed;
		position: absolute;
		top:10px;
		left:50%;
		transform: translateX(-50%);
		color:#fff;
	}
	.detail_con{
		position: relative;
		height: 65%;
		overflow: scroll;
	}
	.detail_list{
		width:100%;
		padding: 20px;
		box-sizing: border-box;
		font-size: 16px;
	}
	.detail_list li{
		margin-bottom: 20px;
	}
	.detail_list li h3{
		line-height: 24px;
	}
	.detail_list li p{
		color:#666;
		font-size: 14px;
	}
	.shade{
		position: absolute;
		width:100%;
		height: 100%;
		top:0;
		left:0;
	}
	.shade img{
		width:24px;
		height:24px;
		position:absolute;
		top:50px;
		left:50%;
		transform: translateX(-50%);
	}
	.shade P{
		width:100%;
		text-align: center;
		height:24px;
		position:absolute;
		top:80px;
		left:0;
	}
	.loading{
		position: fixed;
		width:100%;
		bottom: 0;
		left:0;
	}
	.loading p{
		width:100%;
		text-align: center;
		line-height: 40px;
	}
</style>
<script>
	export default{
		data(){
			return{
				data:[],
				subData:[],
				loading:false,
				show:true,
				url:'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1576475597&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&hostUin=0&platform=yqq&needNewCode=0&order=listen&begin=0&num=100&songstatus=1&singermid=002ZOuVm3Qn20Y&jsonpCallback=__jp7'
			}
		},
		methods:{
			go(){
				this.$router.go(-1);
			},
			loadMore() {
				var that=this;
			    this.loading = true;
			    setTimeout(() => {
			    	for (let i = 0; i <= 10; i++) {
			      		that.subData.push(that.data[that.subData.length]);
			    	}
			    	that.loading = false;
			  	}, 2500);
			  	console.log(that.subData)
			}
		},
		mounted(){
			this.$http.jsonp(this.url,{
				params:{
					
				},
				jsonp:'__jp7'
			}).then(function(){
			},function(){
				
			})
			var that=this;
			setInterval(function(){
				console.log(linkData)
				that.data=linkData.data.list;
				console.log(that.data);
				that.show=false;
			},2000)
		}
	}
</script>