<template>
	<main @click="close">
		<div class="wrap" @click.stop="select">
			<div class="list_top">
				<span>播放列表(50)</span>
				<i class="iconfont icon-shanchu" @click="deteleAll"></i>
			</div>
			<ul class="list_con">
				<li class="item" v-for="(v,k) in dataList">
					<div class="serial">
						<span>{{k}}</span>
						<span class="tit">{{v}}</span>
					</div>
					<div class="delete" @click="deleteItem(k)">
						<i class="iconfont icon-cuo"></i>
					</div>
				</li>
			</ul>
		</div>
		<ul>
			
		</ul>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				dataList:['我们都一样','锦绣未央','和你一样','天耀中华','妈妈','月儿弯弯']
			}
		},
		props:['change'],
		methods:{
			close(){
				this.change.show=false;
			},
			select(){
				this.change.show=true;
			},
			deleteItem(k){
				this.dataList.splice(k,1);
			},
			deteleAll(){
				this.dataList=[];
			}
		}
	}
</script>
<style scoped>
	main{
		position:fixed;
		bottom:70px;
		left:0;
		width:100%;
		height:100%;
		box-sizing: border-box;
		background: rgba(0,0,0,0.5);
		padding:0;
		padding-top: 300px;
		font-family: "微软雅黑";
		color:#333;
		font-size: 14px;
	}
	.wrap{
		background: #fff;
		width:100%;
		height: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		overflow-y: scroll;
	}
	.wrap .list_top{
		line-height: 40px;
		border-bottom:1px solid #ccc;
	}
	.wrap .list_top i{
		float:right;
	}
	.wrap .list_con{
	}
	.wrap .list_con .item{
		height: 50px;
		border-bottom:1px solid #ccc;
		line-height: 50px;
	}
	.wrap .list_con .item .serial{
		float:left;
	}
	.wrap .list_con .item .serial img{
		
	}
	.wrap .list_con .item .serial span{
		
	}
	.wrap .list_con .item .delete{
		float:right;
	}
</style>