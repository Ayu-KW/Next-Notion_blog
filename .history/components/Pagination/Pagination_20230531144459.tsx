import Link from "next/link";
import React from "react";

export const Pagination = () => {
  return (
    <section className="lg:w-1/2 mx-auto rounded-md">
      <ul className="flex gap-5 justify-center">
        <Link href={"/"}>
          <li className="border-2 border-yellow-200 p-3 rounded-md hover:bg-yellow-100">1</li>
        </Link>
        <Link href={"/"}>
          <li className="border-2 border-yellow-200 p-3 rounded-md hover:bg-yellow-100">2</li>
        </Link>
        <Link href={"/"}>
          <li className="border-2 border-yellow-200 p-3 rounded-md hover:bg-yellow-100">3</li>
        </Link>
        <li className="border-2 border-yellow-200 p-3 rounded-md hover:bg-yellow-100">
          <Link href={"/"}>3</Link>
        </li>
      </ul>
    </section>
  );
};
