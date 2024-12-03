document.getElementById("btn").addEventListener("click",setitem);

function  setitem(e){
    e.preventDefault();

    let myusername = document.getElementById("username").value;
    let myemail = document.getElementById("email").value;
    let mymobile = document.getElementById("mobile").value;
    let mypsw = document.getElementById("password").value;
    let cpsw = document.getElementById("psw").value;

    if(myusername== "" || myemail== "" || mymobile=="" || mypsw== "" || cpsw== "" ){
        window.alert("All entity should be filled ");
        return;
    }
    else if(mypsw != cpsw){
        window.alert("password not matched ");
        return;
    }

    localStorage.setItem("username",myusername);
    localStorage.setItem("email",myemail);
    localStorage.setItem("mobileNo",mymobile);
    localStorage.setItem("password",mypsw);

    window.alert("Sucessfully registerd ")
    window.location.href="display_data.html"


}
setitem();