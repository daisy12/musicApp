<template>
	<transition enter-active-class="animated bounceInLeft">
	<main>
			<div class="header">
				<span @click="goBefore">&lt;&nbsp;推荐歌单</span>
				<span class="expand">
					<img src="../../assets/image/btn_left.png"/>
				</span>
				<span class="search">
					<img src="../../assets/image/btn_right.png"/>
				</span>
			</div>	
			<ul class="list">
				<!--<li>
					<div class="pic"> 
						<img src="http://p.qpic.cn/music_cover/UuXq5S0NJhiaNAaXeTgXzL4TcuSDNHC2lK2NGgw3FlMrGr9oUHBhuIw/600?n=1"/>
					</div>
					<div class="des">
						<h3>情歌王子，光良</h3>
						<p>原来有这么多「歌名互怼」的华语歌？</p>
					</div>
				</li>
				<li>
					<div class="pic"> 
						<img src="http://p.qpic.cn/music_cover/UuXq5S0NJhiaNAaXeTgXzL4TcuSDNHC2lK2NGgw3FlMrGr9oUHBhuIw/600?n=1"/>
					</div>
					<div class="des">
						<h3>情歌王子，光良</h3>
						<p>原来有这么多「歌名互怼」的华语歌？</p>
					</div>
				</li>-->
				<li class="clearfix" v-for="v in msg">
					<div class="pic"> 
						<img src="http://p.qpic.cn/music_cover/UuXq5S0NJhiaNAaXeTgXzL4TcuSDNHC2lK2NGgw3FlMrGr9oUHBhuIw/600?n=1"/>
					</div>
					<div class="des">
						<h3>{{v.songListAuthor}}</h3>
						<p>{{v.songListDesc}}</p>
					</div>
				</li>
			</ul>
		 	<div class="shade" v-if="show">
		 		<img src="../../assets/image/loader.gif" />
		 		<p>努力加载中</p>
		 	</div>
	</main>
 	</transition>
</template>
<script>
	 
	export default {
		data(){
			return{
				msg:'',
				show:true,
				url:'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&uin=0&needNewCode=1&jsonpCallback=__jp0'
			}
		},
		methods:{
			goBefore(){
				this.$router.go(-1);
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
			/*setTimeout(function(){
			 
				console.log(allData);
				that.msg=allData.data.songList;
				console.log(that.msg)
			},1000);*/
			setInterval(function(){
				that.msg=allData.data.songList;
				if(that.msg!=''){
					that.show=false;
				}
			},30);
			
			
		}
	}
</script>
<style scoped>
	main{
		position: fixed;
		height: 100%;
		z-index:10;
		top:0;
		left:0;
		margin-bottom:70px;
	}
	main .header{
	 	height: 80px;
	 	line-height: 80px;
	 	background-color: #b30000;
	 	margin: 0 20px;
	 	color: #fff;
	 	font-weight: bold;
	 	box-sizing: border-box;
	 	font-size: 18px;
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
	main,main ul,main ul li{
		width:100%;
		margin-bottom: 8px;
	}
	main ul{
		padding: 10px;
		height:100%;
		box-sizing: border-box;
		position: absolute;
		overflow-y: scroll;
		padding-bottom: 70px;
	}
	main ul li{
		width: 100%;
		overflow: hidden;
	}
	main ul li>.pic{
		float:left;
		width:20%;
	}
	main ul li>.pic img{
		width: 100%;
	}
	main ul li .des{
		float: left;
		padding-left: 8px;
		box-sizing: border-box;
		width:80%;
	}
	main ul li .des h3{
		font-weight: bold;
		color: #555;
		margin:5px 0 5px;
		font-size: 14px;
	}
	main ul li .des p{
		font-size: 12px;
		color:#333;
	}
	.shade{
		width:100%;
		height: 100%;
		top:0;
		left:0;
	}
	.shade img{
		width:24px;
		height:24px;
		position:absolute;
		top:100px;
		left:50%;
		transform: translateX(-50%);
	}
	.shade P{
		width:100%;
		text-align: center;
		height:24px;
		position:absolute;
		top:130px;
		left:0;
	}
</style>