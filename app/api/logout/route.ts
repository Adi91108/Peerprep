import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  // Remove the JWT token stored in the cookie
  (await cookies()).delete("session"); 

  return NextResponse.json({ success: true }, { status: 200 });
}
