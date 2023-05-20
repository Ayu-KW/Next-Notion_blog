import React from "react";

type Props = {
  title=string,
  description=string
  date={post.date}
  tag={post.tags}
  slug={post.tags}
};

export const SinglePost = (props: Props) => {
  const { title, description } = props;
  return <div>SinglePost</div>;
};
