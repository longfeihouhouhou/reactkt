export function upMore(element,callback) {
    let timerId;
    element.addEventListener('scroll',function () {
        if(timerId)clearTimeout(timerId);
        timerId=setTimeout(function () {
            let scrollTop = element.scrollTop;//向上卷去的高度
            let clientHeight=element.clientHeight;//可视区域的高度
            let scrollHeight= element.scrollHeight ;//内容的高度
            if(clientHeight+scrollTop+10>scrollHeight){
                callback()
            }
        },80)

    })

}
export function downRefresh(element,callback) {
    element.addEventListener('touchstart',touchStart);
    let startY;// 开始触摸的纵坐标
    let distance; //移动的距离
    let initTop=element.offsetTop;
    function touchStart(event) {
        if(element.offsetTop== initTop && element.scrollTop==0){
            startY=event.targetTouches[0].pageY; //初始值
            element.addEventListener('touchmove',touchMove);
            element.addEventListener('touchend',touchEnd);
        }
        function touchMove(e) {
            let pageY = e.targetTouches[0].pageY;
            if(pageY>startY){// 下拉
                distance = pageY -startY;
                element.style.top=initTop+distance+'px'

            }else{//上啦移除监听
                element.removeEventListener('touchmove',touchMove);
                element.removeEventListener('touchend',touchEnd)
            }
        }
        function touchEnd(e) {
            element.removeEventListener('touchmove',touchMove);
            element.removeEventListener('touchend',touchEnd)      ;
            let timerId=setInterval(function () {
                if(element.offsetTop<=initTop){
                    element.style.top=initTop+'px';
                    clearInterval(timerId)
                }else{
                    element.style.top=element.offsetTop - 1 +'px';
                }
            },1);
            if(distance>50){
                callback();
            }
        }
    }
}