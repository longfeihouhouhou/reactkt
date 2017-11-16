const HOST='http://localhost:3000';
//后台的URL地址是3000的端口
export function get(url) {
   return fetch(HOST+url,{//返回一个promise ，resolve之后会传入响应体，就是轮播图数组
       method:'GET',
       //客户跨域请求服务器的要携带cookie
       "credential":"include",
       headers:{
           //需要服务器返回JSON格式的数据
           "Accept":"application/json",
       }//res是一个响应对象，调用json方法可获取json格式的响应体
    }).then(res=>res.json());
}
//像服务器发送post请求
export function post(url,data) {
   return fetch(HOST+url,{
        method:"POST",
        credentials:'include',
        headers:{
            "Accept":"application/json",//用来指定客户端能够接受的响应体类型
            "Content-Type":"application/json" //内容类型
        },
        body:JSON.stringify(data)
    }).then(res=>res.json())
}