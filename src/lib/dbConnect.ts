import mongoose from "mongoose";

interface ConnectType{
    isConnect?:number;
}
const connect:ConnectType={};
 async function dbConnect(){
    if(connect.isConnect){
        console.log("database is already connected");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGOURI!,{dbName:"testApis"});
        console.log("database connection successfuly on: ",db.connection.host);
        connect.isConnect = db.connections[0].readyState;

    } catch (error) {
        console.log("error on database connection: "+error);
    }
}


export default dbConnect;