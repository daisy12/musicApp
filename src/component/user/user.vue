<template>
	<main>
		<span class="return" @click="go"><i class="iconfont icon-dayuhao"></i></span>
		<div class="logo">
			<img src="../../assets/image/radio_02.jpg">
		</div>
		<router-link to="/login" class="login">手机号登录</router-link>
		<router-link to="/register" class="register">注册</router-link>
		
		<div class="loginType">
			<div class="seperate">
				<hr class="left">
				<span>其它登录方式</span>
				<hr class="right">
			</div>
			<ul>
				<li>
					<a href="">
						<img src="../../assets/image/weixin.png" />
						<p>微信</p>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../../assets/image/qq.png" />
						<p>QQ</p>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../../assets/image/weibo.png" />
						<p>微博</p>
					</a>
				</li>
				<li>
					<a href="">
						<img src="../../assets/image/wangyi.png" />
						<p>网易</p>
					</a>
				</li>
			</ul>
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
		padding: 20px;
		box-sizing: border-box;
		text-align: center;
	}
	.return{
		position: fixed;
		top:8px;
		left:8px;
		transform: rotate(180deg);
		font-weight: bold;
	}
	.logo{
		margin: 80px 0 60px;
		text-align: center;
	}
	.logo img{
		width:100px;
		height:100px;
	}
	.login,.register{
		display: inline-block;
		height: 44px;
		border:1px solid #ce3d3a;
		width:80%;
		line-height: 44px;
		box-sizing: border-box;
		margin-bottom: 20px;
		border-radius: 20px;
		text-decoration: none;
		font-size: 14px;
		color:#ce3d3a;
	}
	.login:hover,.register:hover{
		color:#fff;
		background: #ce3d3a;
	}
	.loginType{
		position: fixed;
		bottom:0;
		left:0;
		width:100%;
	}
	.loginType li{
		width:25%;
		float:left;
		text-align: center;
		margin:40px 0;
	}
	.loginType li a{
		display:inline-block;
		width:100%;
		height: 40px;
		color:#555;
		text-decoration: none;
	}
	.loginType li a img{
		width:40%;
	}
	.seperate{
		position: relative;
		width:100%;
	}
	.seperate span{
		text-align: center;
		display: inline-block;
		width:100%;
		color:#666;
	}
	.seperate .left,.seperate .right{
		position: absolute;
		top:30%;
		width:30%;
	}
	.seperate .left{
		left:0;
	}
	.seperate .right{
		right:0;
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