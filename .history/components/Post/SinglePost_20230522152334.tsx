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
    <section
      className="bg-teal-700 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:bg-teal-500 hover:translate-y-1 transition-all duration-300
    "
    >
      <div className="flex items-center gap-3">
        <h2 className="text-white text-2xl font-medium mb-2">{title}</h2>
        <time dateTime={date} className="text-white">
          {date}
        </time>
        <div className="text-white bg-lime-600">{tag}</div>
      </div>
      <p className="text-gray-100">{description}</p>
    </section>
  );
};
