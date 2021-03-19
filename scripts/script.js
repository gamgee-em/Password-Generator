// Assignment Code

let charArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!#$%?"];
let displayPass = document.getElementById('generate');
displayPass.addEventListener('click', generatePassword);

let passArr = [];
let password = [];
let passCharStr = [];

function generatePassword() {
  let randPassArr = [];

  // ask user to pick password length
  let userLenChars = prompt("Choose a password length between 8 & 128 characters");

  // ask the user if they would like to include uppecase, lowercase, numerical and/or special characters.
  let userUpChars = confirm("Would you like UPPERCASE characters?");
  let userLowChars = confirm("Would you like lowercase characters?");
  let userNumChars = confirm("Would you like num3r1ca1 characters?");
  let userSpecChars = confirm("Would you like $pec!al characters?");
  
  // use user input from promts to generate password array
  if (userLenChars === null || userLenChars == '' || userLenChars < 8 || userLenChars > 128) {
    return userLenChars;
  } else {
    if (userUpChars) {
      password.push(charArr[0]);
    } else {
      // try to alert user instead of logging
      console.log('It\'d be safer if you did!')
    }

    if (userLowChars) {
      password.push(charArr[1]);
    } else {
      console.log('It\'d be safer if you did!')
    }

    if (userNumChars) {
      password.push(charArr[2]);
    } else {
      console.log('It\'d be safer if you did!')
    }

    if (userSpecChars) {
      password.push(charArr[3]);
    } else {
      console.log('It\'d be safer if you did!')
    }

    // join password arrays into one array
    passCharStr = password.join("");
  }
 
  //try for a better solution
  //different type of loop passCharStr.forEach(x => { x[Math.floor(Math.random() * passCharStr.length)]})
  for (let i = 0; i < userLenChars; i++) {
    if (randPassArr.length <= userLenChars) {
      randPassArr.push(passCharStr[Math.floor(Math.random() * passCharStr.length)]);
  }
}
  console.log(randPassArr);
  return document.getElementById('password').innerHTML = randPassArr.join("");
};


/* 
  ***Fix bug***
  
  When the browser first loads the generate click event executes as expected.
  When #generate click event is fired a second time or more 
  (when generate password button is clicked and additional passwords are pushed to 
  the password array and stored for the next genarated password) 
  within the browser without reloading the page the previous prompt user char choice values are still in memory.
  When the browser is reloaded the function then works as expected for only the first execution.
  possible direction: find a way to reset function or reload browser?
  
  However the application works as requested and generates a random secure password.
  */
