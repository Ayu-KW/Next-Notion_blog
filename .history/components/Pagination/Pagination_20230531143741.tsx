import Link from "next/link";
import React from "react";

export const Pagination = () => {
  return (
    <section className="container w-full mt-16">
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
