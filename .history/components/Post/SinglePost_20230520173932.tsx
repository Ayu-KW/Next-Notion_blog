import React from "react";
import "tailwindcss/tailwind.css";

type Props = {
  title: string;
  description: string;
  date: string;
  tag: string;
  slug: string;
};

export const SinglePost = (props: Props) => {
  const { title, description, date, tag, slug } = props;
  return (
    <section>
      <div className="bg-teal-300 mb-8 mx-auto rounded-md p-5 shadow-2xl">
        <h2 className="font-bold">{title}</h2>
        <time dateTime={date}>{date}</time>
        <div>{tag}</div>
      </div>
      <p>{description}</p>
    </section>
  );
};
