// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.

/////////////Original

// var vowelString = "Your mother was a hamster and your father smelt of elderberries!"; // -> 20

// function vowelCounter(str) {
//   str.toUpperCase().split('')
//   let total = 0;
//   str.forEach((item, i) => {
//     switch (item) {
//       case 'A':
//         total++
//         break;
//       case 'E':
//         total++
//         break;
//       case 'I':
//         total++
//         break;
//       case 'o':
//         total++
//         break;
//       case 'U':
//         total++
//         break;
//     }
//     return total;
//   }

// console.log(vowelCounter(vowelString));

///////////SOLUTION

var vowelString = "Your mother was a hamster and your father smelt of elderberries!"; // -> 20

function vowelCounter(str) {
  var arr = str.toUpperCase().split('');
  let total = 0;
  arr.forEach((item, i) => {
    switch (item) {
      case 'A':
        total++
        break;
      case 'E':
        total++
        break;
      case 'I':
        total++
        break;
      case 'O':
        total++
        break;
      case 'U':
        total++
        break;
      default:
    }
  })
    return total;
}
console.log(vowelCounter(vowelString));