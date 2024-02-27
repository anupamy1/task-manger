const mongoose =require("mongoose");
const userSchema= new mongoose.Schema(
    {
        taskName:{type:String},
        taskState:String,
    }
);
const User = mongoose.model("user",userSchema);
module.exports=User;