// ==UserScript==
// @name         zoom_irl
// @namespace    zoom_irl
// @version      0.1
// @description  Zoom_irl
// @author       Switch
// @include     *.zoom.us/j/*
// @updateURL   https://raw.githubusercontent.com/LilyPerr/lilyperr.github.io/master/zoom_irl.js
// @downloadURL https://raw.githubusercontent.com/LilyPerr/lilyperr.github.io/master/zoom_irl.js
// ==/UserScript==

(function() {
    'use strict';

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
        return words[Math.floor(Math.random() * words.length)] + ", click Open Zoom Meetings.";
    }

    console.log("before loop");
    while (document.querySelector("div > h1").innerHTML == null) {
        console.log("in loop");
    }
    console.log("after loop");
    document.querySelector("div > h1").innerHTML = getFunnyString();
    console.log(getFunnyString());
})();