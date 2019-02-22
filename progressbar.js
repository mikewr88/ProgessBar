document.addEventListener("DOMContentLoaded", function () {
  var bar = document.querySelectorAll('.bar');

  var percent=0;
setInterval(function () {
  if (percent<100){
    percent+=1;
  }else{
    percent=0;
  }
  bar.forEach(function (b) {
    b.style.width= percent +"%";
  });

}, 100)
// bar.forEach(function (b) {
//   b.style.width= percent;
// });

});
