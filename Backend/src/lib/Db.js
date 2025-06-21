import mongoose from "mongoose";

const ConnectDB = async() =>{
    try {
        mongoose.connection.on("connected" , ()=>console.log(`Db Connected`));
        await mongoose.connect(process.env.MONGO_URL)
        
    } catch (error) {
        console.log(error+"DB ERROR!!");
        
    }
}

export default ConnectDB