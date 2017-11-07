<template>
	<main>
		<div class="register_top">
			<span class="return" @click="go"><i class="iconfont icon-fanhui"></i></span>
			<span>设置昵称</span>
		</div>
		<div class="register_con"> 
			<div class="tig">
				<img src="../../assets/image/face.png"/>
				<p>取一个昵称，让大家记住你</p>
			</div>
			<div class="test">
				<i class="iconfont icon-sousuo"></i>
				<input type="text" placeholder="请输入昵称"/>
			</div> 
			<a class="submit">开启云音乐</a>
			<div class="protocol">
				<i v-bind:class="{'iconfont':true,'icon-fuxuankuangxuanzhong':true,'disSelect':!select,'selected':select}" @click="changeSelect"></i>
				<span>同意以下协议<a href="">《网易云音乐服务条款》</a></span>
			</div>
		</div>
	</main>
</template>
<style scoped>
	main{
		position: fixed;
		top:0;
		left:0;
		background: #fff;
		width:100%;
		height:100%;
		z-index:30;
		font-family: "微软雅黑";
		background: url('../../assets/image/big_bg.jpg');
		box-sizing: border-box;
	}	
	.register_top{
		color:#fff;
		padding: 20px;
		background: #d33a31;
	}
	.register_con{
		padding: 20px;
		width:100%;
		box-sizing: border-box;
	}
	.register_con .tig{
		text-align: center;
		width:100%;
	}
	.register_con .tig img{
		width:120px;
	}
	.register_con .tig p{
		text-align: center;
		color:#f29c9f;
		line-height: 80px;
	}
	.register_con .tel,.register_con .pass{
		border-bottom: 1px solid #ccc;
		padding-bottom: 6px;
		margin-bottom: 20px;
	}
	.register_con input{
		border:none;
		background: none;
		outline: none;
		padding-left: 4px;
		width:80%;
	}
	.register_con i{
		color:#999;
	}
	.register_con .submit{
		background: #d33a31;
		color:#fff;
		border-radius: 20px;
		width:100%;
		height:44px;
		line-height: 44px;
		text-align: center;
		border:none;
		outline: none;
		margin:40px 0;
		font-size: 14px;
		display:inline-block;
		text-decoration: none;
	}
	.protocol .selected{
		color:#d33a31;
		border:1px solid #ccc;
		font-size: 14px;
	}
	.protocol .disSelect{
		color:#fff;
		border:1px solid #ccc;
		font-size: 14px;
	}
</style>
<script>
	export default{
		data(){
			return{
				select:true
			}
		},
		methods:{
			go(){
				this.$router.go(-1);
			},
			changeSelect(){
				this.select=!this.select;
			}
		}
	}
</script>