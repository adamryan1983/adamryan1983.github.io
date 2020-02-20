"use strict";

var $ = function (id) {
    return document.getElementById(id); 
};


function togglediv(id,desc) {
  var div = $(id);
  var desc = $(desc);
  div.style.display = div.style.display == "block" ? "none" : "block";
  desc.style.display = div.style.display == "none" ? "block" : "none";
}

function togglediv2(id,desc2) {
  var div = $(id);
  var desc = $(desc2);
  div.style.display = div.style.display == "block" ? "none" : "block";
  desc.style.display = div.style.display == "none" ? "block" : "none";
}



// function cnaUnhide() {
//     var x = $("cna_desc");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//         z.style.display = "none";
//   } else {
//     x.style.display = "none";
//     z.style.display = "block";
//   }
// }
// function munUnhide() {
//     var y = $("mun_desc");
//     if (y.style.display === "none") {
//         y.style.display = "block";
//         z.style.display = "none";
//   } else {
//     y.style.display = "none";
//     z.style.display = "block"
//   }
