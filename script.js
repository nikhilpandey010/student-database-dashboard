document.getElementById("login").addEventListener("click",display);

function display(e){
   e.preventDefault();
   
  let username= document.getElementById("username").value;
  let password= document.getElementById("password").value;

  let myusername= localStorage.getItem("username");
  let mypassword= localStorage.getItem("password");

  if( username == "" ||  password == ""){
    alert("All entity should be filled ");
    return;
  }
  else if(username!=myusername || password != mypassword){
    alert("User name or password inValid");
    return;
  }

  window.alert("sucessfully login")
  window.location.href="display_data.html";



}

// function registration(){
//     window.location.href="display_data.html";

// }