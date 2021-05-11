//***********validation for email */
function ValidateEmail(emailValue) {
	var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if (emailValue.match(mailformat)) {
		return true;
	} else {
		return false;
	}
}
//********validation for userId */
function ValidateUserId(fNameValue, lNameValue, userIdValue) {
	var userIdFormat = `${fNameValue}.${lNameValue}`;
	if (userIdValue.match(userIdFormat)) {
		return true;
	} else {
		return false;
	}
}

//*******validation for password */
function validatePassword(passwordValue) {
	var validatePassword = /[*@!#%&()^~{}]+/;
	if (passwordValue.match(validatePassword)) {
		return true;
	} else {
		return false;
	}
}

//************validation for confirm password */
function validateConPassword(passwordValue, conPasswordValue) {
	if (conPasswordValue.match(passwordValue)) {
		return true;
	} else {
		return false;
	}
}
// registration validation
function formRegistrationValidation() {
	const firstName = document.registerForm.firstName.value;
	const lastName = document.registerForm.lastName.value;
	const email = document.registerForm.email.value;
	const userId = document.registerForm.userId.value;
	const password = document.registerForm.password.value;
	const conPassword = document.registerForm.conPassword.value;

	const firstNameError = document.getElementById("firstNameError");
	const lastNameError = document.getElementById("lastNameError");
	const emailError = document.getElementById("emailError");
	const userIdError = document.getElementById("userIdError");
	const passwordError = document.getElementById("passwordError");
	const conPasswordError = document.getElementById("conPasswordError");
	const correct = document.getElementById("correct");
	// check for all
	if (
		firstName.length === 0 &&
		lastName.length === 0 &&
		email.length === 0 &&
		userId.length === 0 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		firstNameError.innerHTML = "Please Enter Your FirstName";
		lastNameError.innerHTML = "Please Enter Your LastName";
		emailError.innerHTML = "Please Enter Your email";
		userIdError.innerHTML = "Please Enter Your userId";
		passwordError.innerHTML = "Please Enter Your password";
		conPasswordError.innerHTML = "Please Enter Your Confirm password";
		return false;
	}
	// check if firstname is greator than 4 char
	else if (
		firstName.length < 4 &&
		lastName.length === 0 &&
		email.length === 0 &&
		userId.length === 0 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		firstNameError.innerHTML = "Firstname should be 4 char long";
		lastNameError.innerHTML = "Please Enter Your LastName";
		emailError.innerHTML = "Please Enter Your email";
		userIdError.innerHTML = "Please Enter Your userId";
		passwordError.innerHTML = "Please Enter Your password";
		conPasswordError.innerHTML = "Please Enter Your Confirm password";
		return false;
	} else if (
		firstName.length >= 4 &&
		lastName.length === 0 &&
		email.length === 0 &&
		userId.length === 0 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		firstNameError.innerHTML = "OK";
		lastNameError.innerHTML = "lastname should be 4 char long";
		emailError.innerHTML = "Please Enter Your email";
		userIdError.innerHTML = "Please Enter Your userId";
		passwordError.innerHTML = "Please Enter Your password";
		conPasswordError.innerHTML = "Please Enter Your Confirm password";
		return false;
	} else if (
		firstName.length === 0 &&
		lastName.length < 4 &&
		email.length === 0 &&
		userId.length === 0 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		firstNameError.innerHTML = "Please Enter Your First Name";
		lastNameError.innerHTML = "Lastname should be 4 char long!";
		emailError.innerHTML = "Please Enter Your email";
		userIdError.innerHTML = "Please Enter Your userId";
		passwordError.innerHTML = "Please Enter Your password";
		conPasswordError.innerHTML = "Please Enter Your Confirm password";
		return false;
	} else if (
		firstName.length >= 4 &&
		lastName.length < 4 &&
		email.length === 0 &&
		userId.length === 0 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		firstNameError.innerHTML = "OK";
		lastNameError.innerHTML = "Lastname should be 4 char long!";
		emailError.innerHTML = "Please Enter Your email";
		userIdError.innerHTML = "Please Enter Your userId";
		passwordError.innerHTML = "Please Enter Your password";
		conPasswordError.innerHTML = "Please Enter Your Confirm password";
		return false;
	} else if (
		firstName.length === 0 &&
		lastName.length >= 4 &&
		email.length === 0 &&
		userId.length === 0 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		firstNameError.innerHTML = "Please Enter Your FirstName";
		lastNameError.innerHTML = "OK";
		emailError.innerHTML = "Please Enter Your email";
		userIdError.innerHTML = "Please Enter Your userId";
		passwordError.innerHTML = "Please Enter Your password";
		conPasswordError.innerHTML = "Please Enter Your Confirm password";
		return false;
	} else if (
		firstName.length < 4 &&
		lastName.length >= 4 &&
		email.length === 0 &&
		userId.length === 0 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		firstNameError.innerHTML = "Firstname Should be 4 char long!";
		lastNameError.innerHTML = "OK";
		emailError.innerHTML = "Please Enter Your email";
		userIdError.innerHTML = "Please Enter Your userId";
		passwordError.innerHTML = "Please Enter Your password";
		conPasswordError.innerHTML = "Please Enter Your Confirm password";
		return false;
	} else if (
		firstName.length < 4 &&
		lastName.length < 4 &&
		email.length === 0 &&
		userId.length === 0 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		firstNameError.innerHTML = "Firstname Should be 4 Char long!";
		lastNameError.innerHTML = "Lastname Should be 4 Char long!";
		emailError.innerHTML = "Please Enter Your email";
		userIdError.innerHTML = "Please Enter Your userId";
		passwordError.innerHTML = "Please Enter Your password";
		conPasswordError.innerHTML = "Please Enter Your Confirm password";
		return false;
	} else if (
		firstName.length >= 4 &&
		lastName.length >= 4 &&
		email.length === 0 &&
		userId.length === 0 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		firstNameError.innerHTML = "OK";
		lastNameError.innerHTML = "OK";
		emailError.innerHTML = "Please Enter Your email";
		userIdError.innerHTML = "Please Enter Your userId";
		passwordError.innerHTML = "Please Enter Your password";
		conPasswordError.innerHTML = "Please Enter Your Confirm password";
		return false;
	} else if (
		firstName.length === 0 &&
		lastName.length === 0 &&
		email.length > 0 &&
		userId.length === 0 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		var emailStatus = ValidateEmail(email);
		if (emailStatus == true) {
			firstNameError.innerHTML = "Please Enter a Firstname";
			lastNameError.innerHTML = "Please Enter a lastname";
			emailError.innerHTML = " OK";
			userIdError.innerHTML = "Please Enter Your userId";
			passwordError.innerHTML = "Please Enter Your password";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		} else {
			firstNameError.innerHTML = "Please Enter a Firstname";
			lastNameError.innerHTML = "Please Enter a lastname";
			emailError.innerHTML = " Email should be valid";
			userIdError.innerHTML = "Please Enter Your userId";
			passwordError.innerHTML = "Please Enter Your password";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		}
	}

	//***check email */
	else if (
		firstName.length >= 4 &&
		lastName.length >= 4 &&
		email.length > 0 &&
		userId.length === 0 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		var emailStatus = ValidateEmail(email);
		if (emailStatus === true) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "OK";
			userIdError.innerHTML = "Please Enter Your userId";
			passwordError.innerHTML = "Please Enter Your password";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		} else {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "Email should be valid";
			userIdError.innerHTML = "Please Enter Your userId";
			passwordError.innerHTML = "Please Enter Your password";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		}
	}
	//*****check for user id */
	else if (
		firstName.length === 0 &&
		lastName.length === 0 &&
		email.length === 0 &&
		userId.length < 4 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		firstNameError.innerHTML = "Please Enter Your FirstName";
		lastNameError.innerHTML = "Please Enter Your LastName";
		emailError.innerHTML = "Please Enter Your Email";
		userIdError.innerHTML = "UserId should be 4 char long!";
		passwordError.innerHTML = "Please Enter Your password";
		conPasswordError.innerHTML = "Please Enter Your Confirm password";
		return false;
	} else if (
		firstName.length >= 4 &&
		lastName.length >= 4 &&
		email.length === 0 &&
		userId.length >= 4 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		var userIdStatus = ValidateUserId(firstName, lastName, userId);
		if (userIdStatus === true) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "Please Enter Your Email";
			userIdError.innerHTML = "OK";
			passwordError.innerHTML = "Please Enter Your password";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		} else {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "Please Enter Your Email";
			userIdError.innerHTML = "UserId does'nt matched!";
			passwordError.innerHTML = "Please Enter Your password";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		}
	} else if (
		firstName.length >= 4 &&
		lastName.length >= 4 &&
		email.length === 0 &&
		userId.length < 4 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		firstNameError.innerHTML = "OK";
		lastNameError.innerHTML = "OK";
		emailError.innerHTML = "Please Enter Your Email";
		userIdError.innerHTML = "UserId must be 4 Char Long!";
		passwordError.innerHTML = "Please Enter Your password";
		conPasswordError.innerHTML = "Please Enter Your Confirm password";
		return false;
	} else if (
		firstName.length >= 4 &&
		lastName.length >= 4 &&
		email.length > 0 &&
		userId.length < 4 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		var emailStatus = ValidateEmail(email);
		if (emailStatus == true) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = " OK";
			userIdError.innerHTML = "User Id must be Greator than 4 char";
			passwordError.innerHTML = "Please Enter Your password";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		} else {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = " Email should be valid";
			userIdError.innerHTML = "User Id must be Greator than 4 char";
			passwordError.innerHTML = "Please Enter Your password";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		}
	} else if (
		firstName.length >= 4 &&
		lastName.length >= 4 &&
		email.length > 0 &&
		userId.length >= 4 &&
		password.length === 0 &&
		conPassword.length === 0
	) {
		var emailStatus = ValidateEmail(email);
		var userIdStatus = ValidateUserId(firstName, lastName, userId);
		if (emailStatus == true && userIdStatus === true) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = " OK";
			userIdError.innerHTML = "OK";
			passwordError.innerHTML = "Please Enter Your password";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		} else if (emailStatus == true && userIdStatus !== true) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = " OK";
			userIdError.innerHTML = "User Id does not match";
			passwordError.innerHTML = "Please Enter Your password";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		} else if (emailStatus !== true && userIdStatus !== true) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = " Email Should be Valid";
			userIdError.innerHTML = "User Id does not match";
			passwordError.innerHTML = "Please Enter Your password";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		} else if (emailStatus !== true && userIdStatus === true) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = " Email Should be Valid";
			userIdError.innerHTML = "OK";
			passwordError.innerHTML = "Please Enter Your password";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		}
	} else if (
		firstName.length >= 4 &&
		lastName.length >= 4 &&
		email.length > 0 &&
		userId.length >= 4 &&
		password.length < 8 &&
		conPassword.length === 0
	) {
		var emailStatus = ValidateEmail(email);
		var userIdStatus = ValidateUserId(firstName, lastName, userId);
		if (emailStatus === true && userIdStatus === true) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "OK";
			userIdError.innerHTML = "OK";
			passwordError.innerHTML = "Password must be 8 char long";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		} else if (emailStatus === true && userIdStatus != true) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "OK";
			userIdError.innerHTML = "user Id does'nt match";
			passwordError.innerHTML = "Password must be 8 char long";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		} else if (emailStatus !== true && userIdStatus !== true) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "Email should be valid";
			userIdError.innerHTML = "user Id does'nt match";
			passwordError.innerHTML = "Password must be 8 char long";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		} else if (emailStatus !== true && userIdStatus === true) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "Email should be valid";
			userIdError.innerHTML = "OK";
			passwordError.innerHTML = "Password must be 8 char long";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		}
	} else if (
		firstName.length >= 4 &&
		lastName.length >= 4 &&
		email.length > 0 &&
		userId.length >= 4 &&
		password.length >= 8 &&
		conPassword.length === 0
	) {
		var emailStatus = ValidateEmail(email);
		var userIdStatus = ValidateUserId(firstName, lastName, userId);
		var passwordStatus = validatePassword(password);
		if (
			emailStatus === true &&
			userIdStatus === true &&
			passwordStatus === true
		) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "OK";
			userIdError.innerHTML = "OK";
			passwordError.innerHTML = "OK";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		} else if (
			emailStatus === true &&
			userIdStatus === true &&
			passwordStatus !== true
		) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "OK";
			userIdError.innerHTML = "OK";
			passwordError.innerHTML = "Special character missing!";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		} else if (
			emailStatus !== true &&
			userIdStatus !== true &&
			passwordStatus !== true
		) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "Email should be valid";
			userIdError.innerHTML = "user Id does'nt match";
			passwordError.innerHTML = "Special character missing!";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		} else if (
			emailStatus !== true &&
			userIdStatus === true &&
			passwordStatus !== true
		) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "Email should be valid";
			userIdError.innerHTML = "OK";
			passwordError.innerHTML = "Special character missing!";
			conPasswordError.innerHTML = "Please Enter Your Confirm password";
			return false;
		}
	} else if (
		firstName.length >= 4 &&
		lastName.length >= 4 &&
		email.length > 0 &&
		userId.length >= 4 &&
		password.length >= 8 &&
		conPassword.length > 0
	) {
		var emailStatus = ValidateEmail(email);
		var userIdStatus = ValidateUserId(firstName, lastName, userId);
		var passwordStatus = validatePassword(password);
		var conPasswordStatus = validateConPassword(password, conPassword);
		if (
			emailStatus === true &&
			userIdStatus === true &&
			passwordStatus === true &&
			conPasswordStatus === true
		) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "OK";
			userIdError.innerHTML = "OK";
			passwordError.innerHTML = "OK";
			conPasswordError.innerHTML = "OK";
			correct.innerHTML = "All the Data You Entered is Correct!";
			return false;
		} else if (
			emailStatus === true &&
			userIdStatus === true &&
			passwordStatus === true &&
			conPasswordStatus !== true
		) {
			firstNameError.innerHTML = "OK";
			lastNameError.innerHTML = "OK";
			emailError.innerHTML = "OK";
			userIdError.innerHTML = "OK";
			passwordError.innerHTML = "OK";
			conPasswordError.innerHTML = "Confirm Password Does'nt Match!";
			return false;
		}
	}
}

