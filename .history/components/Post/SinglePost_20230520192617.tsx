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
      className="bg-teal-700 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:bg-teal-700 hover:translate-y-1 transition-all duration-300
    "
    >
      <div>
        <h2 className="text-white font-bold">{title}</h2>
        <time dateTime={date} className="text-teal-600">
          {date}
        </time>
        <div className="bg-white rounded-md p-2 text-teal-700">{tag}</div>
      </div>
      <p className="text-gray-700">{description}</p>
    </section>
  );
};
