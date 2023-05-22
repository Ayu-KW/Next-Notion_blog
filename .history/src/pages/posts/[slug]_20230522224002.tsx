import React from "react";

const Post = () => {
  return (
    <section className="container lg:px-2 px-5 lg:w-2/5 mx-auto mt-20">
      <h2 className="w-full text-2xl font-medium">3回目の投稿です。</h2>
      <span className="block border-b-2 w-1/3 mt-1 border-teal-500"></span>
      <time dateTime={"0000/00/00"} className="text-gray-400">
        0000/00/00
      </time>
      <div>
        <p className="bg-emerald-600 text-white font-medium mt-2 px-2">Webサイト制作</p>
      </div>
    </section>
  );
};

export default Post;
