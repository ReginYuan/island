// Koa组件
const Koa = require("Koa");

// 获取配置路由的文件
const InitManager = require('./core/init');

//实例化应用程序对象
const app = new Koa();

// 获取绝对路径
// process.cwd();

// 注册路由中间件,传递app对象
InitManager.initCore(app);


// 设置监听端口
app.listen(3000);