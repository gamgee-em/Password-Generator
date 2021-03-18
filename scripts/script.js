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

/* var password = generatePassword(); */

// try making an array of password characters and access them by index in if statements
var upChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowChars = "abcdefghijklmnopqrstuvwxyz";
let numChars = "0123456789";
let specChars = "!#$%?";
let passArr = [];
let password = [];

//need to fix prompt to activate on event click not on
let generatePassword = () => {
  // ask user to pick password length
  let userLenChars = prompt("Choose a password length between 8 & 128 characters");

  // ask the user if they would like to include uppecase, lowercase, numerical and/or special characters
  let userUpChars = confirm("Would you like UPPERCASE characters?");
  let userLowChars = confirm("Would you like lowercase characters?");
  let userNumChars = confirm("Would you like num3r1ca1 characters?");
  let userSpecChars = confirm("Would you like $pec!al characters?");
  
  if ( userLenChars === null || userLenChars == '' || userLenChars < 8 || userLenChars > 128) {
    return userLenChars;
    //why is this statement continuing to run after returning false?
  } else {

    if (userUpChars) {
      /*console.log(upChars);*/
      password.push(upChars);
    } else {
      console.log('It\'d be safer if you did!')
    }

    if (userLowChars) {
      /*console.log(lowChars);*/
      password.push(lowChars);
    } else {
      console.log('It\'d be safer if you did!')
    }

    if (userNumChars) {
      /*console.log(numChars);*/
      password.push(numChars);
    } else {
      console.log('It\'d be safer if you did!')
    }

    if (userSpecChars) {
      /*console.log(specChars);*/
      password.push(specChars);
    } else {
      console.log('It\'d be safer if you did!')
    }
  
    passCharStr = password.join("");
  }
    console.log(passCharStr);
 

  let randPassArr = [];
  console.log(passCharStr[Math.floor(Math.random() * passCharStr.length)]);

  for (let i = 0; i < userLenChars; i++) {
    if (randPassArr.length <= userLenChars) {
      
      randPassArr.push(passCharStr[Math.floor(Math.random() * passCharStr.length)]);

      //maybe try pushing an array instead?
      //push entire passCharStr into randPassword arrays
      console.log(passCharStr);
/*       randPassArr.push(passCharStr[Math.floor(Math.random() * passCharStr.length)]);
 */      console.log(randPassArr);
/*       return randPassArr.join("");
 */    }
    // randPassArr still an array when logged
    console.log(randPassArr);
    // randPassArr now a string when returned
/*     return randPassArr.join("");
 */  }
  console.log(randPassArr);
  return document.getElementById('password').innerHTML = randPassArr.join("");
  /* document.getElementById('#generate').innerHTML = randPassArr.join(""); */
  /* return randPassArr.join(""); */

};

/* 
  ***Fix bug***
  When #generate click event is fired more than once without reloading the page
  the previous prompt inputs are stored.
  possible solution: find a way to reset function or reload browser?
*/