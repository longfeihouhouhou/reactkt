import React,{Component} from 'react'
import './index.less'
import {
    HashRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'
import Home from '../Home/index';
import Courses from '../Courses/index';
import Profile from '../Profile/index';
import Login from '../Login/index'
import Signup from '../Signup/index'
import Tab from "../../components/Tab/index";
import  createHistory from 'history/createHashHistory'
const history =createHistory();//用来管理路由历史
import {ConnectedRouter} from 'react-router-redux'

export default class App extends Component{
    render(){
        return(
            <ConnectedRouter history={history}>
                <div  style={{height:'100%'}}>
                    <Route exact path="/" component={Home}/>
                    <Route       path="/courses" component={Courses}/>
                    <Route       path="/profile" component={Profile} />
                    <Route       path="/login" component={Login} />
                    <Route       path="/signup" component={Signup} />
                    <Tab/>
                    
                </div>
            </ConnectedRouter>

        )
    }
}
