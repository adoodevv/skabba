import connectDB from "@/config/db";
import Address from "@/models/Address";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
   try {
      const { userId } = getAuth(request)

      await connectDB

      const addresses = await Address.find({ userId })

      return NextResponse.json({ success: true, addresses })
   
   } catch (error) {
      return NextResponse.json({ success: false, message: error instanceof Error ? error.message : 'An unknown error occurred' })
   }
}