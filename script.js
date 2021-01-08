// Assignment Code
var generateBtn = document.querySelector("#generate");

// var lowerCase = str.split("abcdefghijklmnopqrstuvwxyz");
// var upperCase = str.split("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
// var num = str.split("1234567890");
// var sym = str.split("!@#$%&*_");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var sym = "!@#$%&*_";
var pwd = "";

// Write password to the #password input
function writePassword() {
  var charLength = prompt("Select character length between 8 and 128");

  if (charLength < 8 || charLength > 128) {
    writePassword();
  } else {
    //console.log("Hello")
    //alert("You choose" + charLength + "characters")
    document.getElementById("password").textContent = createPw(charLength);
  }

  // console.log("user choose x characters", charLength )
  //   while (charLength < 8 || charLength > 128);

  console.log("user choose x characters", charLength);
}

function createPw(x) {
  var upperCaseCheck = confirm("Do you want uppercase characters?");
  var lowerCaseCheck = confirm("Do you want lowercase characters?");
  var numberCheck = confirm("Do you want number characters?");
  var symCheck = confirm("Do you want special characters?");
  var availableChars = [];
  var pwd = "";
  if (lowerCaseCheck) {
    //push the lowercase array into charArr
    availableChars.push(lowerCase);
  }
  if (upperCaseCheck) {
    availableChars.push(upperCase);
  }
  if (numberCheck) {
    availableChars.push(num);
  }
  if (symCheck) {
    availableChars.push(sym);
  }
  if (!(lowerCaseCheck || upperCaseCheck || numberCheck || symCheck)) {
    alert("You need to select at least one character set.");
    createPw(x);
  } else {
    for (var i = 0; i < x; i++) {
      var passwordChar = availableChars[Math.floor(Math.random() * availableChars.length)];
      pwd += passwordChar[Math.floor(Math.random() * passwordChar.length)];
    }
    return pwd;
  }
}

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
