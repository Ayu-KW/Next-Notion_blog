import { Client } from "@notionhq/client";

const notion = new Client({
  // ちゃんと認証できているかどうかを確認する
  // envファイルにアクセスるるために「process.env」と記述
  auth: process.env.NOTION_TOKEN,
});

export const getAllPosts = () => {};
