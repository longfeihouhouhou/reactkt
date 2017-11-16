import React,{Component} from 'react';
import './index.less';
export default class Lessons extends Component{
    render(){
        return (
            <div>
                <div className="lesson-list">
                    <div className="lesson-title">
                        <i className="iconfont icon-book"></i>
                        <span>全部课程</span>
                    </div>
                    {
                        this.props.lessons.list.map((item,index)=>(
                            <div className="lesson" key={index}>
                                <img src={item.url} alt=""/>
                                <p>{item.title}</p>
                                <p className="price">{item.price}</p>
                            </div>
                        ))
                    }
                    <div className="load-status" onClick={()=>this.props.getLessons()}>

                        {   this.props.lessons.loading?'加载中':
                            this.props.lessons.hasMore?"加载更多":"别扯了，我是由底线的！"}
                    </div>
                </div>
            </div>
        )
    }
}
