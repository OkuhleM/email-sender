const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3f5cd014cf488f",
      pass: "7ccf3a06ab08da"
    }
  });

  message = { 
    from: "okuhleblues@gmail.com",
    to: "lindokuhlea38@gmail.com",
    subject: "Sending an automated email from my NodeJs app",
    text: "Hello World, I did it"
}

transporter.sendMail(message,(error,info)=>{
    if(error){
        console.log(error)
    }else{
        console.log(info)
    }
})

