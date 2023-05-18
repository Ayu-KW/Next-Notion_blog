import { Client } from "@notionhq/client";

const notion = new Client({
  // ちゃんと認証できているかどうかを確認する
  auth: process.env.NOTION_TOKEN,
});
