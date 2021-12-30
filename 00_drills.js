// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {
  let out = ""
  for(let i = str.length - 1; i >= 0 ; i--){
    out += str[i]
  }
  return out
}

// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => {
  if (num <= 1) {
    return 1
  }
  return num * factorial(num - 1)
}

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  if (arr1.length != arr2.length){
    return -1
  }
  let out = [];
  for (let i = 0; i < arr1.length; i++)
  {
    out.push([arr1[i], arr2[i]])
  }
  return out
}

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {
  let out1 = [];
  let out2 = [];
  for(let i = 0; i < arr.length; i++)
  {
    out1.push(arr[i][0]);
    out2.push(arr[i][1]);
  }
  return [out1, out2]
}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftRight("Hello", 3) === "lloHe"
const shiftRight = (str, num) => {
  let n = num % str.length;
  let out = "";
  for (let i = str.length - n ; i < 2* str.length - n ; i++){  
    out += str[i % str.length]
  }
  return out
}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."

const announceDate = () => {
  raw = new Date();
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let day = raw.getDate();
  let year = raw.getYear() + 1900;
  let month = raw.getMonth();
  let hour = raw.getUTCHours();
  let minute = raw.getUTCMinutes();
  let ampm = ''.padStart(2, '0');
  minute = String(minute).padStart(2, '0');
  hour = String(hour).padStart(2, '0');
  if(hour >=12){
    ampm = 'afternoon';
  }
  else{
    ampm = 'morning';
  }
  console.log(day);
  console.log(year + 1900);
  console.log(month);
  console.log(minute);
  console.log(hour);
  return `Today's date is ${months[month]} ${day}th, ${year}. It is ${hour}:${minute} in the ${ampm}.`
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
