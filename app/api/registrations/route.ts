import { NextResponse } from "next/server";
import { dbStore } from "@/lib/db-store";

export async function GET() {
  try {
    const regs = dbStore.getRegistrations();
    return NextResponse.json({ success: true, data: regs });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventId, eventTitle, name, email, phone, emergencyPhone, categorySelected, tshirtSize } = body;

    if (!name || !email || !phone || !eventId) {
      return NextResponse.json(
        { success: false, message: "Name, email, phone, and event ID are required." },
        { status: 400 }
      );
    }

    const registration = dbStore.addRegistration({
      eventId,
      eventTitle: eventTitle || "Event Registration",
      name,
      email,
      phone,
      emergencyPhone: emergencyPhone || phone,
      categorySelected: categorySelected || "General Entry",
      tshirtSize: tshirtSize || "L",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration completed successfully",
        data: registration,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ success: false, message: "ID and status required" }, { status: 400 });
    }

    const updated = dbStore.updateRegistrationStatus(id, status);
    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "ID required" }, { status: 400 });
    }

    dbStore.deleteRegistration(id);
    return NextResponse.json({ success: true, message: "Registration deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
