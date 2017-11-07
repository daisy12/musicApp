<template>
	<main>
		<div class="register_top">
			<span class="return" @click="go"><i class="iconfont icon-fanhui"></i></span>
			<span>手机号注册</span>
		</div>
		<div class="register_con"> 
			<div class="tel">
				<i class="iconfont icon-shouji"></i>
				<input type="text" placeholder="+86 请输入手机号" v-model="telphone" @blur="testTel($event)"/>
			</div>
			<div class="pass">
				<i class="iconfont icon-iconfontsuotou"></i>
				<input type="text" placeholder="设置登录密码，不少于6位" v-model="userpass" @blur="testPass()"/>
			</div> 
			<router-link to="/registerTwo" class="next">下一步</router-link>
		</div>
		<div class="shadeBox" v-if="show">
			<div class="shade">
				<p>{{msg}}！</p>
				<a class="close" href="javascript:void(0);" @click="close">关闭</a>
			</div>
		</div>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				telphone:'',
				userpass:'',
				show:false,
				msg:''
			}
		},
		methods:{
			go(){
				this.$router.go(-1);
			},
			close(){
				this.show=false;
			},
			testTel(event){
			 	if(!(/^1[34578]\d{9}$/.test(this.telphone))){
			 		this.show=true;
			 		this.msg='手机号输入有误，请重新输入';
			 	}
			 	//event.target.focus();/*$event代表的是当前的事件对象*/
			},
			testPass(){
				if(this.userpass.length<6){
					this.show=true;
			 		this.msg='密码不能少于6位，请重新输入';
				}
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
</style>