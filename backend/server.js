const mongo = require("mongoose");
const bp = require('body-parser'); 
var encoder = bp.urlencoded({ extended: true });
const express= require("express");
const path = require('path'); // for passing html file   path bro
const app= express();



const user= require("./model/user.js");

const mongoURI = 'mongodb+srv://admin:admin@cluster0.zcypud8.mongodb.net/reactfrom?retryWrites=true&w=majority';
mongo.connect(mongoURI ,{
  useNewUrlParser: true, 
  useUnifiedTopology: true 

              }).then(()=>{
  console.log("connected to database");

              }).catch((err)=>{

  console.log("error")
              })


app.get("/",(req,res)=>{

res.send("hello")
})

app.post('/submit', (req, res) => {
  const newdata = new user(req.body);

  newdata.save()
    .then(() => {
      console.log("User data saved successfully");}).catch((err) => {
      console.error("Error saving user data:", err);
    
}) ;
});


app.listen(5000,()=>{


  console.log("server running on port 5000");

})