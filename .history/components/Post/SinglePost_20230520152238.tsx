import React from "react";

type Props = {
  title=string,
  description=string
  date={post.date}
  tag={post.tags}
  slug={post.tags}
};

export const SinglePost = (props: any) => {
  const { title, description } = props;
  return <div>SinglePost</div>;
};
