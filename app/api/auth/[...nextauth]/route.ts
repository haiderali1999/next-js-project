import NextAuth from "next-auth";
import { authOptions } from "./utils";

const handler = NextAuth(authOptions);

console.log(process.env.GOOGLE_CLIENT_ID);

export { handler as GET, handler as POST };
