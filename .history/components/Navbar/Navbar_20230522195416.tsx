import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link href="/" className="text-2xl font-medium">
          Next&Notion Blog
        </Link>
        <ul>
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
