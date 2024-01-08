import Link from "next/link";
import React from "react";

const NavBar = () => {
  return <div className="flex bg-slate-200 p-5 mb-2">
    <Link href="/" className="mr-5">Next.js</Link>
    <Link href="/users" className="mr-5">User</Link>
  </div>;
};

export default NavBar;
