/* eslint-disable react/jsx-key */
import Head from "next/head";
import { getAllPosts, getPostsFourTopPage } from "../../lib/notionAPI";
import { SinglePost } from "../../components/Post/SinglePost";
import { GetStaticProps } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const fourPosts = await getPostsFourTopPage(4);
  return {
    props: {
      fourPosts,
    },
    revalidate: 60,
  };
};

export default function Home({ fourPosts }: any) {
  return (
    <div className="container h-full w-full mx-auto font-serif">
      <Head>
        <title>Next&Notion Blog</title>
        <meta name="description" content="Next.jsとNotionAPIで作成したブログです" />
      </Head>
      <main className="container w-full mt-16">
        <h1 className="text-5xl font-medium text-center mb-16">Next&Notion Blog</h1>
        {fourPosts.map((post: any) => (
          <div className="mx-4" key={post.id}>
            <SinglePost
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              slug={post.slug}
            />
          </div>
        ))}
        <Link
          href="/posts/page/1"
          className="mb-6 lg:w-1/2 mx-auto rounded-md px-5 block text-right text-lg font-semibold"
        >
          …もっと見る
        </Link>
      </main>
    </div>
  );
}
