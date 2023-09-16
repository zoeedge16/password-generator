// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

    var passwordLength = (prompt("Please enter a value between 8-128."));
    

    if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
        alert('Choose a character length between 8 & 128.');
        return '';
    };

    var includeLowercase = confirm('Include Lowercase letters?');
    var includeUppercase = confirm('Include Uppercase letters?');
    var includeNumeric = confirm('Include numeric characters?');
    var includeSpecial = confirm('Include special characters?');

    if (!includeLowercase && !includeNumeric && !includeSpecial && !includeUppercase) {
        alert('At least one character type should be selected');
        return '';
    }

    var allCharacters = '';
    if (includeLowercase) allCharacters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumeric) allCharacters += '0123456789';
    if (includeSpecial) allCharacters += '!@#$%^&*()_-+[]{};:<>?';
    if (includeUppercase)  allCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var generatedPassword = '';
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * allCharacters.length);
        generatedPassword += allCharacters.charAt(randomIndex);
    }

return generatedPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);