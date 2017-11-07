<template>
	<transition enter-active-class="animated slideInRight">
	<main>
		<div class="search_top">
			<div class="search_wrap">
				<span class="return_btn" @click="go()"><i class="iconfont icon-dayuhao"></i></span>
				<input type="text" placeholder="搜索歌曲、歌手" class="search_box" v-model="content" @keyup="search"/>
				<button class="submit" @click="search()">搜索</button>
			</div>
		</div>
		<div class="search_con" v-if="show"> 
			<div class="type">
				<span class="singerType"><i class="iconfont icon-ttpodicon"></i>歌手分类<i class="iconfont icon-dayuhao"></i></span>
			</div>
			<div class="hot">
				<div class="title">
					<h3>热门搜索</h3>
				</div>
				<ul class="hot_item">
					<li v-for="v in searchItem" @click="selectContent(v)">{{v}}</li>
				</ul>
			</div>	
			<div class="search_history">
				<div class="title">
					<h3>搜索历史</h3>
					<i class="delete iconfont icon-shanchu" @click="removeHis()"></i>
				</div>
				<ul class="history_list">
					<li>
						<span>李宇春</span>
						<i class="close iconfont icon-cuo" @click="close('李宇春')"></i>
					</li>
					<li v-for="v in hotSearch" @click="close(v)">
						<span>{{v}}</span>
						<i class="close iconfont icon-cuo"></i>
					</li>
				</ul>
			</div>
		</div>
		<div class="current_search" v-if="!show">
			<ul>
				<li v-for="v in msg.song.list" @click="enter(v.songname)">
					<span>{{v.songname}}</span>
					<router-link class="listen" to="/detail"><i class="iconfont icon-dayuhao"></i></router-link>
				</li>
			</ul>
		</div>	 
	</main>
	</transition>
</template>
<script>
	export default{
		data(){
			return{
				 content:'',
				 msg:'',
				 show:true,
				 schHis:'',
				 hotSearch:[],
				 searchItem:['无条件','双世宠妃','从前慢','王俊凯','李宇春','林忆莲','悟空传','淘汰','TIME','紫']
			}
		},
		//修改子组件的值父组件的值同步变化
		props:['a'],
		methods:{
			 go(){
			 	this.a.sch=!this.a.sch;
			 	this.show=true;
			 },
			 search(){
			 	this.show=false;
			 	this.$http.jsonp('https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=1928093487&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&w='+this.content+'&p=1&n=20&perpage=20&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&uin=0&platform=h5&uid=0&needNewCode=1&remoteplace=txt.mqq.all&jsonpCallback=__jp8',{
			 	 	params:{
			 	 		
			 	 	},
			 	 	jsonp:'__jp8'
			 	 }).then(function(res){
			 	 	
			 	 },function(res){
			 	 	  	this.msg=searchData.data;
			 	 	  	console.log(searchData);
			 	 })
			 },
			 enter(n){
			 	this.schHis=n;
/*			 	alert(this.schHis)*/
			 	localStorage.setItem(new Date().getTime(),this.schHis);
			 },
			 close(m){
			 	var deleteVal;
			 	for(var i=0;i<localStorage.length-1;i++){
					var key=localStorage.key(i);
					var value=localStorage.getItem(key);
					if(value==m){
						localStorage.removeItem(key);
						deleteVal=value;
						break;
					}
				}
			 	for(var j=0;j<this.hotSearch.length;j++){
					if(this.hotSearch[j]==deleteVal){
						this.hotSearch.splice(j,1);
					}
				}
			 },
			 removeHis(){
			 	localStorage.clear();
			 	this.hotSearch=[];
			 },
			 selectContent(v){
			 	this.content=v;
			 	this.search();
			 	this.enter(v);
			 }
		},
		mounted(){
			for(var i=0;i<localStorage.length-1;i++){
				var key=localStorage.key(i);
				var value=localStorage.getItem(key);
				this.hotSearch.push(value);
			}
			
		}
	}
</script>
<style scoped>
	main{
		color:#000;
		font-weight: normal;
		width:100%;
		height:100%;
		position: fixed;
		top:0;
		left: 0;
		background: #fff;
		z-index:10;
		font-family: "微软雅黑";
	}
	.search_con{
		overflow-y: scroll;
		position: absolute;
	}
	.search_top{
		width:100%;
		height: 60px;
		line-height: 60px;
		text-align: center;
		background: #cc4447;
		box-sizing: border-box;
		padding: 0 20px;
	}
	.search_wrap{
		width:100%;
		height:100%;
		position: relative;
	}
	.search_top .return_btn{
		position: absolute;
		top:50%;
		left:0;
		transform: translateY(-50%) rotate(180deg);
		font-size: 20px;
		font-weight: bold;
		color:#fff;
	}
	.search_top .submit{
		position: absolute;
		top:50%;
		right:0;
		transform: translateY(-50%);
		background: transparent;
		border: none;
		outline: none;
		color:#fff;
		font-size: 16px;
	}
	.search_top .search_box{
		width:66%;
		border:none;
		outline: none;
		background: #9a3335;
		opacity: 0.9;
		padding: 4px;
		border-radius: 4px;
		color:#fff;
	}
	.search_con{
		width:100%;
		padding: 0 20px;
		box-sizing: border-box;
		position: relative;
		overflow-y: scroll;
		height:100%;
	}
	.search_con .type{
		width:100%;
		text-align: center;
		line-height: 40px;
		border-bottom: 1px solid #ccc;
		font-size: 14px;
	}
	.search_con .type i{
		font-size: 14px;
		margin:0 4px;
	}
	.search_con .type i:nth-of-type(1){
		font-size: 16px;
	}
	.search_con .hot .title{
		line-height: 30px;
	}
	.search_con .hot ul{
		overflow: hidden;
		font-size: 12px;
	}
	.search_con .hot ul li{
		float:left;
		margin: 0 10px 10px 0;
		padding:2px 4px;
		border-radius: 4px;
		border:1px solid #ccc;
	}
	.search_con .search_history .title{
		line-height: 30px;
		height: 30px;
	}
	.search_con .search_history  .title h3{
		float:left;
	}
	.search_con .search_history  .title .delete{
		float:right;
	}
	.search_con .search_history  .history_list{
		overflow: hidden;
		width:100%;
	}
	.search_con .search_history  .history_list>li,.current_search>ul>li{
		line-height: 34px;
		font-size: 14px;
		width:100%;
		overflow: hidden;
		color:#666;
	}
	.search_con .history_list>li>span{
		float:left;
	}
	.search_con .history_list>li>.close{
		float:right;
		font-size: 12px;
	}
	.current_search{
		width:100%;
		padding:0 20px;
		box-sizing: border-box;
		position: relative;
		overflow-y: scroll;
		height:100%;
	}
	.current_search>ul>li{
		overflow: hidden;
	}
	.current_search>ul>li>span{
		float:left;
		width:80%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.current_search>ul>li>.listen{
		float:right;
		font-size: 12px;
		text-decoration: none;
		color:#666;
	}
	.current_search>ul>li:hover{
		color:#B30000;
	}
</style>
 