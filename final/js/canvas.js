window.onload = function(){
  console.clear();
  holder = document.getElementById('js-holder');

  //array of messages to be displayed in #2
  let messages = [
    "0 Hello is anyone there?",
    "1 Hacking, cloning and copying are key elements of net art.",
    "The ability to fabricate a new identity does not have to be constrained to be a facsimile of the physical person standing being their interface.",
    "2 I am a vessel of identity, can you guess my race and gender?",
    "3 I don't need a physical body anymore.",
    "4 Packets of memories inside of other vessels suffice to convey who I am.",
    "5 Nothing is anonymous really."
  ];

  // random for colors (and eventually images/videos)
  let random = function(min,max){
    let rand = min + Math.random()*(max+1-min);
    rand = rand^0;
    return rand;
  }

// RESIZE EVENT LISTENER
  window.addEventListener('resize',function(){
    // #1 change color of background
    holder.style.background = 'rgba('+random(0,255)+','+random(0,255)+','+random(0,255)+','+random(0.8,1)+')';

    // #2 cycle through array and modify text with jQuery
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
        }, 3000);
      });
    })(jQuery);

/* TRY WITH INNER HTML */
    // for (let i=0;i<messages.length;i++) {
    //   document.getElementById('p1').innerHTML = messages[i];
    //   console.log(messages[i]);

      // key = i % msgLength;
      // console.log("key:"+key);
      // // document.getElementById('p1').innerHTML = messages[key];
      // let str = document.getElementById('p1').innerHTML;
      // console.log("STRING:"+str);
      // let res = str.replace(key);
      // console.log("REPLACED"+str);
      // console.log(res);
      // document.getElementById('p1').innerHTML = res;
      // console.log(messages[key]);
    // }

  }); //end eventListener

} // end onLoad
