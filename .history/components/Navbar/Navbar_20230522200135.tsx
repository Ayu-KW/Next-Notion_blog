import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-teal-400">
      <div className="container flex justify-center items-center gap-10">
        <Link href="/" className="text-2xl font-medium ">
          Next&Notion Blog
        </Link>
        <ul className="flex gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Twitter</Link>
          </li>
          <li>
            <Link href="/">GitHub</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
