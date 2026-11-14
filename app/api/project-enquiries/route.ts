import { NextResponse } from "next/server";

// Deliberately closed integration boundary. No body is read, logged, emailed or stored.
// Enable only in a reviewed change that adds a real provider, durable rate limiting,
// origin/CSRF checks, request-size limits, validation, idempotency and approved privacy text.
export async function POST() {
  return NextResponse.json({
    success: false,
    message: "Project enquiries are not available yet. This form has not been connected to a delivery service."
  }, { status: 503, headers: { "Cache-Control": "no-store" } });
}
