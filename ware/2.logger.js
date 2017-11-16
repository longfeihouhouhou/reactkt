let redux = require('redux');
let {createStore,applyMiddleware}= redux;
import logger from  'redux-logger'
import  thunk from  'redux-thunk'
let initState={number:0};
let reducer = (state=initState,action)=>{
    switch (action.type){
        case "ADD":
            return{number:state.number+1};
        default:
            return state;
    }
};
let store =createStore(reducer,applyMiddleware(logger,thunk));
//store.dispatch({type:'ADD'});
//现在只需要让派发action的时候让函数立刻执行，三秒之后在传递真正的action
// uncaught Error: Actions must be plain objects. Use custom middleware for async actions.
// action 必须是单纯的对象，如果使用异步操作，必须使用自定义的中间件
//thunk中间件可以派发函数的 action
store.dispatch(function (dispatch) {
    setTimeout(()=>{
        dispatch({type:'ADD'})
    },3000)
});