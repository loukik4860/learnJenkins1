var buttons=document.getElementById('btn');
var counter=0;
var interval;
var t=0;
buttons.addEventListener('click',function(){
  var inputt=document.getElementById('input-type');
  var x=inputt.value;
  var showNumbers=document.getElementById('small');
   // showNumbers.innerText=x;
   interval=setInterval(print,1000,showNumbers,x);
});

function print(showNumbers,x){
  t++;
  showNumbers.innerText=t;
  if(t>=x){
    clearInterval(interval);
    return;
  }
    // for(let y=0;y<x;){
    //   if(y>x){
    //     clearInterval(interval);
    //     return;
    //   }
    //   y++;
    //   console.log(y);
    //   showNumbers.innerText=y;
    // }
}
