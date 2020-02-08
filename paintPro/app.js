// set canvas id to variable
var canvas = document.getElementById("draw");

// get canvas 2D context and set it to the correct size
var ctx = canvas.getContext("2d");
resize();

// resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

// add event listeners to specify when functions should be triggered
window.addEventListener("resize", resize);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

// last known position
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX-7;
  // pos.x = e.clientX;
  pos.y = e.clientY-42;
  // pos.y = e.clientY;
}

let color = '#000000';
function setColor(newcolor) {
  // console.log(getComputedStyle(e.target).backgroundColor);
  console.log(newcolor);
  color = newcolor;
}

function draw(e) {
  if (e.buttons !== 1) return; // if mouse is pressed.....

  var tamaño = document.getElementById("hex").value;

  ctx.beginPath(); // begin the drawing path

  ctx.lineWidth = Number(tamaño); // width of lineS
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = color; // hex color of line
  // ctx.strokeStyle = "#4e0f70"; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!
}