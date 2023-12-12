var characterlength = 8;
var letterspassword = [];

var specCharacterarray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', ';', ':', '/', '?'];
var lowercasearray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercasearray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberarray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var correctPrompts = getPrompts();

  if (correctPrompts) {
    var endPassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = endPassword;
  } else {
    
    passwordText.value = '';
  }
}

function generatePassword() {
  var password = '';

  for (var i = 0; i < characterlength; i++) {
    var randomLetter = Math.floor(Math.random() * letterspassword.length);
    password = password + letterspassword[randomLetter];

  }
  return password;
}

function getPrompts() {
  letterspassword = [];

  characterlength = parseInt(prompt("Enter the desired password length (8-128):"));
  if (isNaN(characterlength) || characterlength < 8 || characterlength > 128) {
    alert("Password length must be a number between 8 and 128.");
    return false;
  }
  if (confirm("Include lowercase letters in your password?")) {
    letterspassword = letterspassword.concat(lowercasearray);
  }
  if (confirm("Include uppercase letters in your password?")) {
    letterspassword = letterspassword.concat(uppercasearray);
  }
  if (confirm("Include special characters in your password?")) {
    letterspassword = letterspassword.concat(specCharacterarray);
  }
  if (confirm("Include numbers in your password?")) {
    letterspassword = letterspassword.concat(numberarray);
  }
  return true;
}

generateBtn.addEventListener("click", writePassword);