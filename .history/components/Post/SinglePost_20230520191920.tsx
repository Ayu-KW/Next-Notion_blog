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
    <section className="bg-teal-200 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none  hover:translate-y-1 transition-all ">
      <div>
        <h2 className="">{title}</h2>
        <time dateTime={date}>{date}</time>
        <div>{tag}</div>
      </div>
      <p>{description}</p>
    </section>
  );
};
