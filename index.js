const path = require('path')
const express = require('express')
require('colors')
require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

// Serve Frontend
if (process.env.NODE_ENV ==="production"){

    app.use(express.static("frontend/build"));

  

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));

    })
}
else{
  res.send({"iliash":"how are you"})
}

/////Email sending//////
const nodemailer = require('nodemailer');

app.post('/mail',(req,res)=>{

    let sendmail=req.body.sendmail;
    let subject=req.body.subject;
    let text=req.body.text;
    console.log(sendmail);
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'softechvideo@gmail.com',
        pass: '**************'
    }
});

let mailDetails = {
    from: 'softechvideo@gmail.com',
    to: sendmail,
    subject: subject,
    text: text,
   /* attachments: [
            {
                filename: 'photo/iliash.jpg',
                path: 'photo/iliash.jpg'
            },
         ]
         */

};

mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log('Email sent successfully');
        res.send(data)
    }
});
})





app.listen(PORT, () => console.log(`Server started on port ${PORT}`))



