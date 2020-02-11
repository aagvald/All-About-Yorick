// Det här scriptet gör en lista av några bilder som ska förekomma i ett bildspel och under listan så är det specifierat hur sidan ska veta av i vilken ordning man går igenom bilderna i bildspelet.

const pics = [{url: "img/Classic-splash.jpg",     name: "Classic Yorick"},
              {url: "img/Undertaker-splash.jpg",  name: "Undertaker Yorick"},
              {url: "img/Pentakill-splash.jpg",   name: "Pentakill Yorick"},
              {url: "img/Arclight-splash.jpg",    name: "Arclight Yorick"},
              {url: "img/Meowrick-splash.jpg",    name: "Meowrick"}];

var curPic = 0;
var elem = document.getElementById("skinholder");

function newPic(dir) {
  if ((curPic + dir) >= pics.length) {curPic = dir - 1}
  else if ((curPic + dir) < 0) {curPic = pics.length + dir}
  else {
    curPic += dir;
  }
  elem.src = pics[curPic].url;
  document.getElementById("skin-name").innerHTML = pics[curPic].name;
}

// Här har jag gjort så att när man klickar på knappen till vänster så går man upp i listan (-1) och ned när man klickar till höger.

document.getElementById("lastpic").addEventListener("click", function(){newPic(-1);})
document.getElementById("nextpic").addEventListener("click", function(){newPic(1);})
window.addEventListener("load", function(){elem.src = pics[0].url});
