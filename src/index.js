import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import App from './containers/App/index'
import  store from './store/index'
import {Provider} from 'react-redux'
ReactDOM.render(
    //provider用来向子组件传递store仓库
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.querySelector('#root'));