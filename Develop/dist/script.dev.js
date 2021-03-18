"use strict";

/* // Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
} */
// Add event listener to generate button

/* let generateBtn = document.querySelector("#generate");
 */
// Add password character options

/* let userUpChars = confirm("Would you like UPPERCASE characters?");
let userLowChars = confirm("Would you like lowercase characters?");
let userNumChars = confirm("Would you like num3r1ca1 characters?");
let userSpecChars = confirm("Would you like $pec!al characters?"); */

/* var generatePassword = Array(passLength).fill(upChars + lowChars + numChars + specChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
 */

/* var password = generatePassword(); */
var upChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowChars = "abcdefghijklmnopqrstuvwxyz";
var numChars = "0123456789";
var specChars = "!#$%?";
var passArr = [];
var password = [];
var userLenChars = prompt("Choose a password length between 8 & 128 characters");

var generatePassword = function generatePassword() {
  //Ask user to pick password length

  /*   let userLenChars = prompt("Choose a password length between 8 & 128 characters");
   */
  //ask the user if they would like to include uppecase, lowercase, numerical and/or special characters
  var userUpChars = confirm("Would you like UPPERCASE characters?");
  var userLowChars = confirm("Would you like lowercase characters?");
  var userNumChars = confirm("Would you like num3r1ca1 characters?");
  var userSpecChars = confirm("Would you like $pec!al characters?");

  if (userLenChars === null || userLenChars == '' || userLenChars < 8 || userLenChars > 128) {
    return userLenChars; //why is this statement continuing to run after returning false?
  } else {
    if (userUpChars) {
      /*console.log(upChars);*/
      password.push(upChars);
    } else {
      console.log('It\'d be safer if you did!');
    }

    if (userLowChars) {
      /*console.log(lowChars);*/
      password.push(lowChars);
    } else {
      console.log('It\'d be safer if you did!');
    }

    if (userNumChars) {
      /*console.log(numChars);*/
      password.push(numChars);
    } else {
      console.log('It\'d be safer if you did!');
    }

    if (userSpecChars) {
      /*console.log(specChars);*/
      password.push(specChars);
    } else {
      console.log('It\'d be safer if you did!');
    }

    passCharStr = password.join("");
    console.log(passCharStr);
  }

  console.log(passCharStr);
  var randPassArr = [];
  console.log(passCharStr[Math.floor(Math.random() * passCharStr.length)]);

  for (var i = 0; i <= userLenChars; i++) {
    if (randPassArr.length <= userLenChars) {
      //maybe try pushing an array instead?
      //push entire passCharStr into randPassword arrays
      console.log(passCharStr);
      randPassArr.push(passCharStr[Math.floor(Math.random() * passCharStr.length)]);
      console.log(randPassArr);
      return randPassArr;
    }

    console.log(randPassArr.join(''));
    return randPassArr.join("");
  }

  console.log(password);
};

console.log(generatePassword()
/* .join('') */
); //not working yet

/* generateBtn.addEventListener("click", password); */

/*   for (let i = 0; i < userLenChars; i++) {
    password.push(upChars + lowChars + numChars + specChars);
  } 
 */

/*   let randPass = passArr.map(passChar => {
    return passChar[Math.floor(Math.random() * passChar.length)];
  }).join('');
  console.log(password);
  console.log(randPass);
  return randPass; */

/* console.log(randPass);
 */

/* 
create new ARRAY's equal in length to userLenChars fill the ARRAY/push the pwdChars into the ARRAY's. 
map or loop over each array(x) and return x as a random length once for each ARRAY then join the ARRAY's
using an empty string creating the randPass the user requested.-
*/

/* var randPassword = Array(pwdLen).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');

console.log(randPassword)
 */

/* console.log(Array(pwdLen));
console.log(Array(pwdLen).fill(pwdChars));
 */