<?php
    $title = "Index";
    require_once 'includes/header.php';
?>

        <h1 class ="text-center">Form</h1>

        <form method = "post" action ="">
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username">
                <div id = "username_error" class="text-danger"></div>
            </div>
            <div class="row g-3">
                <div class="col">
                    <label for="firstname" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstname" name="firstname">
                    <div id = "firstname_error" class="text-danger"></div>
                </div>
                <div class="col">
                    <label for="lastname" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastname" name="lastname">
                    <div id = "lastname_error" class="text-danger"></div>
                </div>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password">
                <div id = "password_error" class="text-danger"></div>
            </div>
            <div class="mb-3">
                <label for="c_password" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="c_password" name="c_password">
                <div id = "c_password_error" class="text-danger"></div>
            </div>
            <div class="mb-3">                   
                <label for="email" class="form-label">Email address</label>
                <input type="text" class="form-control" id="email" name="email">
                <div id = "email_error" class="error"></div>
            </div>
            <div class="mb-3">
                <label for="province" class="form-label">Select A Province</label>
                <select class="form-select" aria-label="Default select example" id ="province" name="province">
                                <option value="">---------</option>
								<option value="AB">Alberta</option>
								<option value="BC">British Columbia</option>
								<option value="MB">Manitoba</option>
								<option value="NB">New Brunswick</option>
								<option value="NF">Newfoundland & Labrador</option>
								<option value="NT">Northwest Territories</option>
								<option value="NS">Nova Scotia</option>
								<option value="NV">Nunavut</option>
								<option value="ON">Ontario</option>
								<option value="PE">Prince Edward Island</option>
								<option value="QC">Quebec</option>
								<option value="SK">Saskatchewan</option>
								<option value="YK">Yukon</option>               
							</select>
            </div>
            <div id = "province_error" class="text-danger"></div>
            <div class="mb-3">
                <label for="agreeTerm">I agree to the Term and Conditions</label>
				<input type="checkbox" name="agreeTerm" id="agreeTerm">
            </div>
            <div id = "agreeTerm_error" class="text-danger"></div>

            <button type="button" class="btn btn-primary" name="submit" onclick="getInput()">Submit</button>
        </form>
        <hr/>
        <h3>Output</h3>
        <div class="topMargin">
            <ul>
                <li id="username_out"></li>
                <li id="firstname_out"></li>
                <li id="lastname_out"></li>
                <li id="password_out"></li>
                <li id="c_password_out"></li>
                <li id="email_out"></li>
                <li id="province_out"></li>
                <li id="agreeTerm_out"></li>
            </ul>
        </div>
<?php
    require_once 'includes/footer.php';
?>