const fs = require('fs');


//make filter and map methods to separate staff by station add it to ann array, then join it at the bottom.
//let's start by getting 2 managers then joining it at the module.exports
const something = staff => {
    console.log(staff);
const managerArr = staff.map(({name, email, id, role, officeNumber})=>{
console.log(name)
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Document</title>
</head>
<div class="card">
    
    <h1>${name}</h1>
    <p class="title">${role}</p>
    <p class="title">Email: ${email}
    <a href="dnatale667@gmail.com"><i class="title"></i></a>
    </p>
    <p class="title">ID: ${id} </p>
    <p class="title">Office Number: ${officeNumber} </p>


    <a href="#"><i class="fa fa-dribbble"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-facebook"></i></a>
    <p><button>Contact</button></p>
  </div>
</body>
</html>`
})


    return `${managerArr.join(',')}`
}



module.exports = staff => {
   return `${staff[0].name}, ${staff[0].id}, ${staff[0].role}, ${staff[0].id}, 
  ${something(staff)}
   
   `;
}






