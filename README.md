# 初始化项目
```$xslt
npm init -y
```
#依赖模块
## 后端依赖
```npm install body-parser connect-mongo ejs express-session mongoose -s
```
## 前端依赖
```$xslt
npm install es6-promise history react react-dom react-redux react-router-dom react-router-redux react-swiper react-transition-group redux redux-thunk swipe-js-iso whatwg-fetch -s
```
## 开发依赖模块
```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 css-loader file-loader html-webpack-plugin less less-loader style-loader webpack webpack-dev-server html-webpack-plugin -D
```
# 目录划分
容器组件、智能组件、聪明组件
一般有自己的状态,一般会对应于一个页面，页面级组件
## 组件
UI组件、傻瓜组件、木偶组件
只提供UI，没有状态
别的组件让显示他就是显示


## 如何使用redux
1.后台写一个后台接口
2 前台 （api）里写一个获取接口数据的方法
5 在reducer

