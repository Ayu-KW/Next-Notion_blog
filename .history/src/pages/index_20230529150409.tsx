/* eslint-disable react/jsx-key */
import Head from "next/head";
import { getAllPosts, getPostsFourTopPage } from "../../lib/notionAPI";
import { SinglePost } from "../../components/Post/SinglePost";
import { GetStaticProps } from "next";

// 型を設定（GetStaticProps：Next.jsの機能・レンダリング時にpropsを返す）
// propsの中身が設定されているか、ちゃんと受け取れているか確認
export const getStaticProps: GetStaticProps = async () => {
  const fourPosts = await getPostsFourTopPage(5);
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
      </main>
    </div>
  );
}
