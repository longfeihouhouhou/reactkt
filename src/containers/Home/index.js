import React,{Component} from 'react';
import './index.less'
import HomeHeader from './HomeHeader/index';
import  {connect} from 'react-redux';
import actions from '../../store/actions/home';
import Slider from './slider/index';
import Lessons from './Lessons/index';
import {upMore,downRefresh} from "../../utils";
class Home extends Component{
    componentDidMount(){
        if(this.props.sliders.length==0){
            this.props.getSliders();
            this.props.getLessons();
        }
        upMore(this.refs.content,this.props.getLessons);
        downRefresh(this.refs.content,this.props.refresh )
    }
    render(){
        return (
            <div className="home">
                <HomeHeader
                    setLesson={this.props.setLesson}
                    lesson={this.props.lesson}
                />
                <div className="main-content" ref="content">
                    <Slider sliders={this.props.sliders}/>
                    <Lessons lessons={this.props.lessons}  getLessons={this.props.getLessons} />
                </div>
            </div>
        )
    }
}//actions 是action的创建器
export  default connect(
    state=>state.home,
    actions
)(Home)