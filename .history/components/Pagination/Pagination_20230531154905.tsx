import Link from "next/link";
import React from "react";

type props = {
  numberOfpage: number;
};

export const Pagination = (props: props) => {
  const { numberOfpage } = props;
  let pages: number[] = [];
  for (let i = 0; i < numberOfpage; i++) {
    console.log(i);
    pages.push(i);
  }

  return (
    <section className="lg:w-1/2 mx-auto rounded-md">
      <div className="flex gap-5 justify-center">
        {pages.map((page) => (
          <Link href={`/posts/page/${page}`} key={page}>
            <p className="border-2 bg-yellow-200 border-yellow-200 p-3 rounded-md hover:bg-white">
              {page}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
