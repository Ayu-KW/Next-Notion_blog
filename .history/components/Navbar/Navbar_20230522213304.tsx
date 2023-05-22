import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="container mx-auto lg:px-2 px-5">
      <div className="container flex justify-between items-center m-auto">
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
