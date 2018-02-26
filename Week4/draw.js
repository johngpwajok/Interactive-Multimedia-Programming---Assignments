var drawLine = 1;
var currentDrawingMode = drawLine;
var canvas = document.getElementById("drawCanvas");
var context = canvas.getContext("2d");
var startPosition;

function setDrawingMode(newDrawingMode)
{
  currentDrawingMode = newDrawingMode;
}
function getMousePosition(canvas, evt)
{
  var line = canvas.getBoundingClientRect();

  return{
    x: evt.clientX - line.left,
    y: evt.clientY - line.top
  }
}
function mouseDown(event)
{
  startPosition = getMousePosition(canvas, event);
}

function clearCanvas()
{
  context.clearRect(0,0, canvas.width, canvas.height);
}

function mouseUp(event)
{
  var mousePosition = getMousePosition(canvas, event);

    context.beginPath();
    context.moveTo(startPosition.x,startPosition.y);
    context.lineTo(mousePosition.x, mousePosition.y);
    context.stroke();
  

}
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);
