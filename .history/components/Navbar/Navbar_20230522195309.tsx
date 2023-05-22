import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className="container text-2xl font-medium">
        <Link href="/">トップページ</Link>
        <ul>
          <li>
            <Link href="/"></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
