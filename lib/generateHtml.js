const fs = require('fs');
const Intern = require('./Intern');


//make filter and map methods to separate staff by station add it to ann array, then join it at the bottom.
//let's start by getting 2 managers then joining it at the module.exports
const something = staff => {
    // console.log(staff);
const interns = staff.filter(station => {
  
        if(station.role === 'Intern'){
            
            return true;
        }
        else{
            return false
        }
});
const managers = staff.filter(station =>{
    if(station.role === 'Manager'){
       
        return true;
    }
    else{
        
        return false
    }
});
const engineers = staff.filter( station =>{
    if(station.role === 'Engineer'){
        return true;
    }
    else{
        return false;
    }
})

const engineersHtml = engineers.map(({name, role, email, id, github})=>{
    return `<div class="card"> 
    <h1>${name}</h1>
    <p class="title">${role}</p>
    <p class="title">Email:<a class="title" href = "mailto:${email}?subject = Feedback&body = Message"> ${email}</a>
    </p>
    <p class="title">ID: ${id} </p>
    <p class="title">Github: <a class="title" href = ${github}>${github}</a> </p>
    
    
    <a href="#"><i class="fa fa-dribbble"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-facebook"></i></a>
    <p><button>Contact</button></p>
    </div>`
})
const managersHtml = managers.map(({name, role, email, id, officeNumber})=>{
// console.log(name)
return `<div class="card"> 
<h1>${name}</h1>
<p class="title">${role}</p>
<p class="title">Email:<a class="title" href = "mailto:${email}?subject = Feedback&body = Message"> ${email}</a>
</p>
<p class="title">ID: ${id} </p>
<p class="title">Office Number: ${officeNumber} </p>


<a href="#"><i class="fa fa-dribbble"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
<a href="#"><i class="fa fa-linkedin"></i></a>
<a href="#"><i class="fa fa-facebook"></i></a>
<p><button>Contact</button></p>
</div>`
})
const internsHtml = interns.map(({name, role, email, id, school})=>{
    // console.log(name)
    return `<div class="card"> 
    <h1>${name}</h1>
    <p class="title">${role}</p>
    <p class="title">Email:<a class="title" href = "mailto:${email}?subject = Feedback&body = Message"> ${email}</a>
</p>
    <p class="title">ID: ${id} </p>
    <p class="title">School: ${school} </p>
    
    
    <a href="#"><i class="fa fa-dribbble"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-facebook"></i></a>
    <p><button>Contact</button></p>
    </div>`
    })

    return `${managersHtml.join('')} ${internsHtml.join('')} ${engineersHtml.join('')}`
}



module.exports = staff => {
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
   <body>
   <div id = 'container'>
  ${something(staff)}
  </div>
  </body>
  </html>
   `;
}






