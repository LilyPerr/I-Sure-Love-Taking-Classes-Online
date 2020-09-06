//returns a random number between min (included) and max (excluded), from w3schools
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//returns a random funny string to be the first half of your sentence
function getFunnyString(){
  var words = ["When you've just rolled out of bed",
  "When you've finally finished your first cup of coffee",
  "When you're not wearing pjs anymore",
  "When your microphone FINALLY works",
  "When your internet isn't choppy",
  "When you have clothes on",
  "When you're sure that your camera is off",
  "When you finished gathering all of your snacks",
  "When you made sure to turn off your mic",
  "When your glass of water is half full",
  "When you have no background noise"];
  var num = getRndInteger(0, words.length);
  var funny = words[num];
  return funny;
 }
 
 
 //returns the full sentence to display
 function getFullSentence(){
  return getFunnyString() + ", click Open Zoom Meetings.";
 }

function setMessage() {
   document.getElementById("message").innerHTML = getFullSentence(); 
}

function privacyLink() {
  alert("Shhhh! Who even reads these?!");
}

function launchMeetingLink() {
  alert("You totally just woke up didn't you?");
}

function downloadLink() {
  alert("It's been months, how do you not already have this installed?");
}