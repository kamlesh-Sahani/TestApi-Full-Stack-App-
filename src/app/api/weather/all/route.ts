import dbConnect from "@/lib/dbConnect";
import WeatherModel from "@/models/Weather";
import {NextResponse} from "next/server";


export async function GET(){
    await dbConnect();
    try {
         const weather = await WeatherModel.find({});
         if(!weather){
            return NextResponse.json({
                message:"data is not found",
                success:false
            },{status:400})
         }

         return NextResponse.json({
            message:"weather fetch successfuly",
            success:true,
            weather
         },{status:200})
    } catch (error) {
        return NextResponse.json({
            message:"error to fetching data",
            success:false

        },{status:500})
    }
}