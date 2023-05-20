import React from "react";

type Props = {
  title={post.title} description={post.description} tag={post.tags} slug={post.tags}

};

export const SinglePost = (props: any) => {
  const { title, description } = props;
  return <div>SinglePost</div>;
};
