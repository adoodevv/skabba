import { inngest } from "@/config/inngest";
import Product from "@/models/Product";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
   try {
      const { userId } = getAuth(request);
      const { address, items } = await request.json();

      if (!address || !items) {
         return NextResponse.json({ success: false, message: 'Address and items are required' });
      }

      // calculate amount using items
      const amount = await items.reduce(async (accPromise: Promise<number>, item: { product: string, quantity: number }) => {
         const acc = await accPromise;
         const product = await Product.findById(item.product);
         if (!product) {
            throw new Error('Product not found');
         }
         return acc + product.offerPrice * item.quantity;
      }, Promise.resolve(0));

      await inngest.send({
         name: 'order/created',
         data: {
            userId,
            address,
            items,
            amount: amount + Math.floor(amount * 0.02),
            date: Date.now()
         }
      });

      // clear user cart
      const user = await User.findById(userId);
      if (user) {
         user.cartItems = {};
         await user.save();
      }

      return NextResponse.json({ success: true, message: 'Order created successfully' });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ success: false, message: 'An error occurred' });
   }
}