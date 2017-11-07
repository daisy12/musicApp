<template>
	<main>
		<div class="lyrics">
			<h3 class="lyrics_title">{{data.name}}</h3>
			<span class="lyrics_author">{{data.singer}}</span>
			<ul class="lyrics_list">
				<li>醉在梦境上 梦在清晨上</li>
				<li v-for="v in data.lyrics">{{v}}</li>
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
		padding: 40px 0px 40px 0px;
		box-sizing: border-box;
		text-align: center;
		font-family: "微软雅黑";
		height: 100%;
	 	position: fixed;
	}
	.lyrics{
		overflow: scroll;
	}
	.lyrics .lyrics_title{
		line-height: 40px;
		font-weight: bold;
		font-size: 18px;
		color:#555;
	}
	.lyrics .lyrics_author{
		line-height: 20px;
		font-size: 14px;
	}
	.lyrics .lyrics_list{
		height: 280px;
		overflow:scroll;
		margin-top: 10px;
	}
	.lyrics .lyrics_list li{
		line-height:34px;
		font-size: 12px;
		color:#666;
	}
</style>