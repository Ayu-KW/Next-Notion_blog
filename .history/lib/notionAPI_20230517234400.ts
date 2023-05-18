import { Client } from "@notionhq/client";

const notion = new Client({
  // ちゃんと認証できているかどうかを確認する
  // envファイルにアクセスるるために「process.env」と記述
  auth: process.env.NOTION_TOKEN,
});

// async：非同期処理、APIを使用する時は基本的に行う
export const getAllPosts = async () => {};
