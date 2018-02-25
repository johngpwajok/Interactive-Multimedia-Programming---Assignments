var wsUri = "ws://obscure-waters-98157.herokuapp.com";
var output;

  function init()
  {
    output = document.getElementById("output");
    myWebSocket();
  }

  function myWebSocket()
  {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
    websocket.sendmessage = function(evt) {sendMessage(evt)};
  }

  function onOpen(evt, myMessage)
  {
    writeToScreen("CONNECTED");
    doSend("Hello");
  }

function sendMessage(evt)
{
    var txt = document.getElementById("myInput").value;
    doSend(txt);
}

  function onClose(evt)
  {
    writeToScreen("DISCONNECTED");
  }

  function onMessage(evt)
  {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
    //websocket.close();
  }

  function onError(evt)
  {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  }

  function doSend(message)
  {
    writeToScreen("SENT: " + message);
    websocket.send(message);
  }

  function writeToScreen(message)
  {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
  }


  myWebSocket.onmessage = function (event) {
  console.log(event.data);
}

  window.addEventListener("load", init, false);



