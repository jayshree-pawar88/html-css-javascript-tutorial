
function mainfunction(){
let fname = document.getElementById("firstName").value;
let lname = document.getElementById("lastName").value;

function greeting(){
    const time = new Date().getHours();
    console.log(time);
    let greeting ;
    if(time<12){
        greeting = "Good Morning";
    }
    else{
        greeting = "Good Day" ;
    }
   return greeting;
}
document.getElementById("demo").innerHTML =  `${fname} ${lname}`+ " " + greeting();
 
return false;
}