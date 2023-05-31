import Link from "next/link";
import React from "react";

type props = {
  numberOfpage: number;
};

export const Pagination = (props: props) => {
  const { numberOfpage } = props;
  let pages = [];
  for (let i = 0; i < numberOfpage; i++) {}

  return (
    <section className="lg:w-1/2 mx-auto rounded-md">
      <div className="flex gap-5 justify-center">
        <Link href={"/"}>
          <p className="border-2 bg-yellow-200 border-yellow-200 p-3 rounded-md hover:bg-white">
            1
          </p>
        </Link>
        <Link href={"/"}>
          <p className="border-2 bg-yellow-200 border-yellow-200 p-3 rounded-md hover:bg-white">
            2
          </p>
        </Link>
        <Link href={"/"}>
          <p className="border-2 bg-yellow-200 border-yellow-200 p-3 rounded-md hover:bg-white">
            3
          </p>
        </Link>
      </div>
    </section>
  );
};
