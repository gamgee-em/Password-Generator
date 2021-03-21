// Assignment Code

// Character choices array
let charArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "01234567890123456789", "!#>-$%?+&=@<_"];

/* 
  *** TODO make randPassArr always generate a password with all desired chars *** 
  *** Try to use charArr.forEach(x => ) ***
  *** Think about how to maybe implement some() 
*/

// Add click event
let displayPass = document.getElementById('generate');
displayPass.addEventListener('click', generatePassword);

// Generate random password function
function generatePassword() {
  let randPass = [];
  let password = [];
  let passCharStr = [];
  let regExp = /^(?=.*[\w])(?=.*[\W])[\w\W]{8,128}$/;
  // ask user to pick password length
  let userLenChars = prompt("Choose a password length between 8 & 128 characters");

  // function alerts user that their password would be safer if they included the extra chars
  let safePrompt = function() {
    alert('It\'d be safer if you did!')
  };

  // ask the user if they would like to include uppecase, lowercase, numerical and/or special characters.
  // use user input from promts to generate password array
  if (userLenChars === null || userLenChars == '' || userLenChars < 8 || userLenChars > 128) {
      alert('Invalid Input. Please try again');
  }
  
    let userUpChars = confirm("Would you like UPPERCASE characters?");
    userUpChars ? password.push(charArr[0]) : safePrompt();
    
    let userLowChars = confirm("Would you like lowercase characters?");
    userLowChars ? password.push(charArr[1]) : safePrompt();
    
    let userNumChars = confirm("Would you like num3r1ca1 characters?");
    userNumChars ? password.push(charArr[2]) : safePrompt();

    let userSpecChars = confirm("Would you like $pec!al characters?");
    userSpecChars ? password.push(charArr[3]) : safePrompt();

    //join password array into string and store in passCharStr
    passCharStr = Array(userLenChars).fill(password).toString().replaceAll(',', '');
    
  console.log(passCharStr)
  let finalPass = document.getElementById('password');

  do {
    randPass += passCharStr[Math.floor(Math.random() * passCharStr.length)];
    
  } while (randPass.length < userLenChars);

    finalPass.innerHTML = randPass

    // fix the bug.
    // the user shouldn't be prompted again if the randPass doesn't 
    // output at least 1 of each requested characters.
    // find a way to reuse the current prompt inputs. Loop of sorts?
    randPass.match(regExp) ? 
    finalPass : 
    generatePassword();
}