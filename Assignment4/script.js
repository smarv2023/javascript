// Custom JavaScript object for survey results
var surveyResult ={
    email: "",
    age: "",
    choice: "",

    // Function to display results
    sayResult: function () {
        var result = document.getElementById('usermsg');
        var resultText = "Success!\n\nThank you for taking the survey.\n\nHere are your results:\n\n" +
            "Email: " + this.email + "\n" +
            "Age: " + this.age + "\n" +
            "Choice: " + this.choice + "\n";

        
        result.innerText = resultText;
        result.className = "text-success";
    }
};
/**Script for the validation 
 * Write a function that will validate all fields when the submit button is clicked. 
 * Each is required and set a default value for the province that must be changed to be considered valid. 
 * The password and confirm password must match.
 * Output the results if valid into a div or list item, if not valid then output the missing or required fields to inform the user.
 * 
*/
var errormsg = ""; // Variable to collect error messages
// Main function of validation
function getInput(){
    // local variables
    var username = document.getElementById("username");
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var password = document.getElementById("password");
    var c_password = document.getElementById("c_password");
    var email = document.getElementById("email");
    var province = document.getElementById("province");
    var agreeTerm = document.getElementById("agreeTerm");
    var age = document.getElementById("age");
    var choice =document.querySelector('input[name="choice"]:checked');
    errormsg ="";


    // call the function to check if it is empty or if valid
    checkInput(username.id, username.value);
    validateUsername(username);

    checkInput(firstname.id, firstname.value);
    validateNames(firstname);
    checkInput(lastname.id, lastname.value);
    validateNames(lastname);

    checkInput(password.id, password.value);
    checkInput(c_password.id, c_password.value);
    checkPassword(password.id, password.value, c_password.value);

    checkInput(email.id, email.value);
    validateEmail(email);

    checkInput(province.id, province.value);
    checkInput(agreeTerm.id, agreeTerm.checked);

    // Validate age

    if (!age.value || isNaN(age.value) || age.value <= 0) {
        errormsg += "Please enter a valid age.\n";
    }

    // Validate radio buttons (choice)
    if (!choice) {
        errormsg += "Please select a choice.\n";
    }

    // If no error messages it will print success
    if (errormsg !== "") {
        var error = document.getElementById('usermsg');
        error.innerText = errormsg;
        error.className = "text-danger";
    } else {
        // Create a new SurveyResult object and display results
        surveyResult.email = email.value;
        surveyResult.age = age.value;
        surveyResult.choice = choice.value;
        surveyResult.sayResult();
        document.getElementById("form").style.display="none";
    }
  }
  
  // Check textbox if empty
  function checkInput(textId, textValue){
    if(!textValue) {
        document.getElementById(textId.concat("_error")).innerHTML = "Please fill up the " + textId;
        errormsg += "Please enter " + textId + "\n";
    } else {
        document.getElementById(textId.concat("_error")).innerHTML = "";
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
      }
    }
  }
  
  // Check password if matching
  function  checkPassword(passId, passValue, c_passValue){
    if(passValue != c_passValue){
        document.getElementById(passId.concat("_error")).innerHTML = passId + " did not matched";
    }
  }
  
  // This will validate email
  function validateEmail(email) {
    var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,4}$/;
    emailId = email.id;
    is_valid = emailRegex.test(email.value);
    if (email.value !="") {
        if (!is_valid) {
            errormsg += "Please enter a valid email address.\n";
            document.getElementById(emailId.concat("_error")).innerHTML = "Invalid " + emailId + " address";
        }
      }
  }
