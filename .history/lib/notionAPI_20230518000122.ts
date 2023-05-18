import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAllPosts = async () => {
  const notionDatabaseId = process.env.NOTION_DATABASE_ID;

  if (!notionDatabaseId) {
    throw new Error("NOTION_DATABASE_IDが設定されていません");
  }

  const posts = await notion.databases.query({
    database_id: notionDatabaseId,
    page_size: 100,
  });
  const allPosts = posts.results;
  return allPosts;
};
