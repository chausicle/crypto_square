/*
input(s): A string of letters, punctuations, spaces, and numbers
output(s): A string of letters strung together

Psudocode:
take a input string
remove all punctuations with and whitespaces with Regex
check if string is even or odd
  if even --> row and column # are same
  if odd --> column is rounded up and row is rounded down of the half of length of string
create an array that will store each element a string that its length is LESS THAN OR EQUAL TO column
*/

function crypto (message) {
  let str = message.replace(/[^\w\s]|_ /g, "").split(' ').join('');
  let row = 0;
  let col = 0;

  if (str.length % 2 === 0) {
    col = str.length / 2;
    row = str.length / 2;
  } else {
    col = Math.ceil(str.length / 2);
    row = Math.floor(str.length / 2);
  }

  console.log(`${str}
    row=${row} , col=${col}`);

  return str;
}

// Test cases
if(crypto('ZOMG! ZOMBIES!!!This1234!!./#$%^&&^%2134#$%f#f45`') === 'ZOMGZOMBIESThis12342134ff45') console.log('PASSING WITH FLYING COLORS');
else console.log('FAILING MISERABLY, TRY AGAIN, YOU GOT DIS!');
if(crypto('Time 2is 3an 4illusion. 5Lunchtime 6doubly so.') === 'Time2is3an4illusion5Lunchtime6doublyso') console.log('PASSING WITH FLYING COLORS');
else console.log('FAILING MISERABLY, TRY AGAIN, YOU GOT DIS!');

// console.log(crypto('ZOMG! ZOMBIES!!!This1234!!./#$%^&&^%2134#$%f#f45`'));
