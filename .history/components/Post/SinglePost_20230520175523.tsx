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
    <section>
      <div className="bg-teal-300 mb-8 mx-auto rounded-md p-5 shadow-2xl">
        <h2 className="text-5xl font-medium text-center mb-16">{title}</h2>
        <time dateTime={date}>{date}</time>
        <div>{tag}</div>
      </div>
      <p>{description}</p>
    </section>
  );
};
