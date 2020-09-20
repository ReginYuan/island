const Koa = require("Koa");
// 路由组件
const Router = require("koa-router");
//实例化应用程序对象
const app = new Koa();
const router = new Router();

// 查询数据
router.get('/classic/latest', (ctx, next) => {
    ctx.body = {
        key: "ReginYuan"
    };
});

// 新增数据
// router.post();
// 更新数据
// router.put();
// 删除数据
// router.delete();

// 注册路由中间件
app.use(router.routes());

// app.use(async(ctx, next) => {
//     // 获取路径
//     console.log(ctx.path);
//     // 获取请求方式
//     console.log(ctx.method);
//     // 获取请求路径以及请求方式
//     if (ctx.path === "/classic/latest" && ctx.method === "GET") {
//         // 向页面返回参数
//         ctx.body = { key: "ReginYuan" };
//     }
// });

// 设置监听端口
app.listen(3000);