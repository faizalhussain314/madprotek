import { NextResponse } from "next/server";
import { dbStore } from "@/lib/db-store";

export async function GET() {
  try {
    const leads = dbStore.getLeads();
    return NextResponse.json({ success: true, data: leads });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    const createdLead = dbStore.addLead({
      name,
      email,
      phone,
      service: service || "General Inquiry",
      message: message || "",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Lead submission stored successfully in MySQL DB",
        data: createdLead,
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

    const updated = dbStore.updateLeadStatus(id, status);
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
      return NextResponse.json({ success: false, message: "Lead ID required" }, { status: 400 });
    }

    dbStore.deleteLead(id);
    return NextResponse.json({ success: true, message: "Lead deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
