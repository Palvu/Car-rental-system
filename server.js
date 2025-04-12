const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path"); // Import the 'path' module
const register = require('./registerModel');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(__dirname));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});
app.post('/register',async (req,res)=>{
    const {name,email,password} = req.body;
    try {
        const regData = new register({
            name,email,password
        });
        const regSave = await regData.save();
        res.sendFile(__dirname + '/login.html');
    } catch (error) {
        console.log("Error while registering");
    }
});

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
})

app.post('/login', async (req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await register.findOne({email:email});
        if(user){
            if(user.password===password){
                res.sendFile(__dirname + '/code1.html');
            }else{
                console.log("Invalid password.");
            }
        }
    } catch (error) {
        console.log("User not registered. Please try again.");
    }
})

app.listen(3000, ()=>{
    console.log("Server listening on port 3000");
});
