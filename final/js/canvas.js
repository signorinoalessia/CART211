/* REFERENCES:
for jQuery: https://stackoverflow.com/questions/32568635/how-do-i-change-div-text-using-array-values-with-javascript
pixelate ref: https://codepen.io/lawrencealan/pen/nJgqA
http://svg.dabbles.info/snaptut-dragscale
https://www.smashingmagazine.com/2018/05/svg-interaction-pointer-events-property/
https://forum.jquery.com/topic/clone-svg-elements
https://stackoverflow.com/questions/36926734/random-position-multiple-images */

// AUDIO - bypassing autoplay prevention on chrome
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
   if(!isChrome){
     $('#iframeAudio').remove()
   }
 else{
    $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background
 }

window.onload = function(){
  console.clear();
  var holder = document.getElementById('js-holder');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = 'multiply';
  var Video = document.getElementById('myVid');
  var bgVideos;
  var videoLength = 3;
  var bgVideos = new Array();

  //array of messages to be displayed in #3
  let messages = [
    "Hello is anyone there?",
    "Hacking, cloning and copying are key elements of net art.",
    "The ability to fabricate a new identity does not have to be constrained to be a facsimile of the physical person standing being their interface.",
    "I am a vessel of identity, can you guess my race and gender?",
    "I don't need a physical body anymore.",
    "Packets of memories inside of other vessels suffice to convey who I am.",
    "Nothing is anonymous really.",
    "I changed my mind, let me out!!!!",
    "Anonymity is a promised pillar of network communities, for the better or the worse.",
    "00010000100010010111010101010101001001000011100011100010111",
    "A/S/L? A/S/L? A/S/L?"
  ];

  // random for colors (and eventually images/videos)
  let random = function(min,max){
    let rand = min + Math.random()*(max+1-min);
    rand = rand^0;
    return rand;
  };

  // function hideFunction(){
  //   document.getElementById("display_me").style.opacity = 0;
  // }

// RESIZE EVENT LISTENER
  window.addEventListener('resize',function(){

    // #1) change color of background
    holder.style.backgroundColor = 'rgba('+random(0,255)+','+random(0,255)+','+random(0,255)+','+0.4+')';
    holder.style.height = "100vh";
	  //console.log(holder.style.backgroundColor);

    //#2 cycle through array and modify text with jQuery
	  (function($) {
      $(function() {

          counter =  messages.length - 1,
          previousText = $("#p1"),
          msgLength =  messages.length - 1;

        function display_messages() {
          if (counter === msgLength) {
              counter = 0;
          }
          else {
              counter++;
          }
          previousText.html(messages[counter]);
        }

        display_messages();

        setInterval(function() {
          display_messages();
        }, 4000);
      });

    })(jQuery);

  }); //end eventListener

  //#3) instantiate body part when mouse over, click to drag in window
  // for bouncing body parts, parent needs to be relative (container) so pos recenters
  // associative array with key value pairs. ID is linked to SVG file name AND in the class of the SVG (index)
  let countArray = { "hand":0, "thigh":0, "neck":0, "arm":0, "torso":0, "neck":0, "calf":0, "foot":0, "head":0 };
  let human = document.getElementById("human");
  //console.log(countArray["hand"]);
  //countArray.push(obj);
  human.addEventListener("click",function(){
    //console.log("human clicked");
  });

  //let i = 0;
  //let count =1;

$(".hp").click(function(){
  console.log(this.className.baseVal);
  //let split =this.className.baseVal.split(" ")
  //console.log(split[0]);
  console.log(this.id);
  let imagePath = 'images/'+this.id+'.svg';

  let c = countArray[this.id];
  c++;
  countArray[this.id]=c;
  //count++;

  //$("body").after("<img src='"+imagePath+"' class='" + this.id+countArray[this.id]+ "' >");
  $("body").after("<img src='"+imagePath+"' class='test " + this.id+countArray[this.id]+ "' >");
  //let windowWidth = canvas.offsetWidth- this.width;
  //  let randPosX = Math.floor((Math.random() * canvas.offsetWidth)-this.width);

  let randPosX = Math.floor((Math.random() * canvas.offsetWidth));
  let randPosY = Math.floor((Math.random() * canvas.offsetHeight));

  console.log(canvas.offsetWidth);
  console.log(canvas.offsetHeight);

  $("."+this.id+countArray[this.id]).css({"position":"absolute"});
  $("."+this.id+countArray[this.id]).css('left', randPosX);
  $("."+this.id+countArray[this.id]).css('top', randPosY);
 //let temp = document.getElementsByClassName("");
 console.log($(".test"));

var list = document.getElementsByClassName("test");
// for(let i =0; i<list.length;i++){
//   console.log(i);
//   let t = list[i];
//   t.addEventListener("click",function(){
//
//      console.log("test");
//       //$(this).css('left',300);
//     });
// }
for (let i = 0; i < list.length; i++) {
	     list[i].addEventListener('mouseover', function (event) {
		       console.log('hovered body part');
          $(list[i]).css('left', randPosX+10)
          $(list[i]).css('top', randPosY+10)
        }, false);
         }



  console.log("BODY PART: "+this.id+countArray[this.id]);
}); //end of click function

$(".popupContainer").click(function(){
  console.log("holder clicked");
  // $("p").append(p1);
  // $("p").append("< 'id='p1>");
  //document.getElementById('p1') = para;
  loopingText = $("#p1");
//$("body").append(loopingText);
$(loopingText).append(loopingText);
});

// let c = countArray[this.id];
// c++;
// countArray[this.id]=c;
//console.log(this);

// $(".hp").hover(function(){
//$("body").hover(function() {
//$("."+this.id+countArray[this.id]).hover(function(){
// $("this").hover(function() {

$("img").on("mouseover",function(){
  console.log("hover");
  $("this").css('left',300);
  console.log("THIS"+this);
  // let c = countArray[this.id];
  // c++;
  // countArray[this.id]=c;

  // $("."+this.id+countArray[this.id]).css({"position":"absolute"});
  // $("."+this.id+countArray[this.id]).css('left', randPosX);
  // $("."+this.id+countArray[this.id]).css('top', randPosY);

}); //end of hover function

}; // end onLoad


