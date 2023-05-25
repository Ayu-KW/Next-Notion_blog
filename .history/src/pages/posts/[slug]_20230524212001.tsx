/* eslint-disable react/no-children-prop */
import React from "react";
import { getAllPosts, getSinglePost } from "../../../lib/notionAPI";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";

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
      <div className="flex gap-1">
        {post.metadata.tags.map((tag: string, index: number) => (
          <p
            key={index}
            className="bg-teal-600 text-white rounded-xl font-medium mt-2 px-2 inline-block"
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="mt-10 font-medium">
        <ReactMarkdown
          children={post.markdown.parent}
          // 参考サイトにある（SyntaxHighlight）の項目からコピーして編集する
          components={{
            // 「code」タグで書かれたものの内容を判別する
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              // 条件が合うものに関しては「SyntaxHighlighter」というコンポーネントで囲い出力
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, "")}
                  style={dark}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </section>
  );
};

export default Post;
