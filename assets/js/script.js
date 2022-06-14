// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  alert("Welcome to my password generator! Before we can generate a password, please specify your password criteria: ");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  getUserInputLength();

  passwordText.value = password;
}



function getUserInputLength(){
  var passwordLength = window.prompt('Please input the length of your password (minimum 8 characters, maximum 128 characters): ');
  
  if(passwordLength < 8 || passwordLength > 128){
    window.alert("Please type a length within the bounds (minimum 8 characters, maximum 128 characters): ");
    // use return to call it again and stop the rest of this function from running
    return getUserInput();
  }
}

function generatePassword(){
  var password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
