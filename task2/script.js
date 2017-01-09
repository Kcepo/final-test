"use strict"

// задача 1

var arr = [2, 5, 8, 4, 1, 12];
arr.sort(function (a, b) {
    return a - b
});

// задача 2
var text = "The quick brown fox jumps over the lazy dog";
text = text.split(' ').filter(function (text) {
    var newText = text.match(/(\w+)/);
    return newText && newText[0].length < 4;
}).join(' ');

document.write(text);
// задача 3
var myVar = setInterval(myTimer, 5000);

function myTimer() {

}
// задача 4

var myVar = setInterval(myTimer, 1000);

function myTimer() {

}
// задача 5

document.cookie.match(/^(.*;)?sessionKey=[^;]+(.*)?$/)