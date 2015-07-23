// JavaScript Document
var thatGuessInput = document.getElementById('myGuess');
//var btn = document.getElementById('btn_03');
var output = document.getElementById('output');


function guessScale(){
   //alert('the xRand value in takeGuess.js is' + xRand);
   //alert('filePlayed ' + filePlayed);
   if(filePlayed === false) {
	alert('You have not played a scale, so no guessing!');
	return filePlayed;
   }
	var thisGuess = thatGuessInput.value;
	
	convertThisGuess = 7;
	if (thisGuess == 'C') {
		convertThisGuess = convertThisGuess - 7;
	}
	if (thisGuess === 'D') {
		convertThisGuess = convertThisGuess - 6;
	}	
	if (thisGuess === 'E') {
		convertThisGuess = convertThisGuess - 5;
	}	
	if (thisGuess === 'F') {
		convertThisGuess = convertThisGuess - 4;
	}		
	
	if (thisGuess === 'G') {
		convertThisGuess = convertThisGuess - 3;
	}		

	if (thisGuess === 'A') {
		convertThisGuess = convertThisGuess - 2;
	}	
	
	if (thisGuess === 'B') {
		convertThisGuess = convertThisGuess - 1;
	}	

	
	console.log(thisGuess);
	
	var keyValid = true;
	
	if( thisGuess < 'A'|| thisGuess > 'G' ||thisGuess === ''){
		alert('You guessed ' + thisGuess + '. ' + 'That is not a valid key for this scale. Enter a capital letter from A to G.');
		keyValid = false;	
	}
	
	if(keyValid === true){
		//output.innerHTML = 'You guessed the key of ' + thisGuess + ', and that has a numerical value of ' + convertThisGuess;	
		output.innerHTML = 'You guessed the key of ' + thisGuess + ' major.';	
	}

	if(xRand === convertThisGuess){
		
		alert('You are a winner!');		
	}
	
	if(xRand > convertThisGuess){
		
		alert('Guess again. Choose a higher key.');		
	}

	if(xRand < convertThisGuess){
		
		alert('Guess again. Choose a lower key.');		
	}
	
}

function showScore(){
   //alert('the xRand value in takeGuess.js is' + xRand);
   //alert('filePlayed ' + filePlayed);
   if(filePlayed === false) {
	alert('You have not played a file, so I cannot show you anything.');
	return filePlayed;
   }
   seeScore.innerHTML = '<img src="scores/'+xRand+'.png"/>';	
}