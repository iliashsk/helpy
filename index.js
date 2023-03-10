const path = require('path')
const express = require('express')
require('colors')
require('dotenv').config()
const fileUpload = require("express-fileupload");
const https=require('https')
const uuid = require('uuid')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(fileUpload());

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))


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
        pass: process.env.PASS
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




///////////////////////////////helpy moto dashboard//////////////////////
const mongoose = require('mongoose');
const Vehicle = require('./models/Vehicle');

const mechanicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  }
});
const Mechanic=mongoose.model('Mechanic',mechanicSchema);

app.post('/api/mechanics',(req,res,error)=>{

const {name,email,phone}=req.body;
const mechanic=new Mechanic({
  name,
  email, 
  phone
})

mechanic.save();
console.log("mechanics added")
});
app.get('/hello',(req,res)=>{
  console.log("this is iliash")
  res.send("how are you");
})

app.get('/api/mechanics',(req,res)=>{
  Mechanic.find({},(err,mechanics)=>{
   //console.log(mechanics);
    res.send(mechanics);

}).sort({'_id':-1});
});

app.delete('/api/mechanics/:id', (req, res) => {
  Mechanic.findByIdAndDelete(req.params.id).then(() => {
    res.send('Mechanic  deleted');
    //console.log('mechanic deleted')
  }).catch(error => {
    console.log('Error deleting vehicle:', error);
    res.status(500).send('Error deleting vehicle');
  });
});




app.get('/api/vehicles', (req, res) => {
  Vehicle.find().then(vehicles => {
    res.json(vehicles);
  }).catch(error => {
    console.log('Error retrieving vehicles:', error);
    res.status(500).send('Error retrieving vehicles');
  });
});



// Retrieve a specific vehicle
app.get('/api/vehicles/:id', (req, res) => {
  Vehicle.findById(req.params.id).then(vehicle => {
    if (vehicle) {
      res.json(vehicle);
    } else {
      res.status(404).send('Vehicle not found');
    }
  }).catch(error => {
    console.log('Error retrieving vehicle:', error);
    res.status(500).send('Error retrieving vehicle');
  });
});

// Add a new vehicle
app.post('/api/vehicles', (req, res) => {
  const { make, model, year } = req.body;

  const vehicle = new Vehicle({
    make,
    model,
    year
  });

  vehicle.save().then(() => {
    res.send('Vehicle added');
  }).catch(error => {
    console.log('Error adding vehicle:', error);
    res.status(500).send('Error adding vehicle');
  });
});

// Update an existing vehicle
app.put('/api/vehicles/:id', (req, res) => {
  const { make, model, year } = req.body;

  Vehicle.findByIdAndUpdate(req.params.id, {
    make,
    model,
    year
  }).then(() => {
    res.send('Vehicle updated');
  }).catch(error => {
    console.log('Error updating vehicle:', error);
    res.status(500).send('Error updating vehicle');
  });
});

// Delete a specific vehicle
app.delete('/api/vehicles/:id', (req, res) => {
  Vehicle.findByIdAndDelete(req.params.id).then(() => {
    res.send('Vehicle deleted');
  }).catch(error => {
    console.log('Error deleting vehicle:', error);
    res.status(500).send('Error deleting vehicle');
  });
});


const result = uuid.v4()
console.log(result);

const shortid = require('shortid');
 
console.log(shortid.generate());

////////////////////////weather//////////////////////
app.post('/weath',(req,res)=>{
  
  let town=req.body.text;
const apikey="50a789f1ecfef4993d6f7ad02535a06e";
  var url="https://api.openweathermap.org/data/2.5/weather?q="+town+"&appid="+apikey+"";

  https.get(url,(response)=>{   
  
    response.on("data",(dat)=>{
      const weather=JSON.parse(dat);
      if(weather.cod===200){
        var temperature=weather.main.temp;
      
      var temperature=Math.trunc(temperature-273);

  
      res.json({town:town,temp:temperature});
      }
      else{
        res.json({town:town,temp:"not found"});
      }
      
    });



    })

});

/////////////////////////////upload and download easy one geeks of geeks////////////////////////
app.post("/upload", function (req, res) {
  
  // When a file has been uploaded
  if (req.files && Object.keys(req.files).length !== 0) {
    
    // Uploaded path
    const uploadedFile = req.files.uploadFile;
  
    // Logging uploading file
    console.log(uploadedFile);
  
    // Upload path
    const uploadPath = __dirname
        + "/uploads/" + uploadedFile.name;
  
    // To save the file using mv() function
    uploadedFile.mv(uploadPath, function (err) {
      if (err) {
        console.log(err);
        res.send("Failed !!");
      } else res.send("Successfully Uploaded !!");
    });
  } else res.send("No file uploaded !!");
});
  
// To handle the download file request
app.get("/download", function (req, res) {
  
  // The res.download() talking file path to be downloaded
  res.download(__dirname + "/uploads/softech.pdf", function (err) {
    if (err) {
      console.log(err);
    }
    
  });
});
  



// Serve Frontend
if (process.env.NODE_ENV ==="production"){

    app.use(express.static("frontend/build"));

  

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));

    })
}



app.listen(PORT, () => console.log(`Server started on port ${PORT}`))



