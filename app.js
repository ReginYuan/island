const Koa = require("Koa");
// 路由组件
const Router = require("koa-router");
//实例化应用程序对象
const app = new Koa();
const router = new Router();
// web开发  好的代码：阅读  利于维护 提高编程效率
//编程  主题  拆分 文件
//根据数据的类型划分主题

//主题  渐进式  核心主要
//抽象概念 思考  Model

//实践性


// 查询数据
router.get('/classic/latest', (ctx, next) => {
    ctx.body = {
        key: "ReginYuan"
    };
});



// 注册路由中间件
app.use(router.routes());


// 设置监听端口
app.listen(3000);