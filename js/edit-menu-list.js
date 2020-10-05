function validate()
		{
			var foodName=document.getElementById('fname').value;
			var price=document.getElementById("price").value;
			var dateOL=document.getElementById("dateofl").value;
			var category=document.getElementById("types").value;
			if(foodName=="")
			{
				alert("Item name is required");
			}
			else if(price=="")
			{
				alert("Price is required");
			}
			else if(dateOL=="")
			{
				alert("Date of launch is required");
			}
			else if(category=="0");
			{
				alert("Category is required");
			}
			else{
			window.href="edit-menu-item-status.html";
			}
		}