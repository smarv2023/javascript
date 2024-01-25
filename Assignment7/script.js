// Custom JavaScript object for survey results
var surveyResult ={
    email: "",
    age: "",
    color: "",

    // Function to display results
    sayResult: function () {
        var result = document.getElementById('usermsg');
        var resultText = "Success!\n\nThank you for taking the survey.\n\nHere are your results:\n\n" +
            "Email: " + this.email + "\n" +
            "Age: " + this.age + "\n" +
            "Color choice: " + this.color + "\n";

        
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
    //var color =document.querySelector('input[name="color"]:checked');
    var color=document.getElementById("colorSelect");
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
    if (!color) {
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
        surveyResult.color = color.value;
        surveyResult.sayResult();
        document.getElementById("form").style.display="none";
        document.getElementById("backBtn").style.display="block";
        document.getElementById("clearCookie").style.display="block";
        //checkCookie(document.querySelector('input[name=\'color\']:checked').value);
        checkCookie(color.value);
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

/**
 * Cookies settings
 */

function setCookie(color, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = color + '=' + value + expires + '; path=/';
}

function getCookie(color) {
    var colorName = color + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(colorName) === 0) {
            return cookie.substring(colorName.length, cookie.length);
        }
    }
    return null;
}

// Update or initialize the vote for the chosen color
function checkCookie(chosenColor) {
    //console.log(chosenColor);
    var colorVotes = {}; //Object to store all color and count
    var allVotes = getCookie('colorVotes');

    if (allVotes) {
        colorVotes = JSON.parse(allVotes);
    }

    // If the chosen color value is null value or new color it will set to 0 then + 1
    // If already existing then + 1
    colorVotes[chosenColor] = (colorVotes[chosenColor] ?? 0) + 1; 

    // Save the updated color votes in the cookie
    setCookie('colorVotes', JSON.stringify(colorVotes), 1);

    // Display results
    displayResults(colorVotes);
}

function displayResults(colorVotes) {
    // Display results in the "totalresults" div
    var totalResultsDiv = document.getElementById('totalResults');
    totalResultsDiv.innerHTML = '';

    // Sort colors by the number of votes in descending order
    var sortedColors = Object.keys(colorVotes).sort(function(a, b) {
        // Subtraction sort
        return colorVotes[b] - colorVotes[a];
    });

    // Display each color's votes and percentage
    sortedColors.forEach(function(color) {
        var votes = colorVotes[color];
        var percentage = (votes / Object.values(colorVotes).reduce((a, b) => a + b, 0) * 100).toFixed(2);
        totalResultsDiv.innerHTML += color + ': ' + votes + ' votes (' + percentage + '%)<br>';
    });
}

// Function to be called on window.onload
window.onload = function() {
    // Retrieve the cookie and display the results
    var allVotes = getCookie('colorVotes');
    if (allVotes) {
        var colorVotes = JSON.parse(allVotes);
        displayResults(colorVotes);
    }
};

function deleteCookie(){
    document.cookie = "colorVotes=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}