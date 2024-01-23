// import { NextRequest, NextResponse } from "next/server";

// import middleware from "next-auth/middleware";
// export { middleware };
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/users/:id*"],
};

// * ; zero or more
// + ; one or more
// ? ; zero or one
