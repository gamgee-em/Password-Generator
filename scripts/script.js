// Character choices array
let charArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "01234567890123456789", "!#>-$%?+&=@<_!#>-$%?+&=@<_"];
// Add click event
let displayPass = document.getElementById('generate');
displayPass.addEventListener('click', generatePassword);

// Generate random password function
function generatePassword() {
  let randPass = [];
  let password = [];
  let passCharStr = [];
  let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{8,128}$/;
  let finalPass = document.getElementById('password');
  let genHeader = document.getElementById('gen-header');
  // ask user to pick password length
  let userLenChars = prompt("Choose a password length between 8 & 128 characters");
  //parse userLenChars input string to number for use in conditional statements
  let parUserLenChars = parseInt(userLenChars);

  // function alerts user that their password would be safer if they included the extra chars
  let safePrompt = function() {
    alert('It\'d be safer if you did!')
  };

  // ask the user if they would like to include uppecase, lowercase, numerical and/or special characters.
  // use user input from prompts to generate password array
  if (isNaN(parUserLenChars) || parUserLenChars === null || parUserLenChars == '' || parUserLenChars < 8 || parUserLenChars > 128) {
      alert('Invalid Input. Please try again');
      return;
  }

  let userUpChars = confirm("Would you like UPPERCASE characters?");
  userUpChars ? password.push(charArr[0]) : safePrompt();
  
  let userLowChars = confirm("Would you like lowercase characters?");
  userLowChars ? password.push(charArr[1]) : safePrompt();
  
  let userNumChars = confirm("Would you like num3r1ca1 characters?");
  userNumChars ? password.push(charArr[2]) : safePrompt();
  
  let userSpecChars = confirm("Would you like $pec!al characters?");
  userSpecChars ? password.push(charArr[3]) : safePrompt();

  // create new arrays and fill each with chosen password chars
  // convert to a string and replace all commas between arrarys with an
  // empty string
  passCharStr = Array(userLenChars)
  .fill(password)
  .toString()
  .replaceAll(',', '');

  // add random char from passCharStr to randPass until
  // randPass string length matches users desired password length
  do {
    randPass += passCharStr[Math.floor(Math.random() * passCharStr.length)];
  } while (randPass.length < userLenChars);

  // check if generated password includes all of the users desired characters
  // if not return string asking user to try again.
  randPass.match(regExp) ? finalPass : randPass = 'Password not secure. Please run again 😕';
  genHeader.innerHTML = 'Your Secure Generated Password'
  return finalPass.innerHTML = randPass;
}

    /* 
    ***fix bug***
    Actual:
    When randPass doesn't include all of the requested password chars
    randPass is set to an empty string and ends the function. Causing 
    the user to have to rerun the application for desired results.

    Expected:
    If randPass doesn't include all of the requested password chars
    run function again (without prompting user for more input) until a password
    including all requested characters is received
     */