/* 每个页面对应一个reducer*/
import  * as types from '../action-types'
let initState={
    lesson:0 , // 当前课程ID
    sliders:'',
    lessons: { //存放课程列表
        loading:'', //加载状态  加载中。。。。。
        hasMore:true,//后面是否有更多
        list:[] ,//存放课程的数组
        offset:0,   // 偏移量
        limit:5   // 每页的条数
    }
};
export default  function (state=initState,action) {
    //每个action必须把携带的数据放在payload里，并且是一个对象
    switch (action.type){//判断 动作类型
        case types.SET_LESSON:
            return{
                ...state,
                lesson:action.payload.id};
            break;
        case types.FETCH_SLIDERS:
            return {
                ...state,
                sliders:action.payload.sliders};
        case types.FETCH_LESSONS:
            return{
                ...state,
                lessons:{
                    ...state.lessons,
                    loading:'加载中'
                }
            };
        case types.FETCH_LESSONS_FINISH:
            return{
                ...state,
                lessons:{
                    ...state.lessons,
                    loading:'',
                    hasMore:action.payload.hasMore,
                    list:[...state.lessons.list,...action.payload.list],
                    //偏移量是当前偏移量加上返回的条数
                    offset:state.lessons.offset+ action.payload.list.length,
                    // limit:action.payload.limit
                }
            };
        case types.FETCH_LESSONS_REFRESH:
            return{
                ...state,
                lessons:{
                    ...state.lessons,
                    loading:'',
                    hasMore:action.payload.hasMore,
                    list:action.payload.list,
                    offset:0+action.payload.list.length
                }
            };
        default:
            return state
    }
}