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
      <div>
        <h2>{title}</h2>
        <time dateTime={date}>{date}</time>
        <div>{tag}</div>
        <p>{description}</p>
      </div>
    </section>
  );
};
