<template>
	<transition enter-active-class="animated slideInUp">
		<main>
			<span class="fold_btn" @click="change">
				<i class="iconfont icon-dayuhao"></i>
			</span>
			<component :is="page" :myid="songid" @send="get"></component>
			<div class="play_btm">
				<ul class="select">
					<li><i class="iconfont icon-shoucang"></i></li>
					<li><i class="iconfont icon-xiazai"></i></li>
					<li><i class="iconfont icon-fenxiang"></i></li>
					<li><i class="iconfont icon-pinglun1"></i></li>
					<li><i class="iconfont icon-omit"></i></li>
				</ul>
				<div class="progress_wrap">
					<div class="progress_con">
						<span class="startTime">00:00</span>
						<div class="progress">
							<div class="progress_box">
								<span class="slider"></span>
								<span class="bar"></span>
							</div>
						</div>
						<input type="range" name="points" class="range" value="0"/>
						
						<span class="current">{{record|toTime}}</span>
					</div>
				</div>
				<ul class="play_control">
					<li><i class="iconfont icon-qiehuan"></i></li>
					<li><i class="iconfont icon-xiayishou prev" @click="prev"></i></li>
					<li><i v-bind:class="{'iconfont':true,'icon-bofang':!playCtrl,'icon-zanting':playCtrl}" @click="start"></i></li>
					<li><i class="iconfont icon-xiayishou next" @click="next"></i></li>
					<li><i class="iconfont icon-liebiao" @click="showList"></i></li>
				</ul>
			</div>
			<ol class="turnPage">
				<li v-for="(v,k) in arr" @click="turnPage(k)"></li>
			</ol>
			<playlist :change="changeList" v-if="changeList.show"></playlist>
		</main>
	</transition>
</template>
<script>
	import layout from '../detail/layout.vue';
	import lyrics from '../detail/lyrics.vue';
	import recomsongs from '../detail/recomsongs.vue';
	import vplaylist from '../playList/playList.vue';
	export default{
		props:['ctrl'],
		data(){
			return {
				page:'layout',
				pageList:['layout','lyrics','recomsongs'],
				arr:[1,2,3],
				playCtrl:false,
				songid:0,
				changeList:{
					show:false
				},
				time:0,
				record:0,
				timer:null
			}
		},
		watch:{
			record(){
				this.get;
			}
		},
		filters:{
			toTime(n){
				/*var num=n*60;
				var minutes=Math.floor(num/60);
				minutes=minutes<10?'0'+minutes:minutes;
				var seconds=Math.floor(num%60);
				seconds=seconds<10?'0'+seconds:seconds;
				
				return minutes+':'+seconds;*/
				var minutes=Math.floor(n/60);
				minutes=minutes<10?'0'+minutes:minutes;
				var seconds=Math.floor(n%60);
				seconds=seconds<10?'0'+seconds:seconds;
				
				return minutes+':'+seconds;
			}
		},
		methods:{
			change(){
				 this.$router.push('/recommend');
				 /*console.log(musicObject)*/
			},
			turnPage(k){
				this.page=this.pageList[k]
			},
			start(){
				this.playCtrl=!this.playCtrl;
				this.play();
			},
			play(){
				if(this.playCtrl){
					document.getElementById('player').play();
					currentState=true;
					/*进度条*/
					var that=this;
					var slider=document.getElementsByClassName('slider')[0];
					var bar=document.getElementsByClassName('bar')[0];
					var progress=document.getElementsByClassName('progress')[0];
					
					var rangeBar=document.getElementsByClassName('range')[0];
					

					this.timer=setInterval(function(){
						that.record=that.record-1;
						var per=1/that.time;
						rangeBar.max=progress.clientWidth;
						rangeBar.min=0;
						rangeBar.step=progress.clientWidth*per;
						rangeBar.value=parseFloat(rangeBar.value)+(progress.clientWidth*per);
						
						progress.style.width=rangeBar.clientWidth;
						slider.style.left=rangeBar.value+'px';
						bar.style.width=rangeBar.value+'px';
						
						if(that.record<1){
							if(that.songid+1>7){
								that.songid=0;
								slider.style.left='0px';
								bar.style.width='0px';
								rangeBar.value=0;
							}else{
								that.songid=that.songid+1;
								slider.style.left='0px';
								bar.style.width='0px';
								rangeBar.value=0;
							}
						}
					},1000)
					
				}else{
					currentState=false;
					document.getElementById('player').pause();
					clearInterval(this.timer);
				}
			},
			prev(){
				if(this.songid-1<0){
					this.songid=7;	 
					clearInterval(this.timer);
			 		this.play();
				}else{ 
					this.songid=this.songid-1;
					clearInterval(this.timer);
					this.play();
 
				}
				var rangeBar=document.getElementsByClassName('range')[0];
				rangeBar.value=0;
				var slider=document.getElementsByClassName('slider')[0];
				var bar=document.getElementsByClassName('bar')[0];
				slider.style.left=0;
				bar.style.width=0;
				
			},
			next(){
				if(this.songid+1>7){
					this.songid=0;
					clearInterval(this.timer);
					this.play();
				}else{
					this.songid=this.songid+1;
					clearInterval(this.timer);
					this.play();
				}
				var rangeBar=document.getElementsByClassName('range')[0];
				rangeBar.value=0;
				var slider=document.getElementsByClassName('slider')[0];
				var bar=document.getElementsByClassName('bar')[0];
				slider.style.left=0;
				bar.style.width=0;
			},
			showList(){
				this.changeList.show=!this.changeList.show;
			},
			get(n){
				this.time=n;
				this.record=n;
			}
		},
		components:{
			'layout':layout,
			'lyrics':lyrics,
			'recomsongs':recomsongs,
			'playlist':vplaylist
		},
		mounted(){
			this.songid=this.$route.params.myid;
			this.playCtrl=currentState;
			this.play();
		}
	}
	 
