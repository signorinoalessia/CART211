window.onload = function(){
  let messages = [
    "Hello is anyone there?",
    "Hacking, cloning and copying are key elements of net art.",
    "The ability to fabricate a new identity does not have to be constrained to be a facsimile of the physical person standing being their interface.",
    "I am a vessel of identity, can you guess my race and gender?",
    "I don't need a physical body anymore.",
    "Packets of memories inside of other vessels suffice to convey who I am.",
    "Nothing is anonymous really."
  ];
  let msgLength = messages.length;
  // let messageContents;

  console.clear();
  holder = document.getElementById('js-holder');

// RESIZE EVENT LISTENER
  window.addEventListener('resize',function(){
    // 1.) change color of background
    holder.style.background = 'rgba('+random(0,255)+','+random(0,255)+','+random(0,255)+','+random(0.8,1)+')';


    // 2.) cycle through array and modify text
  for (let i=0;i<msgLength;i++) {
    //console.log(messages[i]);
    // messageContents += messages[i];
    key = i % msgLength;
    document.getElementById('p1').innerHTML = messages[key];
    console.log(messages[key]);
  }
  // document.getElementById('p1').innerHTML = messageContents;


  }); //end of event Listener

  var random = function(min,max){
    var rand = min + Math.random()*(max+1-min);
    rand = rand^0;
    return rand;
  }
}
