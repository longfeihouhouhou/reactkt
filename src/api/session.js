import {get,post} from './index';
//注册
export function signUp(data) {
    return post('/signup',data)
}
//登录 前台接口
export function login(data) {
    return post('/login',data)
}
//
export function  validate() {
    return get('/validate')
}