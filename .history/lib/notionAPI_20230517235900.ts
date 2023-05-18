import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const notionDatabaseId = process.env.NOTION_DATABASE_ID;
export const getAllPosts = async () => {
  const posts = await notion.databases.query({
    database_id: notionDatabaseId,
    page_size: 100,
  });
  const allPosts = posts.results;
  return allPosts;
};
