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

export default function Home({ allPosts }: { allPosts: any }) {
  console.log(allPosts);
  return (
    <div>
      <Head>
        <title>Next.jsとNotionAPIで作成したブログ</title>
        <meta name="description" content="" />
      </Head>
      <div>{allPosts}</div>
    </div>
  );
}
