<template>
	<main>
		<div class="banner">
			<ul>
				<li>
					<img src="../../assets/image/banner_01.jpg" />
				</li>
				<li>
					<img src="../../assets/image/banner_01.jpg" />
				</li>
				<li>
					<img src="../../assets/image/banner_01.jpg" />
				</li>
				<li>
					<img src="../../assets/image/banner_01.jpg" />
				</li>
				<li>
					<img src="../../assets/image/banner_01.jpg" />
				</li>
			</ul>
			<ol class="dotted">
				<li class="active"></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ol>
		</div>
		<ul class="nav">
			<li>
				<div class="pic"> 
					<img src="../../assets/image/music_01.png"/>
				</div>
				<span>每日歌曲推荐</span>
			</li>
			<li>
				<router-link to="/singList">
					<div class="pic"> 
						<img src="../../assets/image/music_02.png"/>
					</div>
					<span>歌手</span>
				</router-link>
			</li>
			<li>
				<div class="pic"> 
					<img src="../../assets/image/music_03.png"/>
				</div>
				<span>歌曲分类</span>
			</li>
		</ul>
		<ul class="con">
			<li class="item">
				<div class="title">
					<h3>推荐歌单</h3>
					<router-link to="/more">更多></router-link>
				</div>
				<ul class="list">
					<li>
						<div class="pic">
							<img src="../../assets/image/recom_list_01.jpg"/>
						</div>
						<p>苏打绿陪你一起走过在每一个难忘的瞬间</p>
					</li>
					<li>
						<div class="pic">
							<img src="../../assets/image/recom_list_02.jpg"/>
						</div>
						<p>苏打绿陪你一起走过在每一个难忘的瞬间</p>
					</li>
					<li>
						<div class="pic">
							<img src="../../assets/image/recom_list_03.jpg"/>
						</div>
						<p>苏打绿陪你一起走过在每一个难忘的瞬间</p>
					</li>
					<li>
						<div class="pic">
							<img src="../../assets/image/recom_list_01.jpg"/>
						</div>
						<p>苏打绿陪你一起走过在每一个难忘的瞬间</p>
					</li>
					<li>
						<div class="pic">
							<img src="../../assets/image/recom_list_02.jpg"/>
						</div>
						<p>苏打绿陪你一起走过在每一个难忘的瞬间</p>
					</li>
					<li>
						<div class="pic">
							<img src="../../assets/image/recom_list_03.jpg"/>
						</div>
						<p>苏打绿陪你一起走过在每一个难忘的瞬间</p>
					</li>
				</ul>
			</li>
			
			<li class="item">
				<div class="title">
					<h3>最新歌曲</h3>
					<router-link to="/more">更多></router-link>
				</div>
				<ul class="list">
					<li v-for="v in msg">
						<router-link :to="'/playTwo/'+v.id"><!--路由传参-->
							<div class="pic">
								<img :src="v.img"/>
							</div>
							<p>{{v.name}}</p>
						</router-link>
					</li>
				</ul>
			</li>
		</ul>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				msg:[]
			}
		},
		mounted(){
			/*console.log(musicObject);*/
			this.$http.get('./src/json/recomment.json',{
				params:{
					
				}
			}).then(function(res){
				this.msg=res.data.data;
				/*console.log(this.msg)*/
				
			},function(){
				
			})
			var banner=document.getElementsByClassName('banner')[0];
			var oUl=banner.getElementsByTagName('ul')[0]
			var lis=banner.getElementsByTagName('li');
			var oOl=document.getElementsByClassName('dotted')[0];
			var dot=oOl.getElementsByTagName('li');
			
			var num=0;
			var screenW=document.documentElement.clientWidth;
			console.log(screenW)
			oUl.style.width=screenW*5+'px';
			var timer=null;
			
			ban();
			function ban(){
				timer=setInterval(function(){
					num++;
					if(num>4){
						num=0;
					}
					move(oUl,{'left':-num*screenW});
					for(var i=0;i<dot.length;i++){
						dot[i].style.background="#fff";
					}
					dot[num].style.background="#b30000";
					
				},2000);
			}
			

			for(var i=0;i<dot.length;i++){
				dot[i].index=i;
				dot[i].onclick=function(){
					clearInterval(timer);
					for(var j=0;j<dot.length;j++){
						dot[j].style.background="#fff";
					}
					this.style.background="#b30000";
					num=this.index;
					move(oUl,{'left':-this.index*screenW});
					
					ban();
				}
			}
			
			function getStyle(obj, name)
			{
				if(obj.currentStyle)
				{
					return obj.currentStyle[name];
				}
				else
				{
					return getComputedStyle(obj, false)[name];
				}
			}
			function move(obj, json, fnEnd)
			{
				clearInterval(obj.timer);
				obj.timer=setInterval(function (){
					var bStop=true;
					for(var attr in json){
						var cur=0;
						if(attr=='opacity'){
							cur=Math.round(parseFloat(getStyle(obj, attr))*100);
						}else{
							cur=parseInt(getStyle(obj, attr));
						}
						var speed=(json[attr]-cur)/7;
						speed=speed>0?Math.ceil(speed):Math.floor(speed);
						if(cur!=json[attr]){
							bStop=false;
						}
						if(attr=='opacity'){
							obj.style.filter='alpha(opacity:'+(cur+speed)+')';
							obj.style.opacity=(cur+speed)/100;
						}else{
							obj.style[attr]=cur+speed+'px';
						}
					}
					if(bStop){
						clearInterval(obj.timer);
						if(fnEnd){
							fnEnd();
						}
					}
				}, 30);
			}

		}
	}
