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
    <section className="mb-8 mx-auto rounded-md" style={{ backgroundColor: "#14b8a6" }}>
      <div>
        <h2 className="">{title}</h2>
        <time dateTime={date}>{date}</time>
        <div>{tag}</div>
      </div>
      <p>{description}</p>
    </section>
  );
};
