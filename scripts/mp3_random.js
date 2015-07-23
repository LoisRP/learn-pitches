// JavaScript Document

// store the element with an id of "myMp3" in the variable "mainSlide". 		
var mainMp3 = document.getElementById('myMp3');

// store the element with an id of "image_description"
// in the variable "soundScaleDescriptionText".
//var soundScaleDescriptionText = document.getElementById('image_description');

// store the element with an id of "btn02"
// in the variable "btn02"
var btn02 = document.getElementById('btn_02');

// create a new array called soundScales
var soundScales = [];

// declare values of the soundScales array...
// each soundScales value should contain a
// sound scale object

// Cache the images for use by the browser.
// To do this we will use a "for" loop to create
// 7 scales
for(var i = 1; i < 8; i++){
	scale = new Scale();
	
	scale.src = 'sounds/' + i + '.jpg';
			
	// insert the new sound into the soundScales array
	// by using the push() method. The push() method
	// inserts a new item into an array. 
	soundScales.push(scale);
}

// set the alt attribute of the sounds
/*
soundScales[0].alt = "";
soundScales[1].alt = "";
soundScales[2].alt = "";
soundScales[3].alt = "";
soundScales[4].alt = "";
soundScales[5].alt = "";
soundScales[6].alt = "";
*/

// get length of soundScales array 
var soundScalesLength = soundScales.length;

// attach onclick event to btn02 and run
// changeSoundAndDescription function
btn02.onclick = changeSoundAndDescription;

// function to change the picture and it's description 
// to a different picture and description.
function changeSoundAndDescription(){

  	// generate a random number between "0" and the length of the kitten array.
	var randomValue = Math.floor( Math.random() * soundScalesLength);
		
	// set the "src" value of the "mainSlide" image to the value
	// stored in soundScales[randomValue].alt
	mainSlide.src = soundScales[randomValue].src;
	// set the alt value of the "mainSlide" image to the value
	// stored in soundScales[randomValue].alt
	mainSlide.alt = soundScales[randomValue].alt;
	
	// replace the text in "soundScaleDescriptionText" with the text stored in
	// soundScales[randomValue].alt
	soundScaleDescriptionText.innerHTML = soundScales[randomValue].alt;
	
};






















