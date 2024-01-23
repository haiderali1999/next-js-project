"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 mb-2 justify-between items-center">
      <div>
        <Link href="/" className="mr-10">
          Next.js
        </Link>
        <Link href="/users" className="mr-5">
          User
        </Link>
      </div>
      <div>
        {status === "loading" && (
          <span className="loading loading-dots loading-xs"></span>
        )}
        {status === "authenticated" && (
          <div className="">
            <span className="text-slate-50 rounded-full bg-slate-400 px-3 py-2 mr-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              {session.user!.name}
            </span>
            <Link
              href="/api/auth/signout"
              className="text-slate-50 rounded-full bg-slate-400 px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            >
              Sign Out
            </Link>
          </div>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin" className="mr-5">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
