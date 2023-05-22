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
      <div className="">
        <h2 className="">{title}</h2>
        <time dateTime={date}>{date}</time>
        <div>{tag}</div>
      </div>
      <p>{description}</p>
    </section>
  );
};
