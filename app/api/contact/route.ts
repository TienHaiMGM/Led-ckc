import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { checkRateLimit } from "../../../utils/rateLimiting";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.ip || request.headers.get("x-forwarded-for") || "unknown";
    const formData = await request.json();

    // Check rate limit
    const isAllowed = await checkRateLimit(ip);
    if (!isAllowed) {
      return NextResponse.json(
        { error: "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau 1 phút." },
        { status: 429 },
      );
    }

    // Add document to Firestore
    const contactsRef = collection(db, "contact-requests");
    const docRef = await addDoc(contactsRef, {
      ...formData,
      createdAt: serverTimestamp(),
      status: "new",
      source: "website_form",
      ipAddress: ip,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Có lỗi xảy ra, vui lòng thử lại sau" },
      { status: 500 },
    );
  }
}
