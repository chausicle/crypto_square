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

  return str;
}

// Test cases
if(crypto('ZOMG! ZOMBIES!!!This1234!!./#$%^&&^%2134#$%f#f45`') === 'ZOMGZOMBIESThis12342134ff45') console.log('PASSING WITH FLYING COLORS');
else console.log('FAILING MISERABLY, TRY AGAIN, YOU GOT DIS!')

console.log(crypto('ZOMG! ZOMBIES!!!This1234!!./#$%^&&^%2134#$%f#f45`'));
