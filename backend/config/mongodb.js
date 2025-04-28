import mongoose from "mongoose";

const connectdb=  async () => {
try{
mongoose.connection.on('connected',()=>{
    console.log("Db connected");
})
}catch(error){
    console.log(error);
}

    await mongoose.connect(`${process.env.MONGODB_URL}/E-commerce`)
}

export default connectdb;    