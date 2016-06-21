//添加事件
function addevent(element,type,handler){
  if (element.addEventListener) {
    element.addEventListener(type,handler,false);
  } else{
    element.attachEvent('on'+type,handler);
  };
}
//getclass
function getByClass(clsName,parent){
  var oParent=parent?document.getElementById(parent):document,
      eles=[],
      elements=oParent.getElementsByTagName('*');

  for(var i=0,l=elements.length;i<l;i++){
    if(elements[i].className==clsName){
      eles.push(elements[i]);
    }
  }
  return eles;
}

window.onload=drag;

function drag(){
  //关闭
  var oClose=document.getElementById('close-btn');
   addevent(oClose,"click",function(){document.getElementById('login-zone').style.display='none';})
  // 拖拽
  var oZone=getByClass("login-qq")[0];
  oZone.onmousedown=fnDown;
  function fnDown(event){
      event=event || window.event;
      var oDrag=document.getElementById('login-zone'),
            disx= event.clientX-oDrag.offsetLeft,
            disy=event.clientY-oDrag.offsetTop;
      document.onmousemove=function(event){
        event=event || window.event;
        fnMove(event,disx,disy)
      }
      document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;
      }
  }
  function fnMove(e,posx,posy){
    var oDrag=document.getElementById("login-zone"),
        l=e.clientX-posx,
        t=e.clientY-posy,
    winW=document.documentElement.clientWidth || document.body.clientWidth,
    winH=document.documentElement.clientHeight || document.body.clientHeight,
    maxW=winW-oDrag.offsetWidth-10,
    maxH=winH-oDrag.offsetHeight;
    if(l<0){
      l=0;
    }else if(l>maxW){
        l=maxW;
    }
    if(t<0){
         t=10;
    }else if(t>maxH){
          t=maxH;
    }
    oDrag.style.left=l+'px';
    oDrag.style.top=t+'px';
  }
}

