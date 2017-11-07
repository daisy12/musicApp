<template>
	<main>
		<ul>
			<li class="song_item">
				<div class="pic">
					<img src="../../assets/image/song_list_01.jpg">
				</div>
				<div class="des">
					<h3>新歌版</h3>
					<ol class="song_list">
						<li>白气球告白-周杰伦</li>
						<li>天若有情-A-Lin</li>
						<li>July-吴亦凡</li>
					</ol>
				</div>
			</li>
			<li class="song_item">
				<div class="pic">
					<img src="../../assets/image/song_list_02.jpg">
				</div>
				<div class="des">
					<h3>新歌版</h3>
					<ol class="song_list">
						<li>白气球告白-周杰伦</li>
						<li>天若有情-A-Lin</li>
						<li>July-吴亦凡</li>
					</ol>
				</div>
			</li>
			<li class="song_item">
				<div class="pic">
					<img src="../../assets/image/song_list_03.jpg">
				</div>
				<div class="des">
					<h3>新歌版</h3>
					<ol class="song_list">
						<li>白气球告白-周杰伦</li>
						<li>天若有情-A-Lin</li>
						<li>July-吴亦凡</li>
					</ol>
				</div>
			</li>
			<li class="song_item">
				<div class="pic">
					<img src="../../assets/image/song_list_01.jpg">
				</div>
				<div class="des">
					<h3>新歌版</h3>
					<ol class="song_list">
						<li>白气球告白-周杰伦</li>
						<li>天若有情-A-Lin</li>
						<li>July-吴亦凡</li>
					</ol>
				</div>
			</li>
			<li class="song_item" v-for="v in msg">
				<div class="pic">
					<img v-lazy="v.picUrl" alt="不支持">
				</div>
				<div class="des">
					<h3>{{v.topTitle}}</h3>
					<ol class="song_list">
						<li v-for="k in v.songList">{{k.songname}}-{{k.singername}}</li>
					</ol>
				</div>
			</li>
		</ul>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				msg:'',
				url:'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=1928093487&format=h5&inCharset=utf-8&outCharset=utf-8&notice=0&uin=0&needNewCode=1&jsonpCallback=__jp0'
			}
		},
		mounted(){
			this.$http.jsonp(this.url,{
				params:{
					
				},
				jsonp:'__jp0'
			}).then(function(){
				
			},function(){
				
			});
			var that=this;
			setTimeout(function(){
				/*console.log(fun);*/
				console.log(allData);
				that.msg=allData.data.topList;
				console.log(that.msg)
			},1000);
		}
	}
</script>
<style scoped>
	main,main ul{
		width:100%;
	}
	main ul{
		padding: 0px 20px 70px 20px;
		box-sizing: border-box;
	}
	main ul .song_item{
		width: 100%;
		overflow: hidden;
	}
	main ul .song_item{
		overflow: hidden;
	 	border-bottom: 1px solid #ccc;
	 	padding: 20px 0;
	}
	main ul .song_item .pic{
		width: 30%;
		float: left;
	}
	main ul .song_item .pic img{
		width:100%;
		text-align: center;
	}
	main ul .song_item .des{
		width: 70%;
		float: left;
		padding-left: 10px;
		box-sizing: border-box;
	}
</style>