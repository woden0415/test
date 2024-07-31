### 系统概述

TMS 供应链管理系统，功能如下：

- 主要实现司机,车辆,运送,订单管理及维护.

### 系统设计和实现

使用 ES6 开发， vuejs 作为基础框架。

- element-ui
- vue-router
- vuex
- axios
-

### 文件目录规则

- env.js 构建时设置环境变量
- src
  - components 组件
  - consts 常量配置
  - pages 页面
  - routes 路由配置
  - api 接口
  - store vuex 全局数据
  - styles 全局样式
  - urils 工具函数

### 构建

- npm install 或 yarn 安装开发包。
- npm run dev 开发环境。
- npm run build 构建代码, 构建结果在 dist/目录下。

### 部署

- 容器化根据域名自动切换不同环境.

### 测试环境

程序入口: tms.t.dingdongxiaoqu.com

### 生产环境

程序入口: https://tms.ddxq.mobi/

### nginx 配置

```
    location /{
        try_files $uri $uri /index.html ;
    }

```

### 开发环境

```
host:
    127.0.0.1 tms.d.dingdongxiaoqu.com


启动:
    npm run dev
```

### 前端静态资源处理

生产环境构建后，静态文件自动上传 cdn，[文档参考](https://cfl.corp.100.me/pages/viewpage.action?pageId=10919777)
