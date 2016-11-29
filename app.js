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
