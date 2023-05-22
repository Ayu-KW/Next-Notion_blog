import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className="container text-2xl font-medium">
        <Link href="/">Next&Notion Blog</Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Twitter</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
