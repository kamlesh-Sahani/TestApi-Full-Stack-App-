import dbConnect from "@/lib/dbConnect";
import EcommerceModel from "@/models/Ecommerce";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    try {
        await dbConnect();
        const  searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        const product = await EcommerceModel.findById(id);
        if(!product){
            return NextResponse.json({
                message:"product is not found ",
                success:false,
            },{status:400});
        }
        return NextResponse.json({
            success:true,
            messsage:"data is found successfuly",
            product
        })
    } catch (error) {
        return NextResponse.json({
            message:"faild to get data",
            success:false
        },{status:500})
    }
}