"use client";
import ApiCard from "@/components/ApiCard";
import { useState } from "react";
const page = () => {
  const allProductsDescription = `Retrieve a comprehensive list of all available products in the catalog. This API provides detailed information on each product, including title, description, price, reviews, category, stock availability, review ratings, and images. Ideal for applications that require a full overview of the product inventory.`;

  const singleProductDescription = `Get detailed information about a specific product by its ID. This endpoint delivers comprehensive details such as the product's title, description, price, reviews, category, stock availability, review ratings, and images. Useful for applications focused on individual product pages or detailed product information.`;

  const code = `{
      "_id": "667a9cf8c0badc51c4d68ad8",
      "title": "Wireless Bluetooth Headphones",
       "description": "High-quality wireless Bluetooth headphones with noise-cancellation and long battery life.",
       "price": 99.99,
       "reviews": [
                    {
                      "review": "Great sound quality and very comfortable to wear.",
                      "_id": "667a9cf8c0badc51c4d68ad9"
                    },
                    {
                     "review": "Battery lasts long, but the noise cancellation could be better.",
                     "_id": "667a9cf8c0badc51c4d68ada"
                    }
                  ],
        "category": "Electronics",
        "stock": 50,
        "reviewStar": 4.5,
        "image": "https://example.com/images/wireless-bluetooth-headphones.jpg",
        "createdAt": "2024-06-25T10:33:28.710Z",
        "updatedAt": "2024-06-25T10:33:28.710Z",
        "__v": 0
  }
    `;

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-9/12">
        <ApiCard
          apiUrl={"http://localhost:3000/api/product/all"}
          description={allProductsDescription}
          code={code}
        />
        <ApiCard
          apiUrl={"http://localhost:3000/api/product/one?id={productId}"}
          description={singleProductDescription}
          code={code}
        />
      </div>
    </div>
  );
};

export default page;
