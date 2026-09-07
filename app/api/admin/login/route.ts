import { NextResponse } from "next/server";
import { verifyAdminCredentials, setAdminSessionCookie } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required." },
        { status: 400 }
      );
    }

    const admin = await verifyAdminCredentials(email, password);

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Invalid admin email or password." },
        { status: 401 }
      );
    }

    await setAdminSessionCookie(admin);

    return NextResponse.json({
      success: true,
      message: "Admin login successful",
      user: admin,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: "Login failed: " + error.message },
      { status: 500 }
    );
  }
}
