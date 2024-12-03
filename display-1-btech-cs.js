// ============ section 1 ==========================
let count=0;


function editRow(id){

  document.getElementById(`eno-${id}`).removeAttribute("readonly");
  document.getElementById(`nm-${id}`).removeAttribute("readonly");

  document.getElementById(`br-${id}`).removeAttribute("readonly");

  document.getElementById(`ct-${id}`).removeAttribute("readonly");
  document.getElementById(`mb-${id}`).removeAttribute("readonly");
  document.getElementById(`fee-${id}`).removeAttribute("readonly");
  document.getElementById(`rs-${id}`).removeAttribute("readonly");
  document.getElementById(`assi-${id}`).removeAttribute("readonly");





  document.getElementById(`edit-${id}`).style.display="none";
  document.getElementById(`save-${id}`).style.display="inline";

}  
// Delete 

async function recDel(id) {

  let url=`http://localhost:3000/student-1-btech-cs-sec-1/${id}`;

  let responseObj =await fetch(url,{
      method:"DELETE",
  });

  console.log(responseObj);

  let data = await responseObj.json();
  console.log(data);
  alert("data successfully deleted");
}

// save row

async function saveRow(id){
let  myenrollment= document.getElementById(`eno-${id}`).value;
let  myname= document.getElementById(`nm-${id}`).value;
let mybranch = document.getElementById(`br-${id}`).value
let mycity= document.getElementById(`ct-${id}`).value;
let mymobile= document.getElementById(`mb-${id}`).value;
let myfees= document.getElementById(`fee-${id}`).value;
let myresult= document.getElementById(`rs-${id}`).value;
let myassignment= document.getElementById(`assi-${id}`).value;



let url =`http://localhost:3000/student-1-btech-cs-sec-1/${id}`;

let responseObj = await fetch(url,{
 method: "PUT",
 headers: {
   "Content-Type": "application/json; charset=utf-8",
 },
 body: JSON.stringify({
  enrollment: myenrollment,
  name: myname,
  branch: mybranch,
  city: mycity,
  mobile:mymobile,
  fees:myfees,
  result:myresult,
  assignment:myassignment
 })
});

console.log(responseObj);
let data = await responseObj.json();
console.log(data)
alert("Data updated sucessfully ")

}









async function datashow()
{
    let mytable= `
    <table border="1px"  bgcolor= "white">
    <tr bgcolor= "yellow">
      <th> Enrollement No. </th>
      <th> Name </th>
      <th> Branch </th>
      <th> City</th>
      <th> Mobile NO.</th>
      <th> Fees</th>
      <th> Result</th>
      <th> Assignment</th>
      <th> Action</th>
      
      


    </tr>
    `

    //url to the server to fetch data 
    let url ="http://localhost:3000/student-1-btech-cs-sec-1";

    // get data from server 
    let myobj = await fetch(url);
    console.log(myobj)  //it give response obj 

    //converting respone object to json object (array of object)
    let data = await myobj.json(); //it give array of object 
    console.log(data)

    //looping through each object in the array...
    data.map((key)=>{
        mytable += `
        <tr>
          <td> <input type="text" value="${key.enrollment}" id="eno-${key.id}" readonly></td>
          <td> <input type="text" value="${key.name}" id="nm-${key.id}" readonly></td>
          <td>  <input type="text" value="${key.branch}" id="br-${key.id}" readonly></td>
          <td> <input type="text" value="${key.city}" id="ct-${key.id}" readonly></td>
          <td> <input type="text" value="${key.mobile}" id="mb-${key.id}" readonly></td>
          <td> <input type="text" value="${key.fees}" id="fee-${key.id}" readonly></td>
          <td><input type="text" value="${key.result}" id="rs-${key.id}" readonly></td>
          <td><input type="text" value="${key.assignment}" id="assi-${key.id}" readonly></td>
          
          <td>
              <a onclick="recDel('${key.id}')" class="button button-delete">Delete</a>
              <a onclick="editRow('${key.id}')" id="edit-${key.id}" class="button button-edit">Edit</a>
              <a onclick="saveRow('${key.id}')" id="save-${key.id}" class="button button-save">Save</a>


      </td>  
  


</tr>


        `
    })
    mytable += "</table>";
    document.getElementById("demo").innerHTML= mytable;


}

datashow();

//==========  adding student in student of cs branch cs============

document.getElementById("submit1").addEventListener("click",add);

async function add(e)
{
    count+=1
    e.preventDefault(); //
    
    let enno= document.getElementById("enroll").value;
    let myname= document.getElementById("name").value;
    let mycity= document.getElementById("city").value;
    let myresult= document.getElementById("result").value;
    let mymobile= document.getElementById("mobile").value;


    let url = "http://localhost:3000/student-1-btech-cs-sec-1";

    // post request 
    try{
        let response = await fetch (url,{
            method: "POST",
           
            headers: {
              "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                enrollment: enno ,
                name: myname,
                city: mycity,
                result: myresult,
                mobile:mymobile,
                branch:"CS"

            })
        })

        console.log(response); // response object

        let value = await response.json();
        console.log(value);
        alert("data sucessfully sent")
    } catch (error){
        console.log(error);
        alert("error occured while sending data ")
    }

    
}


