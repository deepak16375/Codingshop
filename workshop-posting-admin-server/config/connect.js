import mongoose from "mongoose";

const connectDb= async(url) =>{
    try
    {
        console.log("Connecting to MongoDB");
        const DB={
            dbName:"WorkShopApp"
        }
        await mongoose.connect(url,DB);
        console.log("Connected to MongoDB");
    }
    catch(error)
    {
        console.log(error.message);
    }
}

export default connectDb;