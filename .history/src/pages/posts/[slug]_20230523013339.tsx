import React from "react";
import { getSinglePost } from "../../../lib/notionAPI";

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "post-1" } }, { params: { id: "post-2" } }],
    // fallback：存在しないページへのアクセスがあったときにどうするか？（上記のpathsで指定した以外のページを表示しようとすると…）
    // "true"の場合：情報がなくてもクライアント側で新しくページを作ってしまう（表示できるもののみ表示される＝中途半端なHTML）
    // "false"の場合：「404」が表示される
    // "blocking"の場合：サーバー側で新しくページが作られるまで何も表示されない（ページが作られるまで待つ必要がある）
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

const Post = (post: any) => {
  return (
    <section className="container lg:px-2 px-5 lg:w-2/5 mx-auto mt-20">
      <h2 className="w-full text-2xl font-medium">3回目の投稿です。</h2>
      <span className="block border-b-2 w-1/3 mt-1 border-teal-500"></span>
      <time dateTime={"0000/00/00"} className="text-gray-400">
        0000/00/00
      </time>
      <div>
        <p className="bg-teal-600 text-white rounded-xl font-medium mt-2 px-2 inline-block">
          Webサイト制作
        </p>
      </div>
      <div className="mt-10 font-medium">記事の中身</div>
    </section>
  );
};

export default Post;