//============== section 2 ==================================================

function editRow1(id){

  document.getElementById(`eno-${id}`).removeAttribute("readonly");
  document.getElementById(`nm-${id}`).removeAttribute("readonly");

  document.getElementById(`br-${id}`).removeAttribute("readonly");

  document.getElementById(`ct-${id}`).removeAttribute("readonly");
  document.getElementById(`mb-${id}`).removeAttribute("readonly");
  document.getElementById(`fee-${id}`).removeAttribute("readonly");
  document.getElementById(`rs-${id}`).removeAttribute("readonly");
  document.getElementById(`assi-${id}`).removeAttribute("readonly");





  document.getElementById(`edit-${id}`).style.display="none";
  document.getElementById(`save-${id}`).style.display="inline";

}  
// Delete 

async function recDel1(id) {

  let url=`http://localhost:3000/student-1-btech-cs-sec-2/${id}`;

  let responseObj =await fetch(url,{
      method:"DELETE",
  });

  console.log(responseObj);

  let data = await responseObj.json();
  console.log(data);
  alert("data successfully deleted");
}

// save row

async function saveRow1(id){
let  myenrollment= document.getElementById(`eno-${id}`).value;
let  myname= document.getElementById(`nm-${id}`).value;
let mybranch = document.getElementById(`br-${id}`).value
let mycity= document.getElementById(`ct-${id}`).value;
let mymobile= document.getElementById(`mb-${id}`).value;
let myfees= document.getElementById(`fee-${id}`).value;
let myresult= document.getElementById(`rs-${id}`).value;
let myassignment= document.getElementById(`assi-${id}`).value;



let url =`http://localhost:3000/student-1-btech-cs-sec-2/${id}`;

let responseObj = await fetch(url,{
 method: "PUT",
 headers: {
   "Content-Type": "application/json; charset=utf-8",
 },
 body: JSON.stringify({
  enrollment: myenrollment,
  name: myname,
  branch: mybranch,
  city: mycity,
  mobile:mymobile,
  fees:myfees,
  result:myresult,
  assignment:myassignment
 })
});

console.log(responseObj);
let data = await responseObj.json();
console.log(data)
alert("Data updated sucessfully ")

}









async function datashow1()
{
    let mytable= `
    <table border="1px"  bgcolor= "white">
    <tr bgcolor= "yellow">
      <th> Enrollement No. </th>
      <th> Name </th>
      <th> Branch </th>
      <th> City</th>
      <th> Mobile NO.</th>
      <th> Fees</th>
      <th> Result</th>
      <th> Assignment</th>
      <th> Action</th>
      
      


    </tr>
    `

    //url to the server to fetch data 
    let url ="http://localhost:3000/student-1-btech-cs-sec-2";

    // get data from server 
    let myobj = await fetch(url);
    console.log(myobj)  //it give response obj 

    //converting respone object to json object (array of object)
    let data = await myobj.json(); //it give array of object 
    console.log(data)

    //looping through each object in the array...
    data.map((key)=>{
        mytable += `
        <tr>
          <td> <input type="text" value="${key.enrollment}" id="eno-${key.id}" readonly></td>
          <td> <input type="text" value="${key.name}" id="nm-${key.id}" readonly></td>
          <td>  <input type="text" value="${key.branch}" id="br-${key.id}" readonly></td>
          <td> <input type="text" value="${key.city}" id="ct-${key.id}" readonly></td>
          <td> <input type="text" value="${key.mobile}" id="mb-${key.id}" readonly></td>
          <td> <input type="text" value="${key.fees}" id="fee-${key.id}" readonly></td>
          <td><input type="text" value="${key.result}" id="rs-${key.id}" readonly></td>
          <td><input type="text" value="${key.assignment}" id="assi-${key.id}" readonly></td>
          
          <td>
              <a onclick="recDel1('${key.id}')" class="button button-delete">Delete</a>
              <a onclick="editRow1('${key.id}')" id="edit-${key.id}" class="button button-edit">Edit</a>
              <a onclick="saveRow1('${key.id}')" id="save-${key.id}" class="button button-save">Save</a>


      </td>  
  


</tr>


        `
    })
    mytable += "</table>";
    document.getElementById("demo3").innerHTML= mytable;


}

datashow1();

//==========  adding student in student of cs branch cs============

document.getElementById("submit2").addEventListener("click",add1);

async function add1(e)
{
  count+=1;
    e.preventDefault(); //
    
    let enno= document.getElementById("enroll2").value;
    let myname= document.getElementById("name2").value;
    let mycity= document.getElementById("city2").value;
    let myresult= document.getElementById("result2").value;
    let mymobile= document.getElementById("mobile2").value;


    let url = "http://localhost:3000/student-1-btech-cs-sec-2";

    // post request 
    try{
        let response = await fetch (url,{
            method: "POST",
           
            headers: {
              "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                enrollment: enno ,
                name: myname,
                city: mycity,
                result: myresult,
                mobile:mymobile,
                branch:"CS"

            })
        })

        console.log(response); // response object

        let value = await response.json();
        console.log(value);
        alert("data sucessfully sent")
    } catch (error){
        console.log(error);
        alert("error occured while sending data ")
    }

    

}

document.getElementById("total1").innerHTML=count;








