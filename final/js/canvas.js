// Ref for jQuery: https://stackoverflow.com/questions/32568635/how-do-i-change-div-text-using-array-values-with-javascript
// pixelate ref: https://codepen.io/lawrencealan/pen/nJgqA

window.onload = function(){
  console.clear();
  var holder = document.getElementById('js-holder');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = 'multiply';
  var Video = document.getElementById('myVid');
  var bgVideos;
  var videoLength = 3;

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

  // array of images for changing bg in #2
 /*var bgImages = new Array();
 bgImages[0] = new Image();
 bgImages[0].src = 'images/bg1.jpg';
 bgImages[1] = new Image();
 bgImages[1].src = 'images/bg2.jpg';
 bgImages[2] = new Image();
 bgImages[2].src = 'images/bg3.jpg';*/

// videos test
  var bgVideos = new Array();
  // bgVideos[0] = new Video();
  // bgVideos[0].src = 'videos/bg1.mp4';
  // bgVideos[1] = new Video();
  // bgVideos[1].src = 'videos/bg2.mp4';

  // bgVideos[0] = document.createElement("VIDEO");
  // bgVideos[0].setAttribute("src","videos/bg1.mp4");
  // bgVideos[1] = document.createElement("VIDEO");
  // bgVideos[1].setAttribute("src","videos/bg2.mp4");
  // bgVideos[2] = document.createElement("VIDEO");
  // bgVideos[2].setAttribute("src","videos/bg3.mp4");

// loop 3 videos
  for (let i=0;i<videoLength;i++) {
    //bgVideos[i] = new Video();
    // bgVideos[i].src = 'videos/bg'+[i+1]+'.mp4';

    bgVideos[i] = document.createElement("VIDEO");
    // bgVideos[i].setAttribute("src","videos/bg2.mp4");
    bgVideos[i].setAttribute("src",'videos/bg'+[i+1]+'.mp4');
  }

  // random for colors (and eventually images/videos)
  let random = function(min,max){
    let rand = min + Math.random()*(max+1-min);
    rand = rand^0;
    return rand;
  };

// RESIZE EVENT LISTENER
  window.addEventListener('resize',function(){
//	  console.log("good version");
    // #1 change color of background
    holder.style.backgroundColor = 'rgba('+random(0,255)+','+random(0,255)+','+random(0,255)+','+0.4+')';
	  //console.log(holder.style.backgroundColor);


    // #2 change background (images/videos)
    /* canvas.style.background = bgImages[random(0,2)];
    document.getElementById('bng').src = 'images/bg'+random(1,3)+'.jpg'; */

    //holder.style.backgroundImage = "url(images/bg1.jpg)"; //to throw away

    // canvas.style.background = bgVideos[random(0,2)];
    document.getElementById('myVidSrc').src = 'videos/bg'+random(1,3)+'.mp4';
    console.log(myVidSrc);

    //#3 cycle through array and modify text with jQuery
   // window.onload = function() {
	(function($) {
      $(function() {

          counter =  messages.length - 1,
          previousText = $("#p1"),
          msgLength =  messages.length - 1;

        function display_skills() {
          if (counter === msgLength) {
              counter = 0;
          }
          else {
              counter++;
          }
          previousText.html(messages[counter]);
        }

        display_skills();

        setInterval(function() {
          display_skills();
        }, 4000);
      });

    })(jQuery);

  }); //end eventListener

  //#4) intstantiate itself when mouse over, click to drag in window

  // for bouncing body parts, parent needs to be relative (container)
  // so position recenters
  // floating effects of body parts, jquery ui drag and drop

  let human = document.getElementById("human");
  human.addEventListener("click",function(){
    console.log("human clicked");
  });

  human.addEventListener('mousedown', startDrag);
  human.addEventListener('mousemove', drag);
  human.addEventListener('mouseup', endDrag);
  human.addEventListener('mouseleave', endDrag);
  human.addEventListener('touchstart', startDrag);
  human.addEventListener('touchmove', drag);
  human.addEventListener('touchend', endDrag);
  human.addEventListener('touchleave', endDrag);
  human.addEventListener('touchcancel', endDrag);

//https://www.smashingmagazine.com/2018/05/svg-interaction-pointer-events-property/
// http://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/




}; // end onLoad
