import Head from "next/head";
import { getAllPosts } from "../../lib/notionAPI";

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts,
    },
    revalidate: 60,
  };
};

export default function Home({ allPosts }: any) {
  console.log(allPosts);
  return (
    <div>
      <Head>
        <title>Next&Notion Blog</title>
        <meta name="description" content="Next.jsとNotionAPIで作成したブログです" />
      </Head>
      <main className="container w-full mt-16">
        <h1 className="text-5xl font-medium text-center mb-16">Next&Notion Blog</h1>
        {allPosts.map((post) => {
          <div className="mx-4">{post.title}</div>;
        })}
      </main>
    </div>
  );
}
