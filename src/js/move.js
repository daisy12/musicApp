//封装一个获取样式的函数
function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}
//减速运动函数
function move(obj, json, fnEnd)
{
	//给每一个obj来一个timer
	//一上来先清空
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;//假设：所有值都已经到了
		for(var attr in json){
			var cur=0;
			if(attr=='opacity'){
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
			}else{
				cur=parseInt(getStyle(obj, attr));
			}
			var speed=(json[attr]-cur)/7;
			//减速运动速度必须向上向下取整
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(cur!=json[attr]){
				bStop=false;
			}
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}else{
				obj.style[attr]=cur+speed+'px';
			}
		}
		if(bStop){
			clearInterval(obj.timer);
			if(fnEnd){
				fnEnd();
			}
		}
	}, 30);
}

//匀速运动，可实现同步运动（即多物体运动）
function move1(obj,json,fun){   
	clearInterval(obj.timer);  
	var speed=0;
	obj.timer=setInterval(function(){    
		var onOff=true; 
		for(var css in json){
			if(css=="opacity"){
				var temp=parseInt(getStyle(obj,css)*100);  
			}else{
				var temp=parseInt(getStyle(obj,css));
			} 
			if(json[css]>temp){
				speed=18;  
			}else{
				speed=-18;
			}
			if(temp!=json[css]){  
				onOff=false;
			}
			if(Math.abs(json[css]-temp)<Math.abs(speed)){ 
				if(css=="opacity"){
				 
					obj.style[css]=json[css]/100;      
					obj.style.filter="alpha(opacity:"+json[css]+")";
				}else{
					obj.style[css]=json[css]+"px";  
				}	
			}else{
				if(css=="opacity"){
					obj.style[css]=parseInt((temp+speed))/100; 
					obj.style.filter="alpha(opacity:"+(temp+speed)+")";
				}else{
					obj.style[css]=temp+speed+"px";
				} 
				 
			}
		}	
		if(onOff){
			clearInterval(obj.timer);
			if(fun){
				fun();
			}
		}
		
	},30)
}
function shakemove(obj,type,fw,fn){
	obj.timer=null;
	clearInterval(obj.timer);
	var arr=[];
	var num=-1;
	for(var i=fw;i>0;i-=2){ //用户传入的震动范围
		arr.push(i,-i);
	}
	arr.push(0);
	obj.timer=setInterval(function(){
		/*使用费行间样式获取自身的值，或者使用offsetLeft*/
		if(num===arr.length){
			clearInterval(obj.timer);
			/*清除时，调用top*/
			if(fn){
				fn();
			}
		}else{
			num++;
			obj.style[type]=parseInt(getStyle(obj,type))+arr[num]+'px';
		}

		/*运动物体必须（定位）
		 运动与停止运动要分开*/
	},30)
}