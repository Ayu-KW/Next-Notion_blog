import Link from "next/link";
import React from "react";

export const Pagination = () => {
  return (
    <section className="lg:w-1/2 mx-auto rounded-md">
      <ul className="flex gap-5">
        <Link href={"/"}>
          <li className="border-2 border-yellow-200 p-3 rounded-md hover:bg-orange-300">1</li>
        </Link>
        <Link href={"/"}>
          <li>2</li>
        </Link>
        <Link href={"/"}>
          <li>3</li>
        </Link>
      </ul>
    </section>
  );
};
