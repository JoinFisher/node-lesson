const http = require('http'); //http 定义之后不会再改了，所以用常量定义


//request        请求     输入 - 请求的信息
//response     响应     输出 - 输出的东西 
var server = http.createServer(function(req, res){  //创建一个server对象

    switch(req.url){
        case '/1.html':
            res.write('1111');
            break;
        case  '/2.html':
            res.write('2222');
            break;
        default:
            res.write('404');
            break;
    }

    //res.write('asdfg');
    res.end();

});

//监听--等着
//端口--数字(相当于门牌号)，可以自己定义
server.listen(9090);   //端口占用，可以用端口转发，后期查阅访问

//前台页面  url访问  http://localhost:9090 即可



