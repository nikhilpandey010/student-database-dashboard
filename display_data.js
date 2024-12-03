document.getElementById("submit").addEventListener("click",display);

function display(e){
   e.preventDefault();
   
  let myyear= document.getElementById("year").value;
  let mycourse= document.getElementById("course").value;

  let mysem= document.getElementById("sem").value;
  let mybranch= document.getElementById("branch").value;

  if( myyear == "" ||  mycourse == "" || mysem == ""  || mybranch == ""){
    alert("All entity should be filled ");
    return;
  }
  if(myyear=="1"){
    if(mycourse=="B-Tech"){
        if(mybranch == "CS"){
            window.location.href="display_1-btech-cs.html";
        }
    }
    else if(mycourse== "BSC"){
        if(mybranch == "science"){
            window.location.href = "display_1-bsc-sci.html";
        }
    }
   
  }
  else if(myyear == "2"){
    if(mycourse=="B-tech"){
        if(mybranch == "cs"){
            window.location.href="display_2-btech-cs.html"
        }
    }
    else if(mycourse== "BSC"){
        if(mybranch == "science"){
            window.location.href = "display_2-bsc-sci.html"
        }
    }
  }

  else if(myyear == "3"){
    if(mycourse=="B-tech"){
        if(mybranch == "cs"){
            window.location.href="display_1-btech-cs.html"
        }
    }
    else if(mycourse== "BSC"){
        if(mybranch == "science"){
            window.location.href = "display_1-bsc-sci.html"
        }
    }
  }

  else if(myyear == "4"){
    if(mycourse=="B-tech"){
        if(mybranch == "cs"){
            window.location.href="display_1-btech-cs.html"
        }
    }
    else if(mycourse== "BSC"){
        if(mybranch == "science"){
            window.location.href = "display_1-bsc-sci.html"
        }
    }
  }
  

  
  


}