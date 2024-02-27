const mongoose=require("mongoose");
async function connectMongoDb(url){
    return mongoose.connect(url).then(()=>{
        console.log("database is connected..")
    }).catch((err)=>{
        console.log(err)
    });
}
module.exports={
    connectMongoDb,
};