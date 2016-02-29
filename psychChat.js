function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// add functionality for more than 1 response from user
function userResponse(username){
	var responseArray = ["I'm sad :(", "I'm stressed out by my classes, how can I relax a little before all my tests?","I'm hella depressed yo, what should I do", "Hi", "I ate 5 Burger King burgers and am dealing with stress I have never experienced before, what should I do???"];
	var name = String(username);
	i = getRandomInt(0,responseArray.length-1);
	console.log(i);
	document.getElementById("chatpagebox").innerHTML =  name + ": " + responseArray[i];
    var icon = document.getElementById("student-icon")
    if(username == "Rohan") {
        $(icon).css('src','img/Rohan.jpg');
    }
}
