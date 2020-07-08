

var cat = document.getElementById('angry_00');
//定时器
var timer
//图片的名称 图片个数
function start(name,count){
	
	clearInterval(timer);
	//初始化下标
	var index = 0;
	//定时器  参数：方法，事件（毫秒）
	timer = setInterval(function(){
		//每次变化的index决定了图片的切换
		if(++index<count){
			cat.src = "img/Animations/"+name+"/"+name+"_"+indexof(index)+".jpg";
		}else{
			//当图片的个数超过的时候
			clearInterval(timer);
		}

	},80)
	//补零
	function indexof(index){
		if(index<10){
			return "0"+index;
		}else{
			return index;
		}
	}
}

//获取需要点击事件的元素
var cymbal = document.getElementById('cymbal');
var drink = document.getElementById('drink');
var eat = document.getElementById('eat');
var fart = document.getElementById('fart');
var pie = document.getElementById('pie');
var scratch = document.getElementById('scratch');
var knockout = document.getElementById('knockout');
var angry = document.getElementById('angry');
var stomach = document.getElementById('stomach');
var footleft = document.getElementById('footleft');
var footRight = document.getElementById('footRight');
var music = document.getElementById('music');

cymbal.onclick = function(){
//	music.src="mp3/pia.mp3";
//	music.play();
	start("cymbal",13);
}
drink.onclick = function(){

	start("drink",81);
}
eat.onclick = function(){

	start("eat",40);
}
fart.onclick = function(){

	start("fart",28);
}
pie.onclick = function(){

	start("pie",24);
}
scratch.onclick = function(){

	start("scratch",56);
}
knockout.onclick = function(){

	start("knockout",81);
}
angry.onclick = function(){

	start("angry",26);
}
stomach.onclick = function(){

	start("stomach",34);
}
footleft.onclick = function(){

	start("footleft",30);
}
footRight.onclick = function(){

	start("footRight",30);
}