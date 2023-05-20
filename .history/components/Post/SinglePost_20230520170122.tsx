import React from "react";

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
    <section className="bg-sky-900 m">
      <div>
        <h2>{title}</h2>
        <time dateTime={date}>{date}</time>
        <ul>
          <li>{tag}</li>
        </ul>
      </div>
      <p>{description}</p>
    </section>
  );
};
