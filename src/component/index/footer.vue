<template>
	<main>
		<a v-bind:class="{protrait:true,start:playCtrl}" @click="palyMusic">
			<img src="../../assets/image/image.png"/>
		</a>
		<div class="des">
			<h2>{{currentPlay.name}}</h2>
			<span class="name">{{currentPlay.singer}}</span>
		</div> 
		<div class="control">
			<i class="newlist iconfont icon-bofangliebiao" @click="extend"></i>
			<i class="next iconfont icon-xiayishou"></i>
			<i v-bind:class="{'ctrl_btn':true,'iconfont':true,'icon-play':!playCtrl,'icon-zanting':playCtrl}" @click="start"></i>
		</div>
		<play v-if="ctrl.show" :ctrl="ctrl" :currentPlay="currentPlay"></play>
		<playlist :change="change" v-if="change.show"></playlist>
		
		<audio controls="controls" id="player" src="./src/assets/mp3/1.mp3" hidden="hidden">
		</audio>
	</main>
</template>
<script>
	import vplay from '../play/play.vue';
	import vplaylist from '../playList/playList.vue';
	export default{
		data(){
			return{
				ctrl:{
					show:false
				},
				playCtrl:false,
				change:{
					show:false
				},
				currentPlay:musicObject
			}
		},
		/*watch:{
			musicObject(){
				this.currentPlay=musicObject;
			}
		},*/
		methods:{
			palyMusic(){
				this.ctrl.show=!this.ctrl.show;
			},
			start(){
				this.playCtrl=!this.playCtrl;
				if(this.playCtrl){
					document.getElementById('player').play();
					currentState=true;
				}else{
					document.getElementById('player').pause();
					currentState=false;
				}
			},
			extend(){
				this.change.show=!this.change.show;
				 
			}
		},
		components:{
			'play':vplay,
			'playlist':vplaylist
		},
		mounted(){
			 var that=this;
			 setInterval(function(){
			 	that.currentPlay=musicObject;
			 	that.playCtrl=currentState;
			 	console.log(this.playCtrl);
			 },1000)
		},
		updated(){
			 this.currentPlay=musicObject;
			 this.playCtrl=currentState;
			 console.log(this.playCtrl);
		}
	}
</script>
<style scoped>
	 main{
	 	width: 100%;
	 	position:fixed;
	 	bottom: 0;
	 	left: 0;
	 	height: 70px;
	 	background: rgb(255,255,255);
	 	padding: 0 8px;
	 	box-sizing: border-box;
	 	z-index:10;
	 }
	 main .protrait{
	 	display: inline-block;
	 	height: 50px;
	 	margin:10px 5px 10px 0px;
	 	float:left;
	 	border-radius: 50%;
	 	overflow: hidden;
	 }
	 main .protrait>img{
	 	height: 100%;
	 }
	 main .des{
	 	color: #000;
	 	float:left;
	 	width:38%;
	 }
	 main .des h2{
	 	margin-top: 4px;
	 	line-height: 30px;
	 	font-weight: bold;
	 	color: #333;
	 	font-size: 14px;
	 }
	 main .des .name{
	 	font-size: 12px;
	 }
	 main .control{
	 	float: right;
	 }
	 main .control>i{
	 	float:right;
	 	display: inline-block;
	 	color: #b30000;
	 	font-size: 24px;
	 	margin-left:14px;
	 }
	 .control{
	 	width:40%;
	 	line-height: 70px;
	 }
	.start{
		animation: startplay 5s linear infinite; 
	}
	@keyframes startplay{
		100%{
			transform: rotate(360deg);
		}
	}
	audio{
		position:fixed;
		top:0;
		left:0;
		z-index:50;
	}
</style>