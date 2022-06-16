// Global variables and consts to be used for checking user criteria and generating password 
var numberChars = "0123456789";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
const specialChars = /[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  alert("Welcome to my password generator! Before we can generate a password, please specify your password criteria: ");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Get Password Length from user function
var getUserInputLength = function(){
  var passwordLength = window.prompt('Please input the length of your password (minimum 8 characters, maximum 128 characters): ');
  // If password is not within bounds or not a number, display error alert and get correct input
  if(passwordLength < 8 || passwordLength > 128 || passwordLength == '' || isNaN(passwordLength)){
    window.alert("Please type a length within the bounds (minimum 8 characters, maximum 128 characters): ");
    return getUserInputLength();
  }
  return passwordLength;
}

// function to check if user wants lowercase characters in password
var wantLowerCase = function(){

  var userResponse = window.prompt('Please specify whether you would like to include lowercase characters in your password. Type "Yes" or "No": ');
  
  // If user response is yes, return the lowerChars string to be used in the password generator
  // If user response is no, return empty string
  // Otherwise, please enter a valid input
  if(userResponse.toUpperCase() === "YES"){
    return lowerChars;
  }else if(userResponse.toUpperCase() === "NO"){
    return '';
  }else if(userResponse.toUpperCase() !== 'YES' || userResponse.toUpperCase() !== 'NO'){
    window.alert("Please enter a valid input. ('Yes' or 'No')");
    return wantLowerCase();
  }

}

// function to check if user wants uppercase characters in password
var wantUpperCase = function(){

  var userResponse = window.prompt('Please specify whether you would like to include uppercase characters in your password. Type "Yes" or "No": ');
  
  // If user response is yes, return the upperChars string to be used in the password generator
  // If user response is no, return empty string
  // Otherwise, please enter a valid input
  if(userResponse.toUpperCase() === "YES"){
    return upperChars;
  }else if(userResponse.toUpperCase() === "NO"){
    return '';
  }else if(userResponse.toUpperCase() !== 'YES' || userResponse.toUpperCase() !== 'NO'){
    window.alert("Please enter a valid input. ('Yes' or 'No')");
    return wantUpperCase();
  }

}

// function to check if user wants numeric characters in password
var wantNumeric = function(){

  var userResponse = window.prompt('Please specify whether you would like to include numeric characters in your password. Type "Yes" or "No": ');

  // If user response is yes, return the numberChars string to be used in the password generator. 
  // If user response is no, return empty string
  // Otherwise, please enter a valid input
  if(userResponse.toUpperCase() === "YES"){
    return numberChars;
  }else if(userResponse.toUpperCase() === "NO"){
    return '';
  }else if(userResponse.toUpperCase() !== 'YES' || userResponse.toUpperCase() !== 'NO'){
    window.alert("Please enter a valid input. ('Yes' or 'No')");
    return wantNumeric();
  }

}

// function to check if user wants special characters in password
var wantSpecialChars = function(){

  var userResponse = window.prompt('Please specify whether you would like to include special characters in your password. Type "Yes" or "No": ');
  
  // If user response is yes, return the specialChars string to be used in the password generator
  // If user response is no, return empty string
  // Otherwise, please enter a valid input
  if(userResponse.toUpperCase() === "YES"){
    return specialChars;
  }else if(userResponse.toUpperCase() === "NO"){
    return '';
  }else if(userResponse.toUpperCase() !== 'YES' || userResponse.toUpperCase() !== 'NO'){
    window.alert("Please enter a valid input. ('Yes' or 'No')");
    return wantSpecialChars();
  }

}

// function to generate password 
function generatePassword(){

  //Password starts as empty string and will get popolated in the for loop below 
  var password = ' ';
  var passLength = getUserInputLength();
  var lowerCase = wantLowerCase();
  var upperCase = wantUpperCase();
  var passNumeric = wantNumeric();
  var passSpecial = wantSpecialChars();
  
  //Add all returned chars from helper functions into one string to be used in 
  //for loop to generate the password
  var allChars = lowerCase + upperCase + passNumeric + passSpecial;

  if(allChars === ''){
    window.alert("Please type 'Yes' for at least one password criteria. ");
    return generatePassword();
  }
  //This for loop generates a password based on random values from 'allChars' that will be added to  the 'password' variable
  for ( let i = 0; i < passLength; i++ ) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
