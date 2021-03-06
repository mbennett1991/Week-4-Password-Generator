// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*(){}[]=/,.|~?";


// Write password to the #password input
function writePassword() 
  {
  var symbolSet = "";
  var generatePassword = "";
  document.querySelector("#password").innerHTML=generatePassword;

    //Getting character confirmations

  var characterNums = prompt("How many characters would you like to add?");
  if (characterNums >= 8 && characterNums < 128)
    //Adding values to our empty string
    {
      confirmLower = confirm("Include lowercase letters in password?");
      if (confirmLower) symbolSet += lowercase;
    confirmUpper = confirm("Include uppercase letters in password?");
      if (confirmUpper) symbolSet += uppercase;
    confirmSymbols = confirm("Include symbols in password?");
      if (confirmSymbols) symbolSet += symbols; 
    confirmNumbers = confirm("Include numbers in password?");
      if (confirmNumbers) symbolSet += numbers;
    }
  
    //When an incorrect selection has been made

  else 
  {
    alert("Please select a number between 8 and 128.");
  }
  
    //For loop to randomly generate the password with/without confirmed selections

  for (i = 1; i <= characterNums; i++)
  {
  generatePassword += symbolSet [Math.floor(Math.random() * symbolSet.length)]
  };

  //Logging to console to ensure it works
  console.log(generatePassword)

//Pushing to webpage
  document.querySelector("#password").innerHTML=generatePassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) ;
