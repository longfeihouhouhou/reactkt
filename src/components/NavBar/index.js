import React,{Component} from 'react';
import './index.less'
export default class NavBar extends Component{
    render(){
        return (
            <div className="NavBar">
                {this.props.title}
                <i className="iconfont icon-fanhui"> </i>
            </div>
        )
    }
}
