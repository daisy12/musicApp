<template>
	<main>
		<div class="play_top">
			<div class="paly_banner">
				<img src="../../assets/image/play_bg.jpg"/>
			</div>
			<div class="play_pic">
				<img src="../../assets/image/play_pic.jpg"/>
			</div>
			 
		</div>
		<div class="play_con">
			<h3 class="title">{{data.name}}</h3>
			<p class="singer"><span>{{data.singer}}</span></p>
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
				},
				a:0
			}
		},
		props:['myid'],
	
		watch:{/*监测数据的变化时调用，update只能是监测data里面的数据*/
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
					this.$emit('send',this.data.time);
					document.getElementById('player').setAttribute('src',this.data.musicsrc);
				},function(){
					
				})
			}
		},
	
		 
		mounted(){
			this.a=this.myid;
			//alert(1)
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
	.play_top{
		width:100%;
		background: url('../../assets/image/play_bg.jpg');
		position: relative;
	} 
	.paly_banner{
		width:100%;
	}
	.paly_banner img{
		width:100%;
	}
	.play_pic{
		position: absolute;
		width:60%;
		bottom: 0;
		left:50%;
		transform: translate(-50%,40%);
	}
	.play_pic img{
		width:100%;
		
	}
	.play_con{
		padding: 120px 20px 0px;
		box-sizing: border-box;
		text-align: center;
	}
	.play_con h3{
		line-height: 30px;
		font-size: 18px;
		font-weight: bold;
		color:#333;
	}
	.play_con p{
		color:#666;
	}
	.play_con{
		width:100%;
	}
</style>