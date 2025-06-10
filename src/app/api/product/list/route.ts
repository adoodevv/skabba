import connectDB from "@/config/db"
import Product from "@/models/Product"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
   try {
      await connectDB()

      const products = await Product.find({})
      return NextResponse.json({ success: true, products })

   } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
      return NextResponse.json({ success: false, message: errorMessage })
   }
}