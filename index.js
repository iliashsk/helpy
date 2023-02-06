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

    app.use(express.static("frontend/public"));

  

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'));

    })
}
else{
  res.send({"iliash":"how are you"})
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
