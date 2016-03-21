//获取classname的兼容；
function getByClassName(classname, srcElement) {
	var srcEle = srcElement || document;
	if (srcEle.getElementsByClassName) {
		return srcEle.getElementsByClassName(classname);
	} else {
		var all = srcEle.getElementsByTagName("*");
		var arr = [];
		for (var i = 0; i < all.length; i++) {
			if (all[i].className == classname) {
				arr.push(all[i]);
			}
		}
		return arr;
	}
}
//事件监听；
function addEvent (target,eventName,fun,bubble){
	if (target.attachEvent){
		target.attachEvent("on" + eventName,fun);
	}else{
		target.addEventListener(eventName,fun,bubble);
	}
}