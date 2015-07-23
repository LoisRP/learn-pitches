// JavaScript Document
filePlayed = false;
var soundScales = [];
soundScales[0] = "0.mp3";
soundScales[1] = "1.mp3";
soundScales[2] = "2.mp3";
soundScales[3] = "3.mp3";
soundScales[4] = "4.mp3";
soundScales[5] = "5.mp3";
soundScales[6] = "6.mp3";
var soundScalesLength = soundScales.length;   //This is 7 right now

// generate a random number between 0 and the length of the soundScales array.
xRand = Math.floor( Math.random() * soundScalesLength);
//btn_02.onclick = changeSound();

function changeSound(){
    //alert('xRand'+xRand);
   
	document.getElementById('playSound').innerHTML = '<audio autoplay="autoplay" controls="controls"><source src="sounds/'+xRand+'.mp3" /></audio> ';
	filePlayed = true;
	//document.getElementById('testParagraph').innerHTML = "Random variable is " + xRand;
	
    //document.getElementById('guessArea').innerHTML='<p>Guess the key for this randomly selected major scale. The choices range from the C-major scale (starting at middle C on the piano), and progressing upwards to a B-major scale. Every scale starts on a white key. Use a capital letter.</p><p> <div class="scale-guess"> <label for="myGuess">Guess</label> <input id="myGuess" class="myguess" type="text"> <button id="btn_03" onclick="guessScale()">Submit my guess!</button> <p id="output">Your guess is: </p>';
	return filePlayed;
}