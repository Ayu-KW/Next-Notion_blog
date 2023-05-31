import Link from "next/link";
import React from "react";

export const Pagination = () => {
  return (
    <section className="">
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
