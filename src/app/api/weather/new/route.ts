import dbConnect from "@/lib/dbConnect";
import WeatherModel, { WeatherSchemaType } from "@/models/Weather";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const reqBody: WeatherSchemaType = await req.json();
    const {
      country,
      state,
      city,
      temperature,
      wind,
      humidity,
      atmosphericPressure,
      weatherCondtion,
      sunriseTime,
      sunsetTime,
      uvIndex,
      visibility
    } = reqBody;
    const weather = await WeatherModel.create({
      country,
      state,
      city,
      temperature,
      wind,
      humidity,
      atmosphericPressure,
      weatherCondtion,
      sunriseTime,
      sunsetTime,
      uvIndex,
      visibility
    });
    if(!weather){
        return NextResponse.json({
            message:"weather faild to create",
            success:false
        },{status:400})
    }

    return NextResponse.json({
        message:"weather data created successfuly",
        success:true
    },{status:201})
  } catch (error:any) {
    return NextResponse.json(
      {
        message: "faild to create the data",
        success: false,
        error:error.message
      },
      { status: 500 }
    );
  }
}
