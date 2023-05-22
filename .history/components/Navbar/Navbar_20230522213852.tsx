import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    // navタグを使用してナビゲーション欄を作成する
    <nav className="container mx-auto lg:px-2 px-5 lg:w-2/5">
      <div className="container flex justify-between items-center m-auto">
        {/* Link・hrefを使用して、ページ遷移を実装 */}
        <Link href="/" className="text-2xl font-medium ">
          Next&Notion Blog
        </Link>
        <ul className="flex gap-5 text-sm py-4">
          <li>
            <Link href="/" className="hover:text-teal-600 transition-all duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/SunnyEgg_Clover"
              className="hover:text-teal-600 transition-all duration-300"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Ayu-KW"
              className="hover:text-teal-600 transition-all duration-300"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
