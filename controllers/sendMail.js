const nodemailer=require('nodemailer');




const sendMail= async(req,res) =>{

let testAccount= await nodemailer.createTestAccount();


//connect with the smtp

let transporter= await nodemailer.createTransport({
    host:"smtp.ethereal.email",
    port:587,
    auth:{
      user:"clement.lockman0@ethereal.email",
      pass:"8R1DdXhbM5tSwXj5sz"
    },
});

///sending mail with information and its content

let info=await transporter.sendMail({
    from: "chiragagrawal75@gmail.com",
    to: "2206412@kiit.ac.in",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
    html:"<b>Yooo it is bold in html</b>",

});


console.log("Message send:%s",info.messageId);
res.send(info);
};

module.exports=sendMail;