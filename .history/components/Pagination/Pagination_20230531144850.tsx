import Link from "next/link";
import React from "react";

export const Pagination = () => {
  return (
    <section className="lg:w-1/2 mx-auto rounded-md">
      <div className="flex gap-5 justify-center">
        <Link href={"/"}>
          <p className="border-2 border-yellow-200 p-3 rounded-md hover:bg-yellow-100">1</p>
        </Link>
        <Link href={"/"}>
          <p className="border-2 border-yellow-200 p-3 rounded-md hover:bg-yellow-100">2</p>
        </Link>
        <Link href={"/"}>
          <p className="border-2 bg-yellow-300 border-yellow-200 p-3 rounded-md hover:bg-white-100">
            3
          </p>
        </Link>
      </div>
    </section>
  );
};
