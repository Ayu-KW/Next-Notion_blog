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

type HomeProps = {
  allPosts: [];
};

export default function Home<Array<HomeProps>>({ allPosts }) {
  console.log(allPosts);
  return (
    <div>
      <Head>
        <title style={{ color: "white" }}>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
