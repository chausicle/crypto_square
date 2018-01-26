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
  let str = message.replace(/(\W|_)/g, "").split(' ').join('');
  let strArray = [];
  let row = 0;
  let col = 0;

  // assign values for rol and col accordingly
  for (let value = 1; value < str.length; value++) {
    console.log('col = ', value, '    row = ', Math.ceil(str.length / value));
    if ((value - Math.ceil(str.length / value) >= 0) && (value - Math.ceil(str.length / value) <= 1)) {
      col = value;
      row = Math.ceil(str.length / value);
      break;
    }
  }

  // str into array
  for (let i = 0; i < str.length; i += col) {
    strArray.push(str.substring(i, i + col).split(''));
  }

  var colsArray = [];
  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < strArray[i].length; j++) {
      // if we are handling the first row, we need to create a new array for the columns
      if (colsArray[j] === undefined) {
        colsArray[j] = [];
      }
      colsArray[j].push(strArray[i][j]);
    }
  }

  return colsArray;
}


//Test cases
console.log(crypto('123456789'));
console.log(crypto('1a2b3c4d5e6f7g8h9id'));

// // Test cases
// if(crypto('ZOMG! ZOMBIES!!!This1234!!./#$%^&&^%2134#$%f#f45`') === 'ZOMGZOMBIESThis12342134ff45') console.log('PASSING WITH FLYING COLORS');
// else console.log('FAILING MISERABLY, TRY AGAIN, YOU GOT DIS!');
// if(crypto('Time 2is 3an 4illusion. 5Lunchtime 6doubly so.') === 'Time2is3an4illusion5Lunchtime6doublyso') console.log('PASSING WITH FLYING COLORS');
// else console.log('FAILING MISERABLY, TRY AGAIN, YOU GOT DIS!');

// // console.log(crypto('ZOMG! ZOMBIES!!!This1234!!./#$%^&&^%2134#$%f#f45`'));
