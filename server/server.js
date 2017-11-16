let express = require('express');
let app = express();
let sliders= require('./mock/slider');
let bodyParser= require('body-parser');
let session =require('express-session');
app.use(bodyParser.json());
app.use(session({
    resave:true,// 每次访问都重新保存session
    saveUninitialized:true, //保存未初始化的session
    secret:'zfpx' // 密钥
}));
let users=[];
app.use(function (req,res,next) {
    res.header('Access-Control-Allow-Origin','http://localhost:8080');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    if(req.method == 'OPTIONS'){
        res.end();
    }else {
        next();
    }

});
app.listen(3000);
app.get('/sliders',function (req,res) {//获取轮播图列表
    res.json(sliders);
});
let lessons = require('./mock/lessons');
app.get('/lessons',function (req,res) {//获取课程列表
    let cloneLessons=JSON.parse(JSON.stringify(lessons));
    let {offset=0,limit=5}=req.query;
    for(let i=0;i<cloneLessons.list.length;i++){
        let lesson = cloneLessons.list[i];
        lesson.title=`${+offset+i+1}-${lesson.title}`
    }
    if(offset==10){
        cloneLessons.hasMore = false
    }
    setTimeout(function () {
        res.json(cloneLessons);
    },3000)
});
app.post('/signup',function (req,res) {
    let user=req.body;
    let oldUser=users.find(item=>item.username==user.username);
    if(oldUser){//如果有值 意味此用户名被占用
        res.json({code:1,error:'用户名已被占用！'})
    }else{
        users.push(user);
        res.json({code:0,error:'用户注册成功'})
    }

});
app.post('/login',function (req,res) {
    let user=req.body;//得到请求体
    let oldUser=users.find(item=>item.username===user.username && item.password=== user.password);
    if(oldUser){//
        req.session.user = user;//把登录成功的对象写入session  express-session
        res.json({code:0,success:'恭喜你，登录成功！',user})
    }else{
        res.json({code:1,error:'用户或密码错误'})
    }
});
//当应用初始化的时候，会向后台发送一个请求，询问当前用户是否登录，如果登录的话则返回登录的用户，并存放在仓库里
app.get('/validate',function (req,res) {
        if(req.session.user){
            res.json({code:0,user:req.session.user})
        }else{
            res.json({code:1});
        }
});
