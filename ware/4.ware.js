import  React from 'react';
import  ReactDom from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';//引入中间件
import logger from  'redux-logger';//引入中间件
let initState={
    loading:'',//加载状态，默认为空，开始加载变成加载中，加载完成后变成空
    data:'',  //实际后台返回的数据，默认空，加载完成后，或者显示加载成功，或者显示加载失败
    error:''  //
};
// 定义action动作
const FETCH_START='FETCH_START';//开始加载; loading=加载中 data=‘’
const FETCH_SUCCESS='FETCH_SUCCESS';//加载成功； loading=‘’ data=真实的值
const FETCH_ERROR='FETCH_ERROR';//加载失败；
let reducer =(state=initState,action)=>{
       switch (action.type){
           case FETCH_START:
               return{loading:'加载中...',data:'',error:''};
           case FETCH_SUCCESS:
               return{loading:'',data:action.payload,error:''};
           case FETCH_ERROR:
               return{loading:'',data:'',error:action.payload};
           default:
               return state;
       }
};
let store= createStore(reducer,applyMiddleware(thunk,logger));
class Panel extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }
    handleClick=()=>{
      store.dispatch(function (dispatch) {
          dispatch({type:FETCH_START});
          setTimeout(()=>{
             if(Math.random()>0.5){
                 dispatch({type:FETCH_SUCCESS,payload:'成功'});
             }else {
                 dispatch({type:FETCH_ERROR,payload:'失败'});
             }
          },2000)
      })
    };
    render(){
        let {loading,data,error}=store.getState();
        return(
            <div>
                <p>
                    {loading}
                    {data}
                    {error}
                </p>
                <button onClick={this.handleClick}>加载数据</button>
            </div>
        )
    }
}
ReactDom.render(<Panel/>,document.querySelector('#root'));