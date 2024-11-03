const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb://127.0.0.1:27017/Nike`)

app.post('/sign-up',(req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json({err}))
})




app.listen(3000, () => {
    console.log('Server is running on port 3000')
})