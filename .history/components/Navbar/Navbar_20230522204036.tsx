import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="p-5 bg-teal-700 text-white">
      <div className="container flex  items-center">
        <Link href="/" className="text-2xl font-medium ">
          Next&Notion Blog
        </Link>
        <ul className="flex gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="https://twitter.com/SunnyEgg_Clover">Twitter</Link>
          </li>
          <li>
            <Link href="https://github.com/Ayu-KW">GitHub</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
