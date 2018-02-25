var drawLine = 1;

var currentDrawingMode = drawLine;

var canvas = document.getElementById("drawCanvas");
var drawingContext = canvas.getContext("2d");

var startPosition;

function setDrawingMode(newDrawingMode)
{
  currentDrawingMode = newDrawingMode;
}

function getMousePosition(canvas, evt)
{
  var rect = canvas.getBoundingClientRect();

  return{
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
}

function mouseDown(event)
{
  startPosition = getMousePosition(canvas, event);
}

function clearCanvas()
{
  drawingContext.clearRect(0,0, canvas.width, canvas.height);
}

function mouseUp(event)
{
  var mousePosition = getMousePosition(canvas, event);

    drawingContext.beginPath();
    drawingContext.moveTo(startPosition.x,startPosition.y);
    drawingContext.lineTo(mousePosition.x, mousePosition.y);
    drawingContext.stroke();
  

}
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);
