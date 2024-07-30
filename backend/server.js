const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors'); // as data comming from different port
const app = express();
app.use(bodyParser.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.zcypud8.mongodb.net/reactfrom?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{

    console.log("connectiono done");
});



//trial schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const trial = mongoose.model('trial', userSchema);





app.get("/home",(req,res)=>{
res.send("hello from home")

})
app.get("/getdetails", (req, res) => {
    let html = `
            <!DOCTYPE html>
            <html>
            <head>
              
            </head>
            <body>
                <h1>hi</h1>
              
            </body>
            </html>
        `;
    trial.find({})
        .then((result) => {
         
            res.json(result);
         
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        });
});
  


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {

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
