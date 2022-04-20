console.log("working"); 
//create a function to access the username andd password via dom 
//accessing username and password through dom
login=()=>{
	var username=document.getElementById("username").value; 
	var password=document.getElementById("password").value; 
	if (username==="world" && password==="123"){
		location.assign("file:///C:/Users/Dhriti/Desktop/last_hope/projects/login_form/homepage.html")
	} 
	else{
		alert("bara bero ekhan theke");
	}
} 
//making the button functionable 
