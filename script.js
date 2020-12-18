// Assignment Code
var generateBtn = document.querySelector("#generate");

//Object to consolidate functions
var randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

//functions in object
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]+<>/,.=-_~`.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//Console log to make sure they work
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

// Write password to the #password input
function writePassword() {
var confirmLower, confirmUpper, confirmSymbol, confirmNumbers;

  var characterNums = prompt("How many characters would you like to add?");
  if (characterNums >= 8 && characterNums < 128) {
    confirmLower = confirm("Would you like to add lowercase letters to password?");
    confirmUpper = confirm("Would you like to add uppercase letters to password?");
    confirmSymbol = confirm("Would you like to include symbols in password?");
    confirmNumbers = confirm("Would you like to add numbers to password?")
  }

  else {
    prompt("Please select a number between 8 and 128.");
  };


  var password = generatePassword(characterNums, confirmLower, confirmUpper, confirmSymbol, confirmNumbers);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword(characterNums, confirmLower, confirmUpper, confirmSymbol, confirmNumbers) {
  for (i = 0; i < characterNums; i++);
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
