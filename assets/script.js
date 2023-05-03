// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// series of prompts 
    var result = prompt("Please enter a value between 8-128.");
    var lowercase = prompt('Would you like to use lowercase letters in your password? Y = yes N = no')
    var uppercase = prompt('Would you liek to use uppercase letters in your password? Y = yes N = no')
    var numeric = prompt('Would you liek to use numbers in your password? Y = yes N = no')
    var specialCharacters = prompt('Would you liek to use special characters in your password? Y = yes N = no')

if (charLength < '8' && charLength > '128') {
    alert('Choose a character length between 8 & 128.')
    return generatePassword;
};

    // var lowercase = "abcdefghijklmnopqrstuvwxyz";
    
//     var random = Math.floor(Math.random() * lowercase.length);

//     console.log("RANDOM", random, lowercase[random]);
    

//     return "";
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