import React from "react";
import { getAllPosts, getSinglePost } from "../../../lib/notionAPI";

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = await getSinglePost(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

const Post = ({ post }: any) => {
  return (
    <section className="container lg:px-2 px-5 lg:w-2/5 mx-auto mt-20">
      <h2 className="w-full text-2xl font-medium">{post.metadata.title}</h2>
      <span className="block border-b-2 w-1/3 mt-1 border-teal-500"></span>
      <time dateTime={post.metadata.date} className="text-gray-400">
        {post.metadata.date}
      </time>
      <div>
        {post.metadata.tags.map((tag: string) => (
          <p className="bg-teal-600 text-white rounded-xl font-medium mt-2 px-2 inline-block">
            {tag}
          </p>
        ))}
      </div>
      <div className="mt-10 font-medium">記事の中身</div>
    </section>
  );
};

export default Post;
