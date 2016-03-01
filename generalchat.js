var submit = document.getElementById("chatpageEnter");
var i = 0;
function sendMessage() {
    var chatbox = document.getElementById("chatpagebox");
    var message = document.getElementById("chatpageSubmit").value
    if (message){
      if (i==0 ){
        chatbox.innerHTML = "You: " + document.getElementById("chatpageSubmit").value;
      }
      if (i > 0) {
        chatbox.innerHTML = chatbox.innerHTML + '<br>' + "You: " + document.getElementById("chatpageSubmit").value; 
      }
      document.getElementById("chatpageSubmit").value = "";
      if (i==0) {
        setTimeout(response, 500)
        i = i + 1;
      }
    }
    function response() {
      var chatbox = document.getElementById("chatpagebox");
      chatbox.innerHTML = chatbox.innerHTML +'<br>' + "Please begin chatting by selecting a student in the queue.";
    }
    console.log(i);
  }
window.addEventListener("keyup", myKeyUp, false);
  function myKeyUp(ev) {
    if (ev.keyCode == 13){
        sendMessage();
    }
}