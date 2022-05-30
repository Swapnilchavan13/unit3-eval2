// Add the coffee to local storage with key "coffee"
// https://masai-mock-api.herokuapp.com/coffee/menu
 async function getData(){
     let main=document.getElementById("main").value;
     let url=`https://masai-mock-api.herokuapp.com/coffee/menu`;
     let res=await fetch(url);
     let data= await res.json();
     console.log(data);

     append(data)
 }