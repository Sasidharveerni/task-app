const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express();

dotenv.config()
app.use(bodyParser.urlencoded())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose')

const cors = require('cors')


app.get("/", (req, res) => {
    res.send("Server is up and running!!")
})


app.listen(process.env.port, (req, res) => {

    mongoose.connect()
    .then(() => {
        console.log('Database is connected!')
    })
    .catch((error) => {
      console.log("Error in connecting", error)
    }) 
})
