import React from "react";

type Props = {
  id: number;
  title: string;
  description: string;
  date: string;
  tag: string;
  slug: string;
};

export const SinglePost = (props: Props) => {
  const { id, title, description, date, tag, slug } = props;
  return (
    <section className="mb-8" key={}>
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
