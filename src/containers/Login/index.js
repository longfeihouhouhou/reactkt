import './index.less'
import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/index';
import actions from '../../store/actions/session';
import  {connect} from 'react-redux';
import Message from "../../components/message/index";
class Login extends Component{
    login=()=>{
        let username= this.username.value;
        let password= this.password.value;
        this.props.login({username,password})
    };
    render(){
        return(
            <div className="login-panel">
                <NavBar title="登录"/>
                <div className="login-log">
                    <img src={require('../../images/profile.png')} />
                </div>
                <input ref={input=>this.username=input} type="text" placeholder="用户名"/>
                <input ref={input=>this.password=input} type="text" placeholder="密码"/>
                <Link to="/signup">注册</Link>
                <div
                    onClick={this.login}
                    className="login-button">登&nbsp;录</div>
                <Message {...this.props}/>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions
)(Login)
