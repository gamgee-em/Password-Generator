// Assignment Code

// try making an array of password characters and access them by index in if statements
// instead of multiple variables
var upChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowChars = "abcdefghijklmnopqrstuvwxyz";
let numChars = "0123456789";
let specChars = "!#$%?";
let passArr = [];
let password = [];

// need to fix prompt to activate on event click not on browser load.
// added onclick event to html for now.
// try figuring out a solution using addEventListener('click', function()).
let generatePassword = () => {
  // ask user to pick password length
  let userLenChars = prompt("Choose a password length between 8 & 128 characters");

  // ask the user if they would like to include uppecase, lowercase, numerical and/or special characters.
  let userUpChars = confirm("Would you like UPPERCASE characters?");
  let userLowChars = confirm("Would you like lowercase characters?");
  let userNumChars = confirm("Would you like num3r1ca1 characters?");
  let userSpecChars = confirm("Would you like $pec!al characters?");
  
  // try seperating else statement into independent if statement. Maybe this is why the
  // gaurd clause/statement is not exiting the function.
  if (userLenChars === null || userLenChars == '' || userLenChars < 8 || userLenChars > 128) {
    return userLenChars;
    //why is this statement continuing to run after returning false?
    //try else if statement 
  } else {
    if (userUpChars) {
      password.push(upChars);
    } else {
      console.log('It\'d be safer if you did!')
    }

    if (userLowChars) {
      password.push(lowChars);
    } else {
      console.log('It\'d be safer if you did!')
    }

    if (userNumChars) {
      password.push(numChars);
    } else {
      console.log('It\'d be safer if you did!')
    }

    if (userSpecChars) {
      password.push(specChars);
    } else {
      console.log('It\'d be safer if you did!')
    }
  
    passCharStr = password.join("");
  }
 
  let randPassArr = [];

  //try for a better solution
  //different type of loop passCharStr.forEach(x => { x[Math.floor(Math.random() * passCharStr.length)]})
  for (let i = 0; i < userLenChars; i++) {
    if (randPassArr.length <= userLenChars) {
      randPassArr.push(passCharStr[Math.floor(Math.random() * passCharStr.length)]);
  }
}
  return document.getElementById('password').innerHTML = randPassArr.join("");


};

/* 
  ***Fix bug***
  When the browser first loads the generate click event executes as expected.
  When #generate click event is fired a second time or more (generate password button is pressed and consecutive passwords are generated) 
  within the browser without reloading the page the previous prompt user char choice values are still in memory.
  When the browser is reloaded the function then works as expected for only the first execution.
  possible direction: find a way to reset function or reload browser?
*/