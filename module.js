// The User() function serves as an outer scope that holds the variables
// username and password, as well as the inner doLogin() function;
// these are all private inner details of this User module that cannot
// be accessed from the outside world.

function User(){
	var username, password;

	function doLogin(user, pw){
		username = user;
		password = pw;
		console.log(username, password);
		// do rest of login work
	}

	var publicAPI = {
		login: doLogin
	}

	return publicAPI;
}

// crate a User module instance
var fred = User();
fred.login("fred","fredspw");