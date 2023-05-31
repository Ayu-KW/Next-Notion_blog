import Link from "next/link";
import React from "react";

export const Pagination = () => {
  return (
    <section>
      <ul>
        <li>
          <Link href={"/"}>1</Link>
        </li>
        <li>
          <Link href={"/"}>2</Link>
        </li>
        <li>
          <Link href={"/"}>3</Link>
        </li>
      </ul>
    </section>
  );
};
