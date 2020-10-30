var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");   
ctx.globalAlpha = 0.3
var max_rad = 40

function makeCircle(){
  
  var radius=0;
  while(radius < 50){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.arc(100, 75, radius, 0, 2 * Math.PI);
    ctx.stroke();
    radius += 1;
  }
}

function circ(x, y, rad, c){ 
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, 2 * Math.PI, false);

    ctx.lineWidth = 5;
    ctx.strokeStyle = c;
    ctx.stroke();
    function2();
    function function2(){
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, 2 * Math.PI, false);

        ctx.lineWidth = 5;
        ctx.strokeStyle = c;
        ctx.stroke();
        rad+=3;
        if(rad<=max_rad){
          setTimeout(function2, 1);
        }
    }

}
var w = 1600;
var h = 750;

setInterval(function(){
  let x =  Math.floor(Math.random() * w)
  let y = Math.floor(Math.random() * h)
  var i = 0;
  var intervalID = setInterval(function () {
     circ(x, y, 0, "#f0f0f0");
     i++;
     if (i === 5) {
        
         window.clearInterval();
     }
  }, 400);
  ctx.clearRect(0, 0, canv.width, canv.height);
  }, 2000);

