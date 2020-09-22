// Koa组件
const Koa = require("Koa");
const book = require('./api/v1/boock');
const classic = require('./api/v1/classic');

//实例化应用程序对象
const app = new Koa();



// 注册路由中间件
app.use(book.routes());
app.use(classic.routes());

// 设置监听端口
app.listen(3000);