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
    </div>
  );
}
