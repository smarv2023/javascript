
/**Script for the validation 
 * Write a function that will validate all fields when the submit button is clicked. 
 * Each is required and set a default value for the province that must be changed to be considered valid. 
 * The password and confirm password must match.
 * Output the results if valid into a div or list item, if not valid then output the missing or required fields to inform the user.
 * 
*/

// Main function of validation
function getInput(){
  // local variables
  var username = document.getElementById('username');
  var firstname = document.getElementById("firstname");
  var lastname = document.getElementById("lastname");
  var password = document.getElementById("password");
  var c_password = document.getElementById("c_password");
  var email = document.getElementById("email");
  var province = document.getElementById("province");
  var agreeTerm = document.getElementById("agreeTerm");

  // call the function to check if it is empty

  checkInput(username.id, username.value);
  checkInput(firstname.id, firstname.value);
  checkInput(lastname.id, lastname.value);
  checkInput(password.id, password.value);
  checkInput(c_password.id, c_password.value);
  checkInput(email.id, email.value);
  checkInput(province.id, province.value);
  checkInput(agreeTerm.id, agreeTerm.checked);

  // validate all the input if valid or invalid
  validateUsername(username);
  validateNames(firstname);
  validateNames(lastname);
  validateEmail(email);
  checkPassword(password.id, password.value, c_password.value);

}

// Check textbox if empty
function checkInput(textId, textValue){
  if(!textValue) {
      document.getElementById(textId.concat("_error")).innerHTML = "Please fill up the " + textId;
      document.getElementById(textId.concat("_out")).innerHTML = textId + ": missing";
      document.getElementById(textId.concat("_out")).className = "text-danger";
  } else {
      document.getElementById(textId.concat("_error")).innerHTML = "";
      document.getElementById(textId.concat("_out")).innerHTML = textId + ": " + textValue;
      document.getElementById(textId.concat("_out")).className = "text-success";
  }
}

// This will validate username
function validateUsername(username){
  var usernameRegex = /^[a-zA-Z0-9]+$/;
  usernameId = username.id;
  usernameValue = username.value;
  is_name_valid = usernameRegex.test(usernameValue);
  if(usernameValue != ""){
    if(!is_name_valid) {
      document.getElementById(usernameId.concat("_error")).innerHTML = "Invalid " + usernameId;
      document.getElementById(usernameId.concat("_out")).innerHTML = usernameId + ": " + "'" + usernameValue + "'" + " -Invalid username";
      document.getElementById(usernameId.concat("_out")).className = "text-danger";
    }
  }
}

// This will validate the firstname and lastname
function validateNames(names){
  var nameRegex = /^(?!-)[a-zA-Z-]*[a-zA-Z]$/;
  nameId = names.id;
  nameValue = names.value;
  is_name_valid = nameRegex.test(nameValue);
  if(nameValue != ""){
    if(!is_name_valid) {
      document.getElementById(nameId.concat("_error")).innerHTML = "Invalid " + nameId;
      document.getElementById(nameId.concat("_out")).innerHTML = nameId + ": " + "'" +  nameValue + "'" + " -Invalid name";
      document.getElementById(nameId.concat("_out")).className ="text-danger";
    }
  }
}

// Check password if matching
function  checkPassword(passId, passValue, c_passValue){
  if(passValue != c_passValue){
      document.getElementById(passId.concat("_error")).innerHTML = passId + " did not matched";
      document.getElementById(passId.concat("_out")).innerHTML = passId + ": " + "'" + passValue + "'" + " -did not matched";
      document.getElementById(passId.concat("_out")).className ="text-danger";
  }
}

// This will validate email
function validateEmail(email) {
  var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,4}$/;
  emailValue = email.value;
  emailId = email.id;
  is_valid = emailRegex.test(emailValue);
  if(emailValue != "") {
    if(!is_valid){
      document.getElementById(emailId.concat("_error")).innerHTML = "Invalid " + emailId + " address";
      document.getElementById(emailId.concat("_out")).innerHTML = emailId + ": " + "'" + emailValue + "'" + " -Invalid email address";
      document.getElementById(emailId.concat("_out")).className = "text-danger";
    }
  }
}