</script>
<style scoped>
	main{
		margin-bottom: 70px;
	}
	main,.banner{
		width: 100%;
	}
	.banner img{
		width: 100%;
	}
	.nav{
		width: 100%;
		padding:20px;
		box-sizing: border-box;
		overflow: hidden;
		border-bottom:1px solid #ccc;
	}
	.nav li{
		width:33.3%;
		float:left;
	}
	.nav li a{
		display: inline-block;
		color: #000;
	}
	.nav li .pic{
		width: 100%;
		padding:0 18px;
		box-sizing: border-box;
		margin-bottom: 8px;
	}
	.nav li .pic img{
		width: 100%;
	}
	.nav li span{
		text-align: center;
		display: inline-block;
		width: 100%;
		font-size: 14px;
	}
	.con{
		width: 100%;
		padding: 0 20px;
		box-sizing: border-box;
	}
	.title{
		height: 36px;
		line-height: 36px;
		font-size: 14px;
	}
	.title h3{
		float:left;
		position: relative;
		padding-left:18px;
	}
	.title h3:before{
		content: "";
		display: inline-block;
		width:10px;
		height:20px;
		margin-right: 8px;
		background: url('../../assets/image/recom_icon.png');
		background-size: 10px 20px;
		position:absolute;
		left:0;
		top:50%;
		transform:translateY(-50%);
	}
	.title a{
		float:right;
		color: #555;
		text-decoration: none;
		font-size: 12px;
	}
	.list{
		width: 100%;
		overflow:hidden;	 
	}
	.list li{
		width: 33.3%;
		float: left;
		box-sizing: border-box;
	}
	.list li a{
		display: inline-block;
		color:#000;
		text-decoration: none;
	}
	.list li .pic{
		padding:4px;
		width:100%;
		box-sizing: border-box;
	}
	.list li .pic img{
		width: 100%;
	}
	.list p{
		line-height:20px;
		font-size: 12px;
	}
	.banner{
		position: relative;
		padding-bottom: 38%;
		overflow: hidden;
	}
	.banner ul{
		position: absolute;
		height: 100%;
		top:0;
		left:0;
	}
	.banner ul li{
		width:20%;
		float:left;
		height:100%;
	}
	.banner ul li img{
		height:100%;
		width:100%;
	}
	.dotted{
		position: absolute;
		bottom:10px;
		left:50%;
		transform:translate(-50%,0)
	}
	.dotted li{
		width:8px;
		height:8px;
		border-radius: 50%;
		background: #fff;
		float:left;
		margin:0 4px;
	}
	.dotted li.active{
		background: #b30000;
	}
</style>