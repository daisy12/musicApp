<template>
	<main>
		<div class="current_play">
			<div class="pic">
				<img src="../../assets/image/resong.jpg">
			</div>
			<div class="current_msg">
				<div class="singer">
					<span class="singer_key">歌手：</span>
					<span class="sinder_value">{{data.name}}</span>
				</div>
				<div class="album">
					<span class="album_key">专辑：</span>
					<span class="album_value">{{data.singer}}</span>
				</div>
			</div>
		</div>
		<div class="recomment_bill">
			<h3>你可能感兴趣的歌单</h3>
			<ul class="bill_list">
				<li>
					<div class="pic">
						<img src="../../assets/image/bill_list_01.jpg"/>
					</div>
					<p>我们祥云在校园</p>
				</li>
				<li>
					<div class="pic">
						<img src="../../assets/image/bill_list_02.jpg"/>
					</div>
					<p>我们祥云在校园</p>
				</li>
				<li>
					<div class="pic">
						<img src="../../assets/image/bill_list_03.jpg"/>
					</div>
					<p>我们祥云在校园</p>
				</li>
				<li>
					<div class="pic">
						<img src="../../assets/image/bill_list_01.jpg"/>
					</div>
					<p>我们祥云在校园</p>
				</li>
				<li>
					<div class="pic">
						<img src="../../assets/image/bill_list_02.jpg"/>
					</div>
					<p>我们祥云在校园</p>
				</li>
			</ul>
		</div>	 
	</main>
</template>
<script>
	export default{
		data(){
			return{
				msg:[],
				data:{
					name:'春-阳光',
					singer:'苏打绿',
					musicsrc:"./src/assets/mp3/music.mp3"
				}
			}
		},
		props:['myid'],
		watch:{
			myid(){
				this.$http.get('./src/json/recomment.json',{
					params:{
						
					}
					}).then(function(res){
						this.msg=res.data.data;
						for(var i=0;i<this.msg.length;i++){
							if(this.msg[i].id==this.myid){
								this.data=this.msg[i];
								musicObject=this.data;
							}
						}
						document.getElementById('player').setAttribute('src',this.data.musicsrc);
					},function(){
						
					})
				}
			},
		mounted(){
			this.$http.get('./src/json/recomment.json',{
				params:{
				}
			}).then(function(res){
				this.msg=res.data.data;
				for(var i=0;i<this.msg.length;i++){
					if(this.msg[i].id==this.myid){
						this.data=this.msg[i]; 
						musicObject=this.data;
					}
				}
				document.getElementById('player').setAttribute('src',this.data.musicsrc);
			},function(){
				
			})
		}
	}
</script>
<style scoped>
	main{
		width:100%;
		height:100%;
		font-family: "微软雅黑";
		position: relative;
		overflow: scroll;
	}
	main .current_play{
		margin-top: 50px;
		border-top:1px solid #ccc;
		border-bottom: 1px solid #ccc;
		overflow: hidden;
		height: 100px;
	}
	main .current_play .pic{
		float:left;
		height: 100%;
		padding: 10px;
		box-sizing: border-box;
	}
	main .current_play .pic img{
		height:100%;
	}
	main .current_msg{
		float:left;
		box-sizing: border-box;
		padding: 10px;
	}
	main .current_msg>div{
		color:#666;
		line-height: 40px;
	}
	main .current_msg>div:nth-of-type(1){
		border-bottom: 1px solid #ccc;
		height: 100%;
	}
	.similar_song,.recomment_bill{
		width:100%;
		padding: 10px;
		box-sizing: border-box;
	}
	.recomment_bill{
		margin-bottom: 180px;
	}
	.similar_song h3,.recomment_bill h3{
		line-height: 40px;
		margin-top: 10px;
	}
	.similar_song .similar_list li{
		margin-bottom: 8px;
	}
	.similar_song .similar_list li h4{
		line-height: 30px;
		color:#333;
	}
	.similar_song .similar_list li p{
		font-size: 12px;
		color:#666;
	}
	.recomment_bill ul li{
		height: 60px;
		margin-bottom: 4px;
	}
	.recomment_bill ul li .pic{
		height: 100%;
		float:left;
		margin-right: 8px;
	}
	.recomment_bill ul li .pic img{
		height: 100%;
	}
	.recomment_bill ul li p{
		float:left;
		line-height: 60px;
	}
	
</style>