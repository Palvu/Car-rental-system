const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aditi:<aditi1234>@cluster0.u457er9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


  const regUser = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required: true
    }

  });

const  register = mongoose.model("users",regUser);
module.exports = register;