import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  isPaginationPage: boolean;
};

export const SinglePost = (props: Props) => {
  const { title, description, date, tags, slug } = props;
  return (
    <section
      className="lg:w-1/2 bg-teal-700 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:bg-teal-500 hover:translate-y-1 transition-all duration-300
        "
    >
      <Link href={`/posts/${slug}`}>
        <div className="flex items-center gap-3">
          <h2 className="text-white text-2xl font-medium mb-2">{title}</h2>
          <time dateTime={date} className="text-white">
            {date}
          </time>
          <div className="flex gap-1">
            {tags.map((tag, index) => (
              <p key={index} className="text-white bg-emerald-600 rounded-xl px-2 font-medium">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <p className="text-gray-100">{description}</p>
      </Link>
    </section>
  );
};
