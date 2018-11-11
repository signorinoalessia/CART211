console.clear();
holder = document.getElementById('js-holder');
console.log("hello, inside js file");

window.addEventListener('resize',function(){
  holder.style.background = 'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';
  console.log("hi again, inside event listener");
});

var random = function(min,max){
  var rand = min + Math.random()*(max+1-min);
  rand = rand^0;
  return rand;
}