// if (this.className.baseVal == "st3 hp") {
//   //if (this.className.baseVal == "hp") {
//   //if ((this.className.baseVal == "st5 hp") || (this.className.baseVal == "st3 hp")) {
//     //for (let i=0;i<10;i++){
//       i++;
//       let count = "genHand"+i;
//       console.log(count);
//
//       $("body").after("<img src='"+imagePath+"' class='" + count+ "' >");
//
    // let randPosX = Math.floor((Math.random() * canvas.offsetWidth));
    // //let randPosX = Math.floor((Math.random() *holder.width));
    // console.log(canvas.offsetWidth);
    // console.log(canvas.offsetHeight);
    // //let randPosY = Math.floor((Math.random() * holder.height));
    // let randPosY = Math.floor((Math.random() * canvas.offsetHeight));
    // $("."+count).css({"position":"absolute"});
    // $("."+count).css('left', randPosX);
    // $("."+count).css('top', randPosY);
//     console.log("count:"+count);
//     // console.log(genHand.css.left);
//     // console.log(.genHand.css.top);
//   }
//  }
// }); //end of click function


//to make elements move away from mouse (repelled), every single body part needs to be manually positioned

// var snap = Snap("#human");
// circle1.drag(move1, start, stop );
//
// let clickedBodyPart = [];
// clickedBodyPart = [ {st0,st1,st2,st3,st4,st5}];
//
// getElementById
//
// function clickEvent(clickedBodyPart[i]){
//   for (let i=0; i<clickedBodyPart.length; i++) {
//     console.log()
//   }
// }

//} //end
