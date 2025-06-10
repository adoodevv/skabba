import connectDB from "@/config/db";
import authSeller from "@/lib/authSeller";
import Product from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse, NextRequest } from "next/server";

// Configure Cloudinary
cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: NextRequest) {
   try {
      const { userId } = getAuth(request);

      if (!userId) {
         return NextResponse.json({ success: false, message: 'User ID is missing' });
      }

      const isSellerResponse = await authSeller(userId);

      if (!isSellerResponse.success) {
         return NextResponse.json({ success: false, message: isSellerResponse.message || 'User is not a seller' });
      }

      const formData = await request.formData();

      const name = formData.get('name') as string;
      const description = formData.get('description') as string;
      const category = formData.get('category') as string;
      const price = formData.get('price') as string;
      const offerPrice = formData.get('offerPrice') as string;

      const files = formData.getAll('images') as File[];

      if (!files || files.length === 0) {
         return NextResponse.json({ success: false, message: 'At least one image is required' });
      }

      const result = await Promise.all(
         files.map(async (file) => {
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            return new Promise((resolve, reject) => {
               const stream = cloudinary.uploader.upload_stream(
                  { resource_type: 'auto' },
                  (error, result) => {
                     if (error) {
                        reject(error);
                     } else {
                        resolve(result);
                     }
                  }
               );
               stream.end(buffer);
            });
         })
      );

      const image = result.map((result: any) => result.secure_url);

      await connectDB();
      const newProduct = await Product.create({
         userId,
         name,
         description,
         category,
         price: Number(price),
         offerPrice: Number(offerPrice),
         images: image,
         date: Date.now()
      });

      return NextResponse.json({ success: true, message: 'Product added successfully', newProduct });
   } catch (error) {
      return NextResponse.json({ success: false, message: error instanceof Error ? error.message : 'An unknown error occurred' });
   }
}