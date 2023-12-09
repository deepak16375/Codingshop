import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    workshopSubscribed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workshop' }]
})

const UserModel = mongoose.model("User",userSchema);


export default UserModel;