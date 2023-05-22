import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex">
      <div className="container">
        <Link href="/" className="text-2xl font-medium">
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
