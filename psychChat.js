function main(){
 //when  is ready, do all this stuff
    $("#chris").hide();
    $("#rohan").hide();
    $("#christian").hide();
    $("#bobby").hide();
    $(".student").css('width', '150px'); 

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// add functionality for more than 1 response from user
function userResponse(username){
	var responseArray = ["I'm sad :(", "I'm stressed out by my classes, how can I relax a little before all my tests?","I'm feeling very depressed, what should I do?", "Hi, I've been having issues with my family.", "I just ate 5 Burger King burgers and am dealing with stress I have never experienced before, what should I do???"];
	var name = String(username);
	i = getRandomInt(0,responseArray.length-1);
	console.log(i);
	document.getElementById("chatpagebox").innerHTML =  name + ": " + responseArray[i];
    var icon = document.getElementById("student-icon")
    if(username == "Chris") {
        $("#chris").show();
        $("#rohan").hide();
        $("#christian").hide();
        $("#bobby").hide();
        document.getElementById("student-name").innerHTML =  name
    }
    else if(username == "Rohan") {
        $("#rohan").show();
        $("#chris").hide();
        $("#christian").hide();
        $("#bobby").hide();
        document.getElementById("student-name").innerHTML =  name
    }
    else if(username == "Christian") {
        $("#christian").show();
        $("#chris").hide();
        $("#rohan").hide();
        $("#bobby").hide();
        document.getElementById("student-name").innerHTML =  name
    }
    else if(username == "Bobby") {        
        $("#bobby").show();
        $("#chris").hide();
        $("#rohan").hide();
        $("#christian").hide();
        document.getElementById("student-name").innerHTML =  name
    }
}

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
      chatbox.innerHTML = chatbox.innerHTML +'<br>' + message;
    }
    console.log(i);
  }
window.addEventListener("keyup", myKeyUp, false);
  function myKeyUp(ev) {
    if (ev.keyCode == 13){
        sendMessage();
    }
}
