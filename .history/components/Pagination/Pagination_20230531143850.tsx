import Link from "next/link";
import React from "react";

export const Pagination = () => {
  return (
    <section className="lg:w-1/2 mx-auto rounded-md ">
      <ul>
        <Link href={"/"}>
          <li>1</li>
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
