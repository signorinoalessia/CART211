// Ref for jQuery: https://stackoverflow.com/questions/32568635/how-do-i-change-div-text-using-array-values-with-javascript
// pixelate ref: https://codepen.io/lawrencealan/pen/nJgqA
// http://jsfiddle.net/dvcx3mgt/7/

// let snap = Snap("#test");
// let path = "images/hand.svg";
// let times = 10;
//
// Snap.load(path, (img) => {
//   let el = img/select("g");
//   snap.append(el);
//   moveIt(el);
//   for(let i=0;i<10;)
// })


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

// RESIZE EVENT LISTENER
  window.addEventListener('resize',function(){

    // #1) change color of background
    holder.style.backgroundColor = 'rgba('+random(0,255)+','+random(0,255)+','+random(0,255)+','+0.4+')';
    holder.style.height = "100vh";
	  //console.log(holder.style.backgroundColor);


    // #2) change background (loop 3 videos)
    // for (let i=0;i<videoLength;i++) {
    //   //bgVideos[i] = new Video();
    //   // bgVideos[i].src = 'videos/bg'+[i+1]+'.mp4';
    //   bgVideos[i] = document.createElement("VIDEO");
    //   bgVideos[i].setAttribute("src",'videos/bg'+[i+1]+'.mp4');
    //   // bgVideos[i].setAttribute("src","videos/bg2.mp4");
    // }

    // canvas.style.background = bgVideos[random(0,2)];
    // document.getElementById('myVidSrc').src = 'videos/bg'+random(1,3)+'.mp4';
    // console.log(myVidSrc);

    //#3 cycle through array and modify text with jQuery (NOT MY CODE: stackoverflow example)
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

  //#4) instantiate itself when mouse over, click to drag in window

  // for bouncing body parts, parent needs to be relative (container)
  // so position recenters
  // floating effects of body parts, jquery ui drag and drop

  let human = document.getElementById("human");
  human.addEventListener("click",function(){
    console.log("human clicked");
  });



//#4) style css position at random w/ jquery
// Ref: https://stackoverflow.com/questions/36926734/random-position-multiple-images)


  let i = 0;

$(".hp").click(function(){
  console.log(this.className.baseVal);
  if (this.className.baseVal == "st5 hp") {
    //for (let i=0;i<10;i++){
      i++;
      let count = "genHand"+i;
      console.log(count);

      $("body").after("<img src='images/hand.svg' class='" + count+ "' >");

    let randPosX = Math.floor((Math.random() * canvas.width));
    //let randPosX = Math.floor((Math.random() *holder.width));
    console.log(canvas.width);
    console.log(canvas.height);
    //let randPosY = Math.floor((Math.random() * holder.height));
     let randPosY = Math.floor((Math.random() * canvas.height));
    $("."+count).css({"position":"absolute"});
    $("."+count).css('left', randPosX);
    $("."+count).css('top', randPosY);
    console.log("count:"+count);
    // console.log(genHand.css.left);
    // console.log(.genHand.css.top);
  }
//  }
}); //end of click function


//http://svg.dabbles.info/snaptut-dragscale <----
//https://forum.jquery.com/topic/clone-svg-elements

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


//https://www.smashingmagazine.com/2018/05/svg-interaction-pointer-events-property/
// http://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/

//to make elements move away from mouse (repelled), every single body part needs to be manually positioned


}; // end onLoad
