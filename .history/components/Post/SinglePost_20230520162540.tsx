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
      <div>
        <h2>{title}</h2>
        <time datetime="2018-07-07"></time>
      </div>
    </section>
  );
};
