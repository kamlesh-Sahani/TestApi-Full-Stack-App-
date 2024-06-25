import dbConnect from "@/lib/dbConnect";
import EcommerceModel, { EcommerceSchemaType } from "@/models/Ecommerce";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const reqBody: EcommerceSchemaType = await req.json();
    console.log(reqBody);
    const {
      title,
      price,
      description,
      status,
      stock,
      reviews,
      reviewStar,
      category,
      image,
    } = reqBody;

    const product = await EcommerceModel.create({
      title,
      price,
      description,
      status,
      stock,
      reviews,
      reviewStar,
      category,
      image,
    });

    if(!product){
        return NextResponse.json({
            message:"faild to created product",
            success:false
        },{status:400})
    }
    return NextResponse.json({
        message:"successfuly created",
        success:true
    },{status:201})
  } catch (error:any) {
    return NextResponse.json(
      {
        success: false,
        message: "faild to store data",
        error:`error: ${error.message}`
      },
      { status: 500 }
    );
  }
}
