const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")

require('dotenv-safe').config();

const db = require('./config/database')
const userRoutes = require('./routes/userRoutes')
const expertRoutes = require ('./routes/expertRoutes')

db.connect() 

app.use(cors())
app.use(express.json())
app.use("/users", userRoutes)
app.use("/experts",expertRoutes)

module.exports = app