//*********login validation */
function formLoginValidation() {
	const email = document.loginForm.email.value;
	const password = document.loginForm.password.value;

	const emailError = document.getElementById("loginEmailError");
	const passwordError = document.getElementById("loginPasswordError");

	if (email.length === 0 && password.length === 0) {
		emailError.innerHTML = "Email is Required!";
		passwordError.innerHTML = "Password is Required!";
		return false;
	} else if (email.length > 0 && password.length === 0) {
		var emailStatus = ValidateEmail(email);
		if (emailStatus === true) {
			emailError.innerHTML = "OK";
			passwordError.innerHTML = "Password is Required!";
			return false;
		} else {
			emailError.innerHTML = "Email must be valid";
			passwordError.innerHTML = "Password is Required!";
			return false;
		}
	} else if (email.length > 0 && password.length < 8) {
		var emailStatus = ValidateEmail(email);
		if (emailStatus === true) {
			emailError.innerHTML = "OK";
			passwordError.innerHTML = "Password Must be 8 char long!";
			return false;
		} else {
			emailError.innerHTML = "Email must be valid";
			passwordError.innerHTML = "Password Must be 8 char long";
			return false;
		}
	} else if (email.length === 0 && password.length < 8) {
		emailError.innerHTML = "Enter your Email";
		passwordError.innerHTML = "Password Must be 8 char long";
		return false;
	} else if (email.length > 0 && password.length >= 8) {
		var emailStatus = ValidateEmail(email);
		var passStaus = validatePassword(password);
		if (emailStatus === true && passStaus === true) {
			emailError.innerHTML = "OK";
			passwordError.innerHTML = "OK";
			return false;
		} else if (emailStatus !== true && passStaus === true) {
			emailError.innerHTML = "Email must be Valid";
			passwordError.innerHTML = "OK";
			return false;
		} else if (emailStatus !== true && passStaus !== true) {
			emailError.innerHTML = "Email must be Valid";
			passwordError.innerHTML = "Special character Missing!";
			return false;
		} else if (emailStatus === true && passStaus !== true) {
			emailError.innerHTML = "OK";
			passwordError.innerHTML = "Special character Missing!";
			return false;
		}
	} else if (email.length === 0 && password.length >= 8) {
		var passStaus = validatePassword(password);
		if (passStaus === true) {
			emailError.innerHTML = "Email is Required!";
			passwordError.innerHTML = "OK";
			return false;
		} else {
			emailError.innerHTML = "Email is Required!";
			passwordError.innerHTML = "Special Character Missing!";
			return false;
		}
	}
}
