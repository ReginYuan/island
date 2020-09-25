// 路由组件
const Router = require("koa-router");
// 实例化路由组件
const router = new Router();

// 将版本号加到路径中
router.get('/v1/:id/classic/latest', (ctx, next) => {


    // 获取请求参数
    const path = ctx.params;
    const query = ctx.request.query;
    const headers = ctx.request.header;
    const body = ctx.request.body;
    ctx.body = {
        key: "classic"
    };
});
module.exports = router;