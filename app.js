// Koa组件
const Koa = require("Koa");
// require-directory  实现路由组件自动化插件
const requireDirectory = require('require-directory');



//实例化应用程序对象
const app = new Koa();
//路由自动化 设置路由的路径并调用注册中间件的方法
const modules = requireDirectory(module, './api', {
    visit: whenLoadModule
});

// 注册中中间件
function whenLoadModule(obj) {
    if (obj instanceof Router) {
        app.use(obj.routes());
    }

}


// 注册路由中间件
app.use(book.routes());
app.use(classic.routes());

// 设置监听端口
app.listen(3000);