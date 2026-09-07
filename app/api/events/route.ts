import { NextResponse } from "next/server";
import { dbStore } from "@/lib/db-store";
import { EventData } from "@/data/events";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const events = dbStore.getEvents();
    return NextResponse.json(
      { success: true, data: events },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      category,
      date,
      location,
      shortDescription,
      description,
      status,
      venue,
      address,
      image,
      externalUrl,
    } = body;

    if (!title || !category || !date || !location) {
      return NextResponse.json(
        { success: false, message: "Title, category, date, and location are required." },
        { status: 400 }
      );
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // Clean up external URL if user didn't include http/https
    let formattedExternalUrl = externalUrl?.trim() || undefined;
    if (formattedExternalUrl && !formattedExternalUrl.startsWith("http://") && !formattedExternalUrl.startsWith("https://")) {
      formattedExternalUrl = `https://${formattedExternalUrl}`;
    }

    const newEvent: EventData = {
      id: slug,
      slug,
      title,
      category: category || "Marathons",
      date,
      location,
      image: image || "/images/events/marathon/hero.png",
      shortDescription: shortDescription || "Official MadProTek managed sports and community event.",
      description: description || shortDescription || "Full event details and schedule.",
      status: status || "REGISTRATION OPEN",
      registrationEnabled: true,
      featured: true,
      externalUrl: formattedExternalUrl,
      schedule: [
        { time: "06:00 AM", activity: "Assembling & Warm-up" },
        { time: "06:30 AM", activity: "Main Event Flag Off" },
        { time: "09:30 AM", activity: "Awards & Closing" },
      ],
      highlights: [
        { title: "Expected Participants", value: "1,500+ Attendees" },
        { title: "Official Timing", value: "Electronic Bib Timing" },
      ],
      gallery: [
        { src: "/images/events/marathon/start-line.png", alt: title, caption: "Starting Line & Convoy" },
      ],
      venue: venue || `${location} Sports Ground`,
      address: address || `${location}, Tamil Nadu`,
      mapEmbedUrlPlaceholder: "https://maps.google.com",
    };

    const added = dbStore.addEvent(newEvent);
    return NextResponse.json({ success: true, message: "Event created successfully", data: added }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, slug, externalUrl, ...updatedFields } = body;
    const targetSlug = slug || id;

    if (!targetSlug) {
      return NextResponse.json({ success: false, message: "Event slug/id is required" }, { status: 400 });
    }

    let formattedExternalUrl = externalUrl !== undefined ? externalUrl?.trim() || "" : undefined;
    if (formattedExternalUrl && !formattedExternalUrl.startsWith("http://") && !formattedExternalUrl.startsWith("https://")) {
      formattedExternalUrl = `https://${formattedExternalUrl}`;
    }

    const updatePayload = {
      ...updatedFields,
      ...(formattedExternalUrl !== undefined && { externalUrl: formattedExternalUrl || undefined }),
    };

    const updated = dbStore.updateEvent(targetSlug, updatePayload);
    return NextResponse.json({ success: true, message: "Event updated successfully", data: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug") || searchParams.get("id");

    if (!slug) {
      return NextResponse.json({ success: false, message: "Event slug/id required" }, { status: 400 });
    }

    dbStore.deleteEvent(slug);
    return NextResponse.json(
      { success: true, message: "Event deleted successfully" },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
