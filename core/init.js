// require-directory  实现路由组件自动化插件
const requireDirectory = require("require-directory");
const Router = require('koa-router');
class InitManager {


    static initCore(app) {
        // 入口方法
        InitManager.app = app;
        InitManager.initLoadRouters();
    }

    static initLoadRouters() {

        //路由自动化 设置路由的路径并调用注册中间的方法
        // process.cwd()获取绝对路径  'E:\Code\island'
        const apiDirectory = `${process.cwd()}/app/api`;
        requireDirectory(module, apiDirectory, {
            visit: whenLoadModule
        });

        // 注册中中间件
        function whenLoadModule(obj) {

            if (obj instanceof Router) {
                InitManager.app.use(obj.routes());
            }

        }
    }
}
module.exports = InitManager;