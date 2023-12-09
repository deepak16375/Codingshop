import mongoose from "mongoose";

const workshopSceham=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    date:{
        type: String,
        required: true,
    },
    tags:{
        type: String,
        required: true,
    },
    pricing:{
        type: Number,
        required: true
    },
    image:{
        type:String,
        required:true,
        trim:true,
    },
    host_id:{
        type:String,
        required:true,
    }
})

const WorkshopModel = mongoose.model("Workshop",workshopSceham);

export default WorkshopModel;