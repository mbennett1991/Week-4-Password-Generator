// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.onclick = function() {

  var characterNums = prompt("How many characters would you like to add?");
    if (characterNums >= 8 && characterNums < 128) {
      var randomLower = alert("Would you like to add lowercase letters to password?");
      var randomUpper = alert("Would you like to add uppercase letters to password?");
      var randomSymbol = alert("Would you like to include symbols in password?");
    }

   else {
      prompt("Please select a number between 8 and 128.");
    };


}

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
  var symbols = "!@#$%^&*(){}[]+<>/,.=-_~`.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
