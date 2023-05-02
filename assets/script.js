// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var result = prompt("Please enter a value between 8-128.");
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    
    var random = Math.floor(Math.random() * lowercase.length);

    console.log("RANDOM", random, lowercase[random]);
    

    return "";
}

generatePassword()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);