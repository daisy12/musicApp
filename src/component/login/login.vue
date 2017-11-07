<template>
	<main>
		<div class="login_top">
			<span class="return" @click="go"><i class="iconfont icon-fanhui"></i></span>
			<span>手机号登录</span>
		</div>
		<div class="login_con"> 
			<div class="tel">
				<i class="iconfont icon-shouji"></i>
				<input type="text" placeholder="+86 请输入手机号" v-model="telphone" @blur="testTel($event)"/>
			</div>
			<div class="pass">
				<i class="iconfont icon-iconfontsuotou"></i>
				<input type="text" placeholder="请输入密码"/>
				<a class="forget">忘记密码</a>
			</div> 
			<button>登录</button>
		</div>
		<div class="shadeBox" v-if="show">
			<div class="shade">
				<p>输入有误，请重新输入！</p>
				<a class="close" href="javascript:void(0);" @click="close">关闭</a>
			</div>
		</div>
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
<script>
	export default{
		data(){
			return{
				telphone:'',
				show:false
			}
		},
		methods:{
			go(){
				this.$router.go(-1);
			},
			testTel(event){
			 	if(!(/^1[34578]\d{9}$/.test(this.telphone))){
			 		this.show=true;
			 	}
			 	//event.target.focus();/*$event代表的是当前的事件对象*/
			},
			close(){
				this.show=false;
			}
		}
	}
</script>
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
	.login_top{
		color:#fff;
		padding: 20px;
		background: #d33a31;

	}
	.login_con{
		padding: 20px;
		width:100%;
		box-sizing: border-box;
	}
	.login_con .tel,.login_con .pass{
		border-bottom: 1px solid #ccc;
		padding-bottom: 6px;
		margin-bottom: 20px;
	}
	.login_con input{
		border:none;
		background: none;
		outline: none;
		padding-left: 4px;
		width:60%;
	}
	.login_con i{
		color:#999;
	}
	.login_con .forget{
		float:right;
		color:blue;
		font-size: 12px;
	}
	.login_con button{
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
	}
	.shadeBox{
		position: fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background: rgba(0,0,0,.5);
	}
	.shade{
		position: absolute;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
		width:70%;
		height:180px;
		text-align: center;
		background: #f1f1f1;
		border-radius: 10px;
		border:1px solid #d33a31;
		padding: 30px 10px;
		box-sizing: border-box;
		box-shadow: 1px 1px 4px #d33a31;
	}
	.shade p{
		margin:30px 0;
	}
	.shade .close{
		padding: 3px 10px;
		background:#d33a31;
		color:#fff;
		text-decoration: none;
		border-radius: 4px;
		border:1px solid #B30000;
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