</script>
<style scoped>
	main{
		position:fixed;
		top:0;
		left:0; 
		width:100%;
		height:100%;
		background: #fff;
		z-index: 20;
		width:100%;
		padding: 0;
		background: url('../../assets/image/big_bg.jpg');
		background-size: 100% 100%;
	}
	.fold_btn{
		position: fixed;
		top:4px;
		left:4px;
		width:20px;
		height:20px;
		background: #999;
		border-radius: 50%;
		transform: rotate(90deg);
		text-align: center;
		line-height: 20px;
		z-index:21;
	}
	.fold_btn i{
		color:#fff;
		font-size: 14px;
	}
	.play_btm{
		z-index:20;
	}
	.play_btm .select{
		width:100%;
		line-height: 60px;
		text-align: center;
		background: rgba(255,255,255,.7);
		overflow: hidden;
	}
	.play_btm .select li{
		float:left;
		width:20%;
	}
	.play_btm{
		width:100%;
		position: fixed;
		left:0;
		bottom:0;
	}
	.play_btm .progress_wrap{
		line-height: 40px;
		padding:0 20px;
		box-sizing: border-box;
		background: rgba(255,255,255,.7);
	}
	.play_btm .progress_wrap .progress_con{
		width:100%;
		overflow: hidden;
		position: relative;
	}
	.play_btm .progress_wrap .start{
		float: left;
		color: #b30000;
	}
	.play_btm .progress_wrap .current{
		float:right;
		color:#b30000;
	}
	.play_btm .progress_wrap .progress{
		height: 2px;
		width:60%;
		background: #fff;
		position: absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
	}
	.play_btm .progress_wrap .progress .slider{
		position: absolute;
		width:12px;
		height:12px;
		background: #b30000;
		border-radius: 50%;
		top:0;
		left:0;
		transform: translate(-50%,-50%);
	}
	.play_btm .progress_wrap .progress .bar{
		width:0;
		height:2px;
		background:#b30000;
		position: absolute;
		top:0;
		left:0;
	}
	.play_control{
		background: rgba(255,255,255,.7);
		height: 80px;
		line-height: 80px;
	}
	.play_control li{
		float: left;
		width:20%;
		text-align: center;
	}
	.turnPage{
		position: fixed;
		left:50%;
		top:8px;
		transform: translateX(-50%);
		z-index: 21;
	}
	.turnPage li{
		float:left;
		width:6px;
		height: 6px;
		background: #fff;
		margin:4px;
		border-radius: 50%;
	}
	.play_control li:nth-of-type(2){
		transform: rotate(180deg);
	}
	.prev:hover,.next:hover{
		font-size: 22px;
	}
	.range{
		opacity: 0;
	}
</style>