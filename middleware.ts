import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Cambia a false para reactivar el sitio completo
const HOLDING_MODE = true;

export function middleware(request: NextRequest) {
  if (!HOLDING_MODE) return NextResponse.next();

  const { pathname } = request.nextUrl;

  // Deja pasar la página holding y recursos estáticos
  if (
    pathname === "/holding" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/docs") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  // Todo lo demás va a /holding
  return NextResponse.redirect(new URL("/holding", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
