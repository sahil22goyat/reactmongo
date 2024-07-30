const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.zcypud8.mongodb.net/reactfrom?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const trial = mongoose.model('trial', userSchema);
app.get("/home",(req,res)=>{
res.send("hello")

})
app.post("/home",(req,res)=>{
  res.send("hellofrom post")
  
  })
// Handle login requests
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Create a new user document with the provided email and password
        const newUser = new trial({ email, password });
        await newUser.save();
        
        res.status(201).json({ message: 'User data stored successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
