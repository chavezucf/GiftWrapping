const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'emilyschristmasmagic@gmail.com',
        pass: 'Anika123Goo#'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const mailOptions = {
            from: 'Order Request <emilyschristmasmagic@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: 'emilyschristmasmagic@gmail.com',
            subject: 'Order Request From: ' + name , 
            html: `<h1>Order Request From: ` + name +`</h1>` 
                    + `<h2>Email: ` + email +`</h2>` 
                    + `<h2>Message: </h2>` 
                    + `<p>` + message +`</p>` 
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});
