// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*(){}[]=/,.|~?";

// Write password to the #password input
function writePassword(characterNums, confirmLower, confirmUpper, confirmSymbols, confirmNumbers) 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password").innerHTML=generatePassword;

  passwordText.value = password;
  
  var confirmLower, confirmUpper, confirmSymbols, confirmNumbers;

  var characterNums = prompt("How many characters would you like to add?");
  if (characterNums >= 8 && characterNums < 128) {
    confirmLower = confirm("Would you like to add lowercase letters to password?");
      if (confirmLower) characterNums = characterNums.concat(lowercase)
    confirmUpper = confirm("Would you like to add uppercase letters to password?");
      if (confirmUpper) characterNums = characterNums.concat(uppercase)
    confirmSymbols = confirm("Would you like to include symbols in password?");
      if (confirmSymbols) characterNums = characterNums.concat(symbols)
    confirmNumbers = confirm("Would you like to add numbers to password?")
      if (confirmNumbers) characterNums = characterNums.concat(numbers)
  }

  else {
    prompt("Please select a number between 8 and 128.");


  var generatePassword = " ";

  for (i = 1; i <= characterNums; i++)
    var pword = Math.floor(Math.random() * characterNums.length + 1)

    generatePassword += characterNums.charAt(characterNums)
  }
  return generatePassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
