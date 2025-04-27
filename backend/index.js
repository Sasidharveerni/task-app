const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express();

dotenv.config()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose')

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);
app.use('/analytics', analyticsRoutes);





app.get("/", (req, res) => {
    res.send("Server is up and running!!")
})


app.listen(process.env.port, (req, res) => {

    mongoose.connect(process.env.mongo_uri)
    .then(() => {
        console.log('Database is connected!')
    })
    .catch((error) => {
      console.log("Error in connecting", error)
    }) 
})
