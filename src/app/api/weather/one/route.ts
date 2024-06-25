import dbConnect from "@/lib/dbConnect";
import WeatherModel from "@/models/Weather";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    try {
        await dbConnect();
        const  searchParams = req.nextUrl.searchParams;
        const city = searchParams.get("city")||"";
        const state = searchParams.get("state")||"";
        const country = searchParams.get("country")||"";
        let weather;
        if(city){
            weather = await WeatherModel.findOne({city:{$regex:city,$options:'i'}});
        }
        if(state){
            weather = await WeatherModel.findOne({state:{$regex:state,$options:'i'}});
        }
        if(country){
            weather = await WeatherModel.findOne({state:{$regex:state,$options:'i'}});
        }
         
        if(!weather){
            return NextResponse.json({
                message:"product is not found ",
                success:false,
            },{status:400});
        }
        return NextResponse.json({
            success:true,
            messsage:"data is found successfuly",
            weather
        })
    } catch (error) {
        return NextResponse.json({
            message:"faild to get data",
            success:false
        },{status:500})
    }
}