exports.sun=function(){
	var res=0;

	for(var i=0; i<arguments.length;i++){
		res+=arguments[i]
	}

	return res;
}

//版本更新 
//添加 除法 方法

exports.div=function(a, b){
	return a/b;
}