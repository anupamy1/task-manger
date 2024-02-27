const User = require("../models/taskSchema");
async function handleGetAllUsers(req,res){
    const alltask= await User.find({});
    return res.json({alltask});
}
async function handleGetUsersById(req,res){
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error:"user not found"});
    console.log(user)
    return res.json({user});
}
async function handleUpdateUsersById(req,res){
    await User.findByIdAndUpdate(req.params.id,{taskState:"completed"});
    return res.json({status:"Success"});
}
async function handleDeleteUsersById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"Success"});
}
async function handleCreateNewUser(req,res){
    // console.log("dfkhdsf");
    const body=req.body;
    console.log(body)
        if(!body.taskName || !body.taskState){
            return res.status(400).json({msg:"all fields are required...."});
        }
        const result =  await User({
            taskName:body.taskName,
            taskState:body.taskState,
        });
        result.save();
        return res.status(201).json({msg:"Success",id:result._id});
}
module.exports={
    handleGetAllUsers,handleGetUsersById,handleUpdateUsersById,handleDeleteUsersById,handleCreateNewUser,
}