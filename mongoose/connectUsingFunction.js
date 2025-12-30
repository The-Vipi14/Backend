const mongoose  = require('mongoose');

const conn_db = async()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/")
    .then(()=> console.log("Database connected successfully."))
    .catch((err)=> console.log(err))

    const userSchema = new mongoose.Schema({
        name:String,
        email:String,
        Ph_num:Number,
    });

    const UserModel = mongoose.model("Users",userSchema);

    // const newUserDetails = new UserModel({
    //     name:"rohan",
    //     email:"rohan@gmail.com",
    //     Ph_num:9475839049
    // })

    // const newUser = await newUserDetails.save();

    // console.log(newUser)


    // to find:
    // const allUsersData = await UserModel.find()
    // console.log(allUsersData)

    const userToUpdate = await UserModel.findOne({email:"vipin@gmail.com"})
    const updatedUser = await UserModel.updateOne(userToUpdate,{
        $set:{
            name:"sachin"
        }
    })
    
    console.log(updatedUser)
    const sachin = await UserModel.findOne({email:"vipin@gmail.com"})
    console.log(sachin)
 
}
 
conn_db()

