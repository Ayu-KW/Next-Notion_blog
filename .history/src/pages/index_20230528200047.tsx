/* eslint-disable react/jsx-key */
import Head from "next/head";
import { getAllPosts } from "../../lib/notionAPI";
import { SinglePost } from "../../components/Post/SinglePost";

export const getStaticProps = async () => {
  const fourPosts = await getPostsFourTopPage();
  return {
    props: {
      fourPosts,
    },
    revalidate: 60,
  };
};

export default function Home({ allPosts }: any) {
  console.log(allPosts);
  return (
    <div className="container h-full w-full mx-auto font-serif">
      <Head>
        <title>Next&Notion Blog</title>
        <meta name="description" content="Next.jsとNotionAPIで作成したブログです" />
      </Head>
      <main className="container w-full mt-16">
        <h1 className="text-5xl font-medium text-center mb-16">Next&Notion Blog</h1>
        {allPosts.map((post: any) => (
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
