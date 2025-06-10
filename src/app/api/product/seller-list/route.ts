import connectDB from "@/config/db"
import authSeller from "@/lib/authSeller"
import Product from "@/models/Product"
import { getAuth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
   try {
      const { userId } = getAuth(request)

      if (!userId) {
         return NextResponse.json({ success: false, message: "User not authenticated" })
      }

      const isSeller = authSeller(userId)

      if (!isSeller) {
         return NextResponse.json({ success: false, message: "You are not authorized to access this resource" })
      }

      await connectDB()

      const products = await Product.find({})
      return NextResponse.json({ success: true, products })

   } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
      return NextResponse.json({ success: false, message: errorMessage })
   }
}