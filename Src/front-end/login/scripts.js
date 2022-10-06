const getValue = () =>{
    let inputname = document.getElementById("inputname").value; 
    let inputpassword = document.getElementById("inputpassword").value; 

  let x ={
      name: inputname,
      password: inputpassword
  }

    fetch("http://127.0.0.1:8000/api/ajouter",{
   method : "POST",
   body : JSON.stringify(x),
   headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   },
      }).then(function(response){
         return response.text();
       }).then(function(text){
  console.log(text);
      }).catch(function(error){
  console.log(error);
   })
      }