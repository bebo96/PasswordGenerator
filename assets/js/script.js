// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

var getUserInputLength = function(){
  var passwordLength = window.prompt('Please input the length of your password (minimum 8 characters, maximum 128 characters): ');
  
  if(passwordLength < 8 || passwordLength > 128 || passwordLength == '' || isNaN(passwordLength)){
    window.alert("Please type a length within the bounds (minimum 8 characters, maximum 128 characters): ");
    // use return to call it again and stop the rest of this function from running
    return getUserInputLength();
  }
  return passwordLength;
}

var wantLowerCase = function(){

  var userResponse = window.prompt('Please specify whether you would like to include lowercase characters in your password. Type "Yes" or "No": ');
  if(userResponse.toUpperCase() === "YES"){
    console.log("YES");
    return userResponse.toUpperCase();
  }else if(userResponse.toUpperCase() === "NO"){
    console.log("NO");
    return userResponse.toUpperCase();
  }else if(userResponse.toUpperCase() !== 'YES' || userResponse.toUpperCase() !== 'NO'){
    window.alert("Please enter a valid input. ('Yes' or 'No')");
    return wantLowerCase();
  }

}

var wantUpperCase = function(){

  var userResponse = window.prompt('Please specify whether you would like to include uppercase characters in your password. Type "Yes" or "No": ');
  if(userResponse.toUpperCase() === "YES"){
    console.log("YES");
    return userResponse.toUpperCase();
  }else if(userResponse.toUpperCase() === "NO"){
    console.log("NO");
    return userResponse.toUpperCase();
  }else if(userResponse.toUpperCase() !== 'YES' || userResponse.toUpperCase() !== 'NO'){
    window.alert("Please enter a valid input. ('Yes' or 'No')");
    return wantUpperCase();
  }

}

var wantNumeric = function(){

  var userResponse = window.prompt('Please specify whether you would like to include numeric characters in your password. Type "Yes" or "No": ');
  if(userResponse.toUpperCase() === "YES"){
    console.log("YES");
    return userResponse.toUpperCase();
  }else if(userResponse.toUpperCase() === "NO"){
    console.log("NO");
    return userResponse.toUpperCase();
  }else if(userResponse.toUpperCase() !== 'YES' || userResponse.toUpperCase() !== 'NO'){
    window.alert("Please enter a valid input. ('Yes' or 'No')");
    return wantNumeric();
  }

}

var wantSpecialChars = function(){

  var userResponse = window.prompt('Please specify whether you would like to include special characters in your password. Type "Yes" or "No": ');
  if(userResponse.toUpperCase() === "YES"){
    console.log("YES");
    return userResponse.toUpperCase();
  }else if(userResponse.toUpperCase() === "NO"){
    console.log("NO");
    return userResponse.toUpperCase();
  }else if(userResponse.toUpperCase() !== 'YES' || userResponse.toUpperCase() !== 'NO'){
    window.alert("Please enter a valid input. ('Yes' or 'No')");
    return wantSpecialChars();
  }

}

function generatePassword(){
  var password = 0;
  alert("Welcome to my password generator! Before we can generate a password, please specify your password criteria: ");
  var passLength = getUserInputLength();
  var lowerCase = wantLowerCase();
  var upperCase = wantUpperCase();
  var passNumeric = wantNumeric();
  var passSpecial = wantSpecialChars();
  
  
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
