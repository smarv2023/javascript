// Custom JavaScript object for survey results
function SurveyResult(email, age, choice) {
    this.email = email;
    this.age = age;
    this.choice = choice;

    // Function to display results
    this.sayResult = function () {
        var resultText = "Success!\n\nThank you for taking the survey.\n\nHere are your results:\n\n" +
            "Email: " + this.email + "\n" +
            "Age: " + this.age + "\n" +
            "Choice: " + this.choice + "\n";

        document.getElementById('usermsg').innerText = resultText;
    };
}

// Function to validate the form
function validateForm() {
    var errormsg = ""; // Variable to collect error messages

    // Validate email
    var email = document.getElementById('email').value;
    if (!email || !isValidEmail(email)) {
        errormsg += "Please enter a valid email address.\n";
    }

    // Validate age
    var age = document.getElementById('age').value;
    if (!age || isNaN(age) || age <= 0) {
        errormsg += "Please enter a valid age.\n";
    }

    // Validate radio buttons (choice)
    var choice = document.querySelector('input[name="choice"]:checked');
    if (!choice) {
        errormsg += "Please select a choice.\n";
    }

    // Display error messages or success
    // If no error messages it will print success
    if (errormsg !== "") {
        document.getElementById('usermsg').innerText = errormsg;
    } else {
        // Create a new SurveyResult object and display results
        var surveyResult = new SurveyResult(email, age, choice.value);
        surveyResult.sayResult();
    }
}

// Function to check if the email is valid (simple check for demonstration)
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}