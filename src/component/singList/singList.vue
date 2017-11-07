<template>
	<main>
		<div class="header">
			<span @click="goBefore">&lt;&nbsp;歌手</span>
			<span class="expand">
				<img src="../../assets/image/btn_left.png"/>
			</span>
			<span class="search" @click="search">
				<img src="../../assets/image/btn_right.png"/>
			</span>
		</div>	
		<div class="wrap">
			<div class="song_left">
				<div class="song_item">
					<!--<div class="rank">
						<h3></h3>
						<ul class="list">
							<li v-for="v in msg">
								<div class="pic">
									<img src="../../assets/image/radio_04.jpg"/>
								</div>
								<h3>{{v.Fsinger_name}}</h3>		 
							</li>
						</ul>
					</div>-->
					<div class="rank" v-for="(v,k) in arr" v-bind:id="letter[k]">
						<h5>{{letter[k]}}</h5>
						<ul class="list">
							<li v-for="k in v">
								<div class="pic">
									<img src="../../assets/image/radio_04.jpg"/>
								</div>
								<h3>{{k}}</h3>		 
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="song_right" v-if="!show">
				<ul>
					<li v-for="(v,k) in letter"><a v-bind:href="'#'+k">{{v}}</a></li>
				</ul>
			</div>
			<div class="show">
				<router-view></router-view>
			</div>
			<search v-if="change.sch" :a="change"></search>
			<div class="shade" v-if="show">
		 		<img src="../../assets/image/loader.gif" />
		 		<p>努力加载中</p>
		 	</div>
		</div>
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
				arr:new Array(26),
				show:true,
				letter:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
				url:'https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1576475597&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&platform=yqq&needNewCode=0&jsonpCallback=__jp0'
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
			
				console.log(allData);
				that.msg=allData.data.list;
				console.log(that.msg) 
				
				
				
				/*for(var i=0;i<26;i++){
					for(var j=0;j<that.msg.length;j++){
						arr[i]=new Array();
						console.log(that.msg[j].Fsinger_name)
						console.log(that.msg[j].Findex)
						if(that.msg[j].Findex==that.letter[i]){
							arr[i].push(that.msg[j].Fsinger_name)
						}
					}
				}
				console.log(arr)*/
				for(var i=0;i<26;i++){
					that.arr[i]=new Array();
				}
				for(var i=0;i<that.msg.length;i++){
					for(var j=0;j<that.letter.length;j++){
						if(that.msg[i].Findex==that.letter[j]){
							that.arr[j].push(that.msg[i].Fsinger_name)
						}
					}
				}
				console.log(that.arr)
				
				
				that.show=false;
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
	.wrap{
		width:100%;
		height:100%;
		overflow-y: scroll;
		position: relative;
	}
	.song_left{
		width:100%;
		padding: 0 20px 0 10px;
		box-sizing: border-box;
		font-family: "微软雅黑";
		font-size: 14px;
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
		margin-top: 80px;
		margin-bottom: 70px;
	}
	.song_right ul{
		height:100%;
		background: #ccc;
	}
	.song_right ul li{
		height:2.8%;
	}
	.song_right ul li a{
		color:#fff;
		text-decoration: none;
	}
	.song_right ul li a:hover{
		color: #B30000;
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
	}
	.song_item .rank h5{
		text-align: left;
		line-height: 30px;
		background: #f1f1f1;
	}
	.song_item .list li{
		padding:10px 0;
		border-top:1px solid #ccc;
		box-sizing: border-box;
		height:80px;
	}
	.song_item .list li .pic{
		height: 100%;
		float:left;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 10px;
	}
	.song_item .list li .pic img{
		height:100%;
	}
	.song_item .list li h3{
		float:left;
		font-size: 14px;
		color:#555;
		line-height: 60px;
		width:60%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.shade{
		position: absolute;
		width:100%;
		height: 100%;
		top:0;
		left:0;
		z-index:50;
		background: #fff;
	}
	.shade img{
		width:24px;
		height:24px;
		position:absolute;
		top:20px;
		left:50%;
		transform: translateX(-50%)
	}
	.shade P{
		width:100%;
		text-align: center;
		height:24px;
		position:absolute;
		top:50px;
		left:0;
	}
</style>