
import React, {Component} from 'react';
import './index.less'
import logo from '../../../images/logo.png';
import{TransitionGroup,CSSTransition} from 'react-transition-group'
export default class HomeHeader extends Component {
    constructor(){
        super();
        this.state={isShow:false}
    }
    getMenuList=()=>(
       <CSSTransition timeout={1000} classNames="fade">
           <ul
               onClick={event=>{
                   this.props.setLesson(event.target.dataset.id);
                   this.setState({isShow:false})}
                    }
               className="menu-list">
               <li className={this.props.lesson==='1'?'active':""} data-id="1">Node课程培训</li>
               <li className={this.props.lesson==='2'?'active':""} data-id="2">HTML培训课程</li>
               <li className={this.props.lesson==='3'?'active':""} data-id="3">视频课程</li>
               <li className={this.props.lesson==='4'?'active':""} data-id="4">文档课件</li>
           </ul>
       </CSSTransition>
    );
    render() {

        return (
            <div className="home-header">
                <div className="home-logo">
                    <img src={logo}/>
                    <div onClick={()=>this.setState({isShow:!this.state.isShow})}>
                        {
                            this.state.isShow?
                            <i className="iconfont icon-guanbi"/>:
                            <i className="iconfont icon-uilist"/>}
                    </div>
                </div>
                <TransitionGroup>
                    {this.state.isShow?this.getMenuList():null}
                </TransitionGroup>
            </div>
        )
    }
}