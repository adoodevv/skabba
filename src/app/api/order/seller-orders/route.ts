import connectDB from "@/config/db"
import authSeller from "@/lib/authSeller"
import Address from "@/models/Address"
import Order from "@/models/Order"
import { getAuth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"


export async function GET(request: NextRequest) {
   try {
      const { userId } = getAuth(request)
      if (!userId) {
         return NextResponse.json({ success: false, message: 'Unauthorized' })
      }
      const isSeller = await authSeller(userId)
      if (!isSeller) {
         return NextResponse.json({ success: false, message: 'Unauthorized' })
      }
      await connectDB()

      Address.length

      const orders = await Order.find({}).populate('address items.product')

      return NextResponse.json({ success: true, orders })
   } catch (error) {
      return NextResponse.json({ success: false, message: 'An error occurred' })
   }
}