console.clear();
holder = document.getElementById('js-holder');

holder.addEventListener('onresize',function(){
  holder.style.background = 'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';
  console.log("Hello I'm inside the js file");
});

var random = function(min,max){
  var rand = min + Math.random()*(max+1-min);
  rand = rand^0;
  return rand;
}
