const fs = require('fs');


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
    <div class="card">
        
        <h1>${staff.name}</h1>
        <p class="title">${staff.role}</p>
        <p class="title">Email: ${staff.email}
        <a href="dnatale667@gmail.com"><i class="title"></i></a>
        </p>
        <p class="title">ID: ${staff.id} </p>
        <p class="title">Office Number: ${staff.officeNumber} </p>


        <a href="#"><i class="fa fa-dribbble"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-facebook"></i></a>
        <p><button>Contact</button></p>
      </div>
    </body>
    </html>`;
}