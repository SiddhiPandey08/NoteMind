import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const requestUrl = new URL(req.url);
  const code = requestUrl.searchParams.get("code");
  // Optional: redirect to a specific page after auth or default to dashboard
  const next = requestUrl.searchParams.get("next") ?? "/dashboard";

  if (code) {
    // Replaces createRouteHandlerClient
    const supabase = await createClient();

    // Exchanges code for a session and automatically sets user cookies
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Direct to destination page if verification succeeds
      return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
    }
  }

  // Redirect to an error page or home if code validation fails
  return NextResponse.redirect(`${requestUrl.origin}/auth-error`);
}
