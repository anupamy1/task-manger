const express = require("express");
const User = require('./../models/taskSchema');
const router = express.Router();
const {handleGetAllUsers,handleGetUsersById,handleUpdateUsersById,handleDeleteUsersById,handleCreateNewUser}=require("../controllers/controller");

router.route("/").post(handleCreateNewUser).get(handleGetAllUsers);

router
    .route("/:id")
    .get(handleGetUsersById)
    .patch(handleUpdateUsersById)
    .delete(handleDeleteUsersById);


module.exports=router;