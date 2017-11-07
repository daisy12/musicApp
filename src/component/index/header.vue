<template>
	<main>
		<div class="con">
			<div class="btn_left" @click="install">
				<img src="../../assets/image/btn_left.png"/>
			</div>
		
			<ul class="nav">
				<li v-for="(v,i) in navText" v-bind:class="{active:i==index}" @click="get(i)">
					<router-link :to="'/'+navRouter[i]">{{v}}</router-link>
				</li>  
			</ul>
			
			<div class="btn_right" @click="search">
				<img src="../../assets/image/btn_right.png"/>
			</div>
			<install v-if="change.ins" :a="change"></install>
			<search v-if="change.sch" :a="change"></search>
		</div>
	</main>
</template>
<script>
	import vinstall from '../slide/install.vue';
	import vsearch from '../slide/search.vue';
	
	export default {
		data(){ 
			return{
				navText:['我的','音乐','动态'],
				navRouter:['my','music','dynamic'],
				index:1,
				change:{
					ins:false,
					sch:false
				}
			}
		},
		methods:{
			get(i){
				this.index=i;
			},
			install(){
				this.change.ins=true;
			},
			search(){
				this.change.sch=true;
			}
		},
		components:{
			'install':vinstall,
			'search':vsearch
		}
	}
</script>
<style scoped>
	*{
		padding: 0;
		margin:0;
	}
	 main,.con{
	 	height: 80px;
	 	background-color: #b30000;
	 }
	 .con{
	 	margin: 0 30px;
	 	color: #fff;
	 	font-weight: bold;
	 	box-sizing: border-box;
	 	position: relative;
	 }
	 .con .nav{
	 	width: 70%;
	 	margin:0 auto;
	 }
	 .con .nav li{
	 	float: left;
	 	list-style: none;
	 	width: 33.3%;
	 	line-height: 80px;
	 	text-align: center;
	 	font-size: 18px;
	 }
	 .con .nav li.active>a{
	 	color:#fff;
	 }
	 .con .nav li>a{
	 	color:#f5a0a0;
	 	text-decoration: none;
	 }
	 .btn_left{
	 	position: absolute;
	 	display: inline-block;
	 	width:24px;
	 	left:0;
	 }
	 .btn_left img,.btn_right img{
	 	width: 100%;
	 }
	 .btn_right{
	 	position: absolute;
	 	display: inline-block;
	 	width:24px;
	 	right: 0;
	 }
	 .btn_left,.btn_right{
	 	top:50%;
	 	transform: translateY(-50%);
	 }
</style>