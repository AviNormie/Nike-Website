const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());

// Use environment variable for MongoDB connection UR
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/Nike'; 
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB connection error:", err));

// Routes
app.get('/', (req, res) => {
    res.send('API is running');
})
app.post('/sign-up', (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json({ err }));
});

app.post('/login', (req, res) => {
    try {
        const { email, password } = req.body;
        UserModel.findOne({ email: email })
            .then(users => {
                if (users) {
                    if (users.password === password) {
                        res.json({ message: "success" });
                    } else {
                        res.json({ message: "Incorrect password" });
                    }
                } else {
                    res.json({ msg: 'User not found' });
                }
            });
    } catch (err) {
        res.json({ err });
    }
});

// Export the app instead of starting the server directly
module.exports = app;
