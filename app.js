'use strict';
//The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var query1 = prompt('Does Adrian play guitar?').toLowerCase();
if (query1==='yes' || query1==='y' ) {
  alert('Yes, and he sweeps like a champion');

} else if (query1==='no' || query1==='n') {
  alert('Wrong! He has been shredding since the dawn of history');
} else {
  alert('Stop being a child');
}
var query2= prompt('Does Adrian like the Big Bang Theory?').toLowerCase();
if (query2==='yes' || query2==='y') {
  alert('I thought we were better than that');
} else if (query2=== 'no' || query2=== 'n') {
  alert('Correct, his hatred for that show will never die');
} else {
  alert('Your response is invalid and I do not love you anymore');
}
var query3= prompt('Has Adrian ever studied abroad?').toLowerCase();
if(query3==='yes' || query3==='y') {
  alert('Correct, he studied in Russia and it was glorious');
}
else if (query3==='no' || query3==='n'){
  alert('Incorrect. You are speaking of a man of the world. Clearly you do not know him well at all.');
} else {
  alert('My ego demands that you take these questions more seriously'); + console.log ('The console does not approve of you and it has been logged as such');
}
var query4= prompt('Did Adrian ever get lost in the middle of Spain and have to speak to a nearly toothless old man in Spanish to get nearly incomprehensible directions to Sevilla?').toLowerCase();
if(query4==='yes' || query4==='y') {
  alert('Actually, yes. Was it the extraneous detail that clued you in?');
} else if (query4==='no' || query4==='n'){
  alert('To call upon a cliche, the truth is stranger than fiction');
} else {
  alert('You should apply that creativity to coding'); + console.log('The alert was friendly enough, but hidden scorn lurks in the console.');
}
var query5= prompt('Does Adrian enjoy country music?').toLowerCase();
if(query5==='yes' || query5==='y') {
  alert('In the words of the Macho Man Randy Savage, you and I have never been friends');
} else if (query5==='no' || query5==='n') {
  alert('You may know me well enough that I will consider letting you be one of the tag team champions with me');
} else {
  alert('If you are unable to adhere to the conventions of my low level coding, then I will have to resort to Stalinist methods');
}
