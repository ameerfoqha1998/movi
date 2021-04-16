//------------p-1 (nav)--------
window.onload = function () {
  "use strict";
  var Text0 = "Home";
  var Text1 = "Abot";
  var Text2 = "Cnct";
  var Text3 = "Dsin";
  var Text4 = "Call";
  var Text5 = "Fotr";
  var i = 0;
  var x = setInterval(function () {
    "use strict";

    var myp = document.getElementsByTagName("a");
    myp[0].textContent += Text0[i];
    myp[1].textContent += Text1[i];
    myp[2].textContent += Text2[i];
    myp[3].textContent += Text3[i];
    myp[4].textContent += Text4[i];
    myp[5].textContent += Text5[i];
    i = i + 1;
    if (i > Text0.length - 1) {
      clearInterval(x);
    }
    if (i > Text1.length - 1) {
      clearInterval(x);
    }
    if (i > Text2.length - 1) {
      clearInterval(x);
    }
    if (i > Text3.length - 1) {
      clearInterval(x);
    }
    if (i > Text4.length - 1) {
      clearInterval(x);
    }
    if (i > Text5.length - 1) {
      clearInterval(x);
    }
  }, 500);
};

/********************slider********************** */
var slid = 1;
function showDivs(n) {
    var x = ["../img/bos3.jpg", "../img/bos2.jpg", "../img/bos1.jpg"];
  var back = document.getElementById("p-1");
  var b = document.getElementsByClassName("b1");
  for (var i = 0; i <= b.length; i++) {
    if (n > x.length) {
      slid = 1;
    }
    if (n < 1) {
      slid = x.length;
    }
    back.style.backgroundImage = x[slid - 1];
  }
}
showDivs(slid); //3
function plausDiv(n) {
  //3
  showDivs(slid += n);
}
