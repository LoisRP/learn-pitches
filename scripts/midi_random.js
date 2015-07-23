// JavaScript Document

// store the element with an id of "myMidi" in the variable "mainMidi". 		
var mainMidi = document.getElementById('myMidi');

// store the element with an id of "sound_description"
// in the variable "soundDescriptionText".
var soundDescriptionText = document.getElementById('sound_description');

// store the element with an id of "btn02"
// in the variable "btn02"
var btn02 = document.getElementById('btn_02');

// create a new array called soundScales
var soundScales = [];

// declare values of the soundScales array...
// each soundScales value should contain a
// MIDI scale object

// Cache the MIDIs for use by the browser.
// To do this we will use a "for" loop to create
// 7 MIDIs
for(var i = 1; i < 8; i++){
	scale = new Scale();
	
	scale.src = 'sounds/' + i + '.mid';
			
	// insert the new scale into the soundScales array
	// by using the push() method. The push() method
	// inserts a new item into an array. 
	soundScales.push(scale);
}

/* set the alt attribute of the scales
soundScale[0].alt = "Scale";
soundScale[1].alt = "Scale";
*/

// get length of soundScales array 
var soundScalesLength = soundScales.length;

// attach onclick event to btn02 and run
// changePictureAndDescription function
btn02.onclick = changeScale;

// function to change the scale 
// to a different scale
function changeScale(){

  	// generate a random number between "0" and the length of the soundScales array.
	var randomValue = Math.floor( Math.random() * soundScalesLength);
		
	// set the "src" value of the "myMidi" image to the value
	// stored in soundScales[randomValue].alt
	myMidi.src = kittenImages[randomValue].src;
	// set the alt value of the "mainSlide" image to the value
	// stored in kittenImages[randomValue].alt
	mainSlide.alt = kittenImages[randomValue].alt;
	
	// replace the text in "kittenImageDescriptionText" with the text stored in
	// kittenImages[randomValue].alt
	kittenImageDescriptionText.innerHTML = kittenImages[randomValue].alt;
	
};






















