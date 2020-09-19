const Koa = require("Koa");

//实例化应用程序对象
const app = new Koa();

//应用中间件

// 发送HTTP KOA  接受HTTP

//函数
// function test() {
//     console.log('hello', 'ReginYuan');
// }

//将函数注册成中间件
// app.use(test);

app.use(async(ctx, next) => {

    // await求值关键字  表达式  阻塞线程
    await next();
    const r = ctx.r;
    console.log(r);
});

app.use(async(ctx, next) => {

    //axios所有的返回都是基于Promise
    //next() 异步操作 对资源 读文件  发送http  操作数据库
    const axios = require("axios");
    const res = await axios.get("https://m.imooc.com/");
    // ctx 上下文传值
    ctx.r = res;
    await next();


});

// 设置监听端口
app.listen(3000);