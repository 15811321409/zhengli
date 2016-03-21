
function init () {
	navigation.init().create();
	Search.init().create();
	Select.init().create();
	Selects.init().create();
	Menu.init().create();
}
//导航登录；
var navigation = {
	_deLoad : null,
	init : function (){
		this._deLoad = getByClassName("deLoad")[0];
		return this;
	},
	create : function  () {
		var winBox = document.getElementById("box");
		var winTitle = document.getElementById("title");
		var winClose = document.getElementById("Close1");
		var winWelLoad = document.getElementById("welLoad");
		var winSp = document.getElementById("sp");
		var winLoad1  = document.getElementById("load1");
		var winFal = document.getElementById("fal");
		this._deLoad.onclick = function  () {
			winBox.style.display="block";
		}
		winClose.onclick = function  () {
			winBox.style.display="none";
		}
		winLoad1.onclick = function  () {
			winBox.style.display="none";
			winWelLoad.style.display="none";
			winSp.style.display="block";
		}
		winFal.onclick = function  () {
			winBox.style.display="none";
		}
		
	}
}
//搜索框；
var Search ={
	_input : null,
	init : function (){
		this._input = getByClassName("ser1")[0];
		return this;
	},
	create : function () {
		var that = this;
		var _left = this._input.offsetLeft;
		var _top = this._input.offsetTop;
		addEvent(window,"scroll",function(){
			var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if (_scrollTop >= _top){
				with(that._input.style){
					position="fixed";
					left="_left";
					top="_top";
				}
			}else{
				with(that._input.style){
					position="";
					left="";
					top="0";
				}
			}
		},false);
		return this;
	}
}
//下拉菜单；
 var Select = {
 	_input2 : null,
 	selects : null,
 	cloBtn : null,
 	oUl : null,
 	oLi : null,
 	init : function () {
	 	this._input2 = getByClassName("int1")[0];
	 	this.selects = getByClassName("selects")[0];
	 	this.cloBtn = getByClassName("cloBtn")[0];
	 	this.oUl = getByClassName("oUl")[0];
	 	this.oLi = this.oUl.children;
	 	return this;
 	},
 	create : function (){
 		
 		this._input2.onclick = function (){
 			Select.selects.style.display="block";
 		}
 		this.cloBtn.onclick = function  () {
 			Select.selects.style.display="none";
 		}
 		for (var i=0; i<this.oLi.length; i++){
			this.oLi[i].onclick = function  () {
				Select._input2.value=this.innerHTML;
			} 			
 		}
  	}
 }
//下拉菜单固定；
var Selects = {
	selects : null,
	init : function  () {
		this.selects = getByClassName("selects")[0];
		return this;
	},
	create : function (){
		var that = this;
		var _left = this.selects.offsetLeft;
		var _top = this.selects.offsetTop;
		addEvent(window,"scroll",function(){
			var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if (_scrollTop >= _top){
				with(that.selects.style){
					position="fixed";
					left="_left";
					top="_top";
				}
			}else{
				with(that.selects.style){
					position="";
					left="";
					top="";
				}
			}
		},false);
		return this;
	}
}
//商品分类；
var Menu = {
	categoryOul : null,
	categoryOLi : null,
	categoryMenu : null,
	categoryMenuList : null,
	init : function  () {
		this.categoryOul = document.getElementById("second");
		this.categoryOLi = this.categoryOul.getElementsByTagName("a");
		this.categoryMenu = getByClassName("menuR")[0];
		this.categoryMenuList = this.categoryMenu.children;
		return this;
	},
	create : function (){
		for (var i=0; i<this.categoryOLi.length; i++){
			this.categoryOLi[i].index=i;
			this.categoryOLi[i].onmouseover = function  () {
				Menu.categoryMenu.style.display="block";
				for (var j=0; j<Menu.categoryMenuList.length; j++){
					Menu.categoryMenuList[j].display="none";
				}
				Menu.categoryMenuList[this.index+1].style.display="block";
			}
		}
	}
}








