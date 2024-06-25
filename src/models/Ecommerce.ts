import mongoose, { Schema, Document } from "mongoose";

export interface ReviewType {
  review: string;
}
export interface EcommerceSchemaType extends Document {
  title: string;
  description: string;
  price: number;
  reviews: ReviewType[];
  category: string;
  stock: number;
  status: string;
  reviewStar: number;
  image: string;
}

const reviewsSchema:Schema<ReviewType> = new Schema({
    review:{
        type:String,
        required:true
    }
})

const eCommerceSchema: Schema<EcommerceSchemaType> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    reviews: [reviewsSchema],
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    reviewStar: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const EcommerceModel =
  (mongoose.models.Ecommerce as mongoose.Model<EcommerceSchemaType>) ||
  mongoose.model<EcommerceSchemaType>("Ecommerce", eCommerceSchema);

export default EcommerceModel;
