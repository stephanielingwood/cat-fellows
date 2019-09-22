'use strict';

// make a variable
var username = prompt('Welcome! What is your name?');

// print out whatever's in that variable
console.log(username);

// "concatenate", or add, a string
console.log('Hi, ' + username + '!')

document.write('<p>Hi, ' + username + '</p>');

var wantsToAdopt = prompt('We are so glad you are here. Are you planning to adopt a cat soon?');

if (wantsToAdopt === 'yes') {
  document.write('<p>We are so excited! Head over to the <a href="apply.html">Apply</a> page for details on how to bring home the newest member of your family.</p>');
} else {
  document.write('<p>Thanks for stopping by. Enjoy the descriptions of our friendly felines, and be sure to spread the word about our rescue.</p>');
}
