function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// add functionality for more than 1 response from user
function userResponse(username){
	var responseArray = ["I'm sad :(", "I'm stressed out by my classes, how can I relax a little before all my tests?","I'm feeling very depressed, what should I do?", "Hi, I've been having issues with my family.", "I ate 5 Burger King burgers and am dealing with stress I have never experienced before, what should I do???"];
	var name = String(username);
	i = getRandomInt(0,responseArray.length-1);
	console.log(i);
	document.getElementById("chatpagebox").innerHTML =  name + ": " + responseArray[i];
    var icon = document.getElementById("student-icon")
    if(username == "Chris") {
        $(icon).attr('src','img/Chris.jpg');
    }
    else if(username == "Rohan") {
        $(icon).attr('src','img/Rohan.jpg');
    }
    else if(username == "Christian") {
        $(icon).attr('src','img/Christian.jpg');
    }
    else if(username == "Bobby") {
        $(icon).attr('src','img/Bobby.jpg');
    }
}
