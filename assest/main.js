function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "" || password == "") {
		alert("Username and password are required");
		return false;
	}
	else if (username != "example" || password != "password") {
		alert("Invalid username or password");
		return false;
	}
	else {
		alert("Login successful");
		return true;
	}
}
