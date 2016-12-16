'use strict';
//The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
var counter = 0;
function stuffAndThings(){
var query1 = prompt('Does Adrian play guitar?').toLowerCase();
if (query1 === 'yes' || query1 === 'y' ) {
  alert('Yes, and he sweeps like a champion'); + counter++;

} else if (query1 === 'no' || query1 === 'n') {
  alert('Wrong! He has been shredding since the dawn of history');
} else {
  alert('Stop being a child'); + alert('You disappoint me'); + alert('Your childishness will be met by spamming'); + alert('I hope you are satisfied with your life decision'); + alert('This can go on forever, like the Highlander');
}
};
stuffAndThings();

function secondQuestion() { var query2 = prompt('Does Adrian like the Big Bang Theory?').toLowerCase();
if (query2 === 'yes' || query2 === 'y') {
  alert('I thought we were better than that');
} else if (query2 === 'no' || query2 === 'n') {
  alert('Correct, his hatred for that show will never die'); + counter++;
} else {
  alert('Your response is invalid and I do not love you anymore');
}
};
secondQuestion();
function thirdQuestion () {
  var query3 = prompt('Has Adrian ever studied abroad?').toLowerCase();
if(query3 === 'yes' || query3 === 'y') {
  alert('Correct, he studied in Russia and it was glorious'); + counter++;
}
else if (query3 === 'no' || query3 === 'n'){
  alert('Incorrect. You are speaking of a man of the world. Clearly you do not know him well at all.');
} else {
  alert('My ego demands that you take these questions more seriously'); + console.log ('The console does not approve of you and it has been logged as such');
}
};
thirdQuestion();
function fourthQuestion () {
  var query4 = prompt('Did Adrian ever get lost in the middle of Spain and have to speak to a nearly toothless old man in Spanish to get nearly incomprehensible directions to Sevilla?').toLowerCase();
if(query4 === 'yes' || query4 === 'y') {
  alert('Actually, yes. Was it the extraneous detail that clued you in?'); + counter++;
} else if (query4 === 'no' || query4 === 'n'){
  alert('To call upon a cliche, the truth is stranger than fiction');
} else {
  alert('You should apply that creativity to coding'); + console.log('The alert was friendly enough, but hidden scorn lurks in the console.');
}
};
fourthQuestion();
function fifthQuestion () {
  var query5 = prompt('Does Adrian enjoy country music?').toLowerCase();
if(query5 === 'yes' || query5 === 'y') {
  alert('In the words of the Macho Man Randy Savage, you and I have never been friends');
} else if (query5 === 'no' || query5 === 'n') {
  alert('You may know me well enough that I will consider letting you be one of the tag team champions with me'); + counter++;
} else {
  alert('If you are unable to adhere to the conventions of my low level coding, then I will have to resort to Stalinist methods');
}
};
fifthQuestion();
function sixthQuestion() {
  var pets = 4;
console.log(userInput);
while(pets > 0){
  pets = pets - 1;
  var userInput = parseInt(prompt('How many pets do I have?'));
  if (userInput === 4) {
    alert ('Correct!') + (pets = 0); + counter++;
  } else if (userInput < 4) {
    alert ('Too low!');
  }
  else if (userInput > 4) {
    alert ('Too high!');
  }}
};
sixthQuestion();

function seventhQuestion() {
    var attempts = 0;
var choice = true;
var citiesVisited = ['krasnodar', 'bergen','moscow', 'omsk', 'edinburgh', 'seville'];
while(choice && attempts < 6) {
 var queryCities = prompt('I have visited numerous cities. Guess one! ').toLowerCase();
for (var i = 0; i < citiesVisited.length; i++)
if (citiesVisited[i] === queryCities){
 alert('That\'s right! I have visited ' + citiesVisited + '!'); + counter++;
 choice = false;
break;
}
if (citiesVisited[i] !== queryCities){
 alert('Nope, I have never visited ' + queryCities + '!' + ' Try again ');
attempts++;
 console.log(attempts);
 }


 }
 if (attempts = 6) {
   alert('That is incorrect, and your tries have expired. Out of pity, I shall tell you that I have visited' + citiesVisited);
  }
  alert ('Congratulations, you got' + counter + 'out of 7 questions correct');
};
seventhQuestion();
