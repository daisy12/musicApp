<template>
	<main>
		<ul class="nav">
			<li v-for="(v,i) in navCon" @click="get(i)" v-bind:class="{active:i==index}">
				<router-link :to="'/'+linkNav[i]">{{v}}</router-link>
				<!--路由传参-->
			</li>
		</ul>
		<router-view></router-view>
	</main>
</template>
<style scoped>
	main{
		width: 100%;
	}
	main>.nav{
		height: 40px;
		background: #fff;
	}
	main>.nav li{
		width: 25%;
		text-align: center;
		line-height: 40px;
		font-size: 16px;
		font-weight: bold;
		float: left;
	}
	main>.nav li a{
		color:#000;
		text-decoration: none;
	}
	main>.nav li.active{
		border-bottom:2px solid #b30000;
		box-sizing: border-box;
	}
	main>.nav li.active a{
		color:#b30000;
	}
</style>
<script>
	export default{
		data(){
			return{
				index:0,
				navCon:['热门推荐','榜单','歌单','电台'],
				linkNav:['recommend','billboard','songsheet','broadcasting']
			}
		},
		methods:{
			get(i){
				this.index=i;
			}
		}
	}
</script>