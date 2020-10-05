function displayLogin()
{
	var userName=document.getElementById('user-name').value;
	var userPassword=document.getElementById('pass').value;
	if(userName=="John" && userPassword=="pass1234")
	{
		alert("Login SUCCESSFULL");
		location.href="menu-item-list-customer.html";
		return false;
	}
	else if(userName == "Admin" && userPassword == "admin1234")
	{
		alert("Login Successfull");
		location.href="menu-item-list-admin.html";
		return false;
	}
	
}