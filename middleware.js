import { NextResponse } from "next/server";

export function middleware(request) {
  const user =
    request.cookies.get("user");

  const pathname =
    request.nextUrl.pathname;

  const publicRoutes = [
    "/login",
    "/signup",
  ];

  if (
    !user &&
    !publicRoutes.includes(pathname)
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/server/:path*",
    "/checkout/:path*",
    "/profile/:path*",
  ],
};
