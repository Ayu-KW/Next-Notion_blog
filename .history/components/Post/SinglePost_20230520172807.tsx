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
      <div className="bg-blue-500 text-white p-4">
        <h2>{title}</h2>
        <time dateTime={date}>{date}</time>
        <div>{tag}</div>
        <p>{description}</p>
      </div>
    </section>
  );
};
