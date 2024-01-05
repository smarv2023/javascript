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

// Function to validate the form
function validateForm() {
    var errormsg = ""; // Variable to collect error messages

    // Validate email
    surveyResult.email = document.getElementById('email').value;
    if (!surveyResult.email || !isValidEmail(surveyResult.email)) {
        errormsg += "Please enter a valid email address.\n";
    }

    // Validate age
    surveyResult.age = document.getElementById('age').value;
    if (!surveyResult.age || isNaN(surveyResult.age) || age <= 0) {
        errormsg += "Please enter a valid age.\n";
    }

    // Validate radio buttons (choice)
    surveyResult.choice = document.querySelector('input[name="choice"]:checked').value;
    if (!surveyResult.choice) {
        errormsg += "Please select a choice.\n";
    }

    // Display error messages or success
    // If no error messages it will print success
    if (errormsg !== "") {
        var error = document.getElementById('usermsg');
        error.innerText = errormsg;
        error.className = "text-danger";
    } else {
        // Create a new SurveyResult object and display results
        surveyResult.sayResult();
    }
}

// Function to check if the email is valid (simple check for demonstration)
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}