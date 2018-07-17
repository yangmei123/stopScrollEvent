/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-17 15:10:24
 * @version $Id$
 */

var sideBar = document.getElementById('side-bar');
var sideBtn = document.getElementsByClassName('side-bar-btton')[0];
var box = document.getElementsByClassName('box')[0];
var sideBarAnimal = document.getElementsByClassName('side-bar-default')[0];
box.style.height = window.innerHeight + 'px';
var timeoutId;
box.onscroll = function(e) {
    if (!timeoutId) { // 规定时间外才设值
        sideBtn.className = "side-bar-btton buttonScroll";
        sideBarAnimal.className = "side-bar-default buttonScrollDefault";
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
        sideBtn.className = "side-bar-btton buttonStopScroll";
        sideBarAnimal.className = "side-bar-default buttonStopScrollDefault";
        timeoutId = 0;
    }, 500);
}