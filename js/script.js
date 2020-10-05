function displayLogin()
{
	var userName = document.getElementById('user-name').value;
	var userPassword = document.getElementById('pass').value;
	if(userName == "John" && userPassword == "pass1234")
	{
		alert("Login SUCCESSFULL");
		window.location="menu-item-list-customer.html";
		return false;
	}
	if(userName == "Admin" && userPassword == "admin1234")
	{
		alert("Login Successfull");
		window.location="menu-item-list-admin.html";
		return false;
	}
	
}