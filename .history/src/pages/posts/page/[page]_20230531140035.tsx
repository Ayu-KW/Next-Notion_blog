/* eslint-disable react/jsx-key */
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getNumberOfPages, getPostsFourTopPage } from "../../../../lib/notionAPI";
import { SinglePost } from "../../../../components/Post/SinglePost";
import { getPostsByPage } from "../../../../lib/notionAPI";

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfpage = await getNumberOfPages();
  let params = [];
  for (let i = 1; 1 <= numberOfpage; i++) {
    params.push({ params: { page: i } });
  }
  return {
    paths: [{ params: { page: "1" } }, { params: { page: "2" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const currentPage = context.params?.page || "";
  const postsByPage = await getPostsByPage(parseInt(currentPage.toString(), 10));
  return {
    props: {
      postsByPage,
    },
    revalidate: 60,
  };
};

const BlogPageList = ({ postsByPage }: any) => {
  return (
    <div className="container h-full w-full mx-auto font-serif">
      <Head>
        <title>Next&Notion Blog</title>
        <meta name="description" content="Next.jsとNotionAPIで作成したブログです" />
      </Head>
      <main className="container w-full mt-16">
        <h1 className="text-5xl font-medium text-center mb-16">Next&Notion Blog</h1>
        {postsByPage.map((post: any) => (
          <div className="mx-4" key={post.id}>
            <SinglePost
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              slug={post.slug}
              isPaginationPage={true}
            />
          </div>
        ))}
      </main>
    </div>
  );
};

export default BlogPageList;
