import connectDB from "@/config/db";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
   try {
      const { userId } = getAuth(request as any)
      await connectDB()
      const user = await User.findById(userId)
      if (!user) {
         return NextResponse.json({ success: false, message: 'User not found' })
      }
      return NextResponse.json({ success: true, user })
   } catch (error) {
      return NextResponse.json({ success: false, message: error instanceof Error ? error.message : 'An unknown error occurred' })
   }
}