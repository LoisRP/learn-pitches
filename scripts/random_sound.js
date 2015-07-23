// JavaScript Document

var soundScales = [];
soundScales[0] = "0.mp3";
soundScales[1] = "1.mp3";
soundScales[2] = "2.mp3";
soundScales[3] = "3.mp3";
soundScales[4] = "4.mp3";
soundScales[5] = "5.mp3";
soundScales[6] = "6.mp3";

//btn_02.onclick = changeSound();

function changeSound(){
    
    //length of the soundScales array (how many items in it?)
	var soundScalesLength = soundScales.length;   //This is 7 right now

	// generate a random number between "0" and the length of the soundScales array.
	var randomValue = Math.floor( Math.random() * soundScalesLength);

	document.getElementById('playSound').innerHTML = '<audio autoplay="autoplay" controls="controls"><source src="sounds/'+randomValue+'.mp3" /></audio> ';
	
	document.getElementById('testParagraph').innerHTML = "Random variable is " + randomValue;
	
	return randomValue;
}