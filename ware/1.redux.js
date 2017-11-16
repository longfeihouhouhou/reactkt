//import {createStore} from 'redux';
let redux = require('redux');
let initState={number:0};
let reducer = (state=initState,action)=>{
  switch (action.type){
      case "ADD":
          return{number:state.number+1};
      default:
          return state;
  }
};
let store =redux.createStore(reducer);
let next=store.dispatch;
store.dispatch=function (action) {
    console.log('老状态',store.getState());
    next();
    console.log('新状态',store.getState());
}
console.log(store.getState());
store.dispatch({type:'ADD'});