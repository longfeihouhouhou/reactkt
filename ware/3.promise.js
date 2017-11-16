let redux = require('redux');
let {createStore,applyMiddleware}= redux;
import logger from  'redux-logger'
import  thunk from  'redux-thunk'
import  promise from 'redux-promise'
let initState={number:0};
let reducer = (state=initState,action)=>{
    switch (action.type){
        case "ADD":
            return{number:state.number+1};
        default:
            return state;
    }
};
let store =createStore(reducer,applyMiddleware(thunk,promise,logger));
// store.dispatch(
//     new Promise(function (resolve,reject) {
//         setTimeout(()=>{
//             resolve({type:'ADD'})
//        },3000)
//     })
// );
store.dispatch({
    type:'ADD',
    payload:new Promise(function (resolve,reject) {
        setTimeout(()=>{
            resolve('ok')
        },3000)
    })
});