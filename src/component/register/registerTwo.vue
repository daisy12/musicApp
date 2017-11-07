<template>
	<main>
		<div class="register_top">
			<span class="return" @click="go"><i class="iconfont icon-fanhui"></i></span>
			<span>手机号验证</span>
		</div>
		<div class="register_con"> 
			<p>你会收到一条带验证码的短信，请输入验证码：</p>
			<div class="test">
				<i class="iconfont icon-sousuo"></i>
				<input type="text" placeholder="请输入验证码"/>
				<time>54s</time>
			</div> 
			<router-link to="/registerThree" class="next">下一步</router-link>
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
		z-index:31;
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
	.register_con p{
		color:#999;
		font-size: 14px;
		margin-bottom: 50px;
	}
	.register_con .test{
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
	.register_con time{
		font-size: 12px;
		color:#999;
	}
	.register_con .next{
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
</style>
<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			go(){
				this.$router.go(-1);
			}
		}
	}
</script>