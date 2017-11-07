<template>
	<main>
		<div class="header">
			<span @click="goBefore">&lt;&nbsp;本地歌曲</span>
			<span class="expand">
				<img src="../../assets/image/btn_left.png"/>
			</span>
			<span class="search" @click="search">
				<img src="../../assets/image/btn_right.png"/>
			</span>
		</div>	
		<ul class="nav_local">
			<!--<li class="active" @click="add"><router-link to="/song">歌曲</router-link></li>
			<li @click="add"><router-link to="/file">文件夹</router-link></li>
			<li @click="add"><router-link to="/singer">歌手</router-link></li>
			<li @click="add"><router-link to="/album">专辑</router-link></li>-->
			
			<li @click="add(k)" v-for="(v,k) in navCon" v-bind:class="{active:k==index}">
				<router-link :to="'/'+linkNav[k]">{{v}}</router-link>
			</li>
		</ul>
		<div class="show">
			<router-view></router-view>
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
				num:1,
				index:0,
				navCon:['歌曲','文件夹','歌手','专辑'],
				linkNav:['song','file','singer','album'],
				change:{
					sch:false
				},
				url:'https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1576475597&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&platform=yqq&needNewCode=0&jsonpCallback=__jp0'
			}
		},
		methods:{
			goBefore(){
				this.$router.go(-this.num);
			},
			add(k){
				this.num=this.num+1;
				this.index=k;
			},
			search(){
				this.change.sch=true;
			}
		},
		components:{
			'search':vsearch
		}/*,
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
			
				console.log(allData);
				that.msg=allData.data.songList;
				console.log(that.msg)
			},1000);
		}*/
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
	main>.nav_local{
		width:100%;
		height: 40px;
		background: #fff;
	}
	main>.nav_local li{
		width: 25%;
		text-align: center;
		line-height: 40px;
		height:40px;
		font-size: 16px;
		font-weight: bold;
		float: left;
		border-bottom:2px solid #fff;
	}
	main>.nav_local li a{
		color:#000;
		text-decoration: none;
	}
	main>.nav_local li.active{
		border-bottom:2px solid #b30000;
	}
	main>.nav_local li.active a{
		color:#b30000;
	}
</style>