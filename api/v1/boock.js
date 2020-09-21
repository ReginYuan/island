// 路由组件
const Router = require("koa-router");
// 实例化路由组件
const router = new Router();

// 将版本号加到路径中
router.get('/v1/book/latest', (ctx, next) => {
    ctx.body = {
        key: "book"
    };
});

module.exports = router;