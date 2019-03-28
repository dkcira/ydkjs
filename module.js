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