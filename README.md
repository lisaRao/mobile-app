### 框架搭建


### 技术栈

- `create-react-app`
- `webpack 4.0`
- `dva`
- `react-router 4.0`
- `antd-mobile`

### 使用

``` bash
  yarn 
```
或者
``` bash
  npm install 
```

### 关于目录结构说明

```
├── config/                          // webpack 配置文件
│ ├── env.js                        // node env
│ ├── paths.js                      // paths 处理
│ ├── polyfills.js                  // router layouts设置
│ ├── webpack.config.base.js        // webpack 公共配置
│ ├── webpack.config.dev.js         // webpack 公共配置
│ ├── webpack.config.prod.js        // webpack 公共配置
│ ├── webpackDevServer.config.js    // devserver 配置 注:proxy在 package.json中设置
├── public/                         // 静态页面
├── scripts/                        // 文件执行入口
├── src/                           // 源码目录
│ ├── assets/                      // 静态资源，编译时copy至dist目录
│ ├── components/                  // UI组件及UI相关组件
│ ├── layouts/                     // router layouts设置
│ ├── models/                      // 全局数据模型(默认加载)
│ ├── routes/                       // 页面目录
│ │ ├── coupon/                    // 优惠券模块
│ │ ├── home/                      // 首页模块
│ │ ├── order/                     // 订单
│ │ ├── .../                       // ...
│ ├── services/                    // 数据接口
│ ├── utils/                       // 工具函数
│ │ ├── request.js                 // 异步请求函数
│ │ ├── flexlib.js                 // rem使用工具
│ │ ├── constants.js               // 整个站点常量定义
│ │ └── cache.js                   // localstrorage/cookie..(get/set/del..)
│ ├── index.less                  // 约定的全局样式文件，自动引入
├── .eslintrc                      // eslint配置
├── .gitignore                     // git配置
├── package.json                   // 项目信息
├── README.md                      // 项目描述
└── yarn.lock                      // 项目yarn依赖包
```











