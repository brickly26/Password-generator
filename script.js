// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for code
var passwordLength;
var bank = ""
var lowerCase = "abcdefghijklmnopqrstuvwkyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = "!@#$%^&*()_+-=[]{}";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  getPasswordLength();
  getLowercase();
  getUppercase();
  getNumbers();
  getSpecialChar();
  verifyBank();
  var tempPassword = "";
  var bankArray = bank.split("");
  console.log(bankArray);
  for (var i = 0; i < passwordLength; i++) {
    tempPassword += bankArray[Math.floor(Math.random() * bankArray.length)]
  }
  bank = ""
  return tempPassword;
}

var getPasswordLength = function() {
  passwordLength = prompt("How long would you like you");
  if (passwordLength >= 8 && passwordLength <= 128) {
  }
  else {
    alert("Password length must be between 8 and 128 characters")
    getPasswordLength();
  }
}

var getLowercase = function() {
  if (confirm("Would you like to include lowercase letters?")) {
    bank += lowerCase;
  }
}

var getUppercase = function() {
  if (confirm("Would you like to include uppercase letters?")) {
    bank += upperCase;
  }
}

var getNumbers = function() {
  if (confirm("Would you like to include Numbers?")) {
    bank += numbers;
  }
}

var getSpecialChar = function() {
  if (confirm("Would you like to include special characters?")) {
    bank += specialChar;
  }
}

var verifyBank = function() {
  if (bank === "") {
    alert("ERROR! \n\n===========================\n\nYou must choose one character type.")
    generatePassword();
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


