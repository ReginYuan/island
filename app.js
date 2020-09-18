const Koa=require("Koa");

//实例化应用程序对象
const app=new Koa();

//应用中间件

// 发送HTTP KOA  接受HTTP

//函数
function test() {
    console.log('hello', 'ReginYuan');
}

//将函数注册成中间件 
app.use(test);

// 设置监听端口
app.listen(3000);