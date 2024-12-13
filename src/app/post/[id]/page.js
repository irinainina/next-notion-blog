import { notFound } from "next/navigation";
import { Client } from "@notionhq/client";
import { NotionRenderer } from "@notion-render/client";
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const database_id = process.env.NOTION_DATABASE_ID;
import normalizeDataItem from "@/utils/normalizeDataItem";
import Post from "@/scenes/Post/Post";
import styles from "./page.module.css";

const databaseQuery = async () => {
  const data = await notion.databases.query({ database_id });
  return data.results;
};

export async function generateStaticParams() {
  const data = await databaseQuery();

  return data.map((item) => ({
    postId: item.properties.post.rich_text[0].plain_text,
  }));
}

export async function fetchPost(postId) {
  try {
    const data = await databaseQuery();
    const post = data.find((item) => item.properties.post.rich_text[0].plain_text === postId);
    const normalizePost = normalizeDataItem(post);
    return normalizePost;
  } catch (error) {
    return null;
  }
}

export async function fetchContent(postId) {
  const client = new Client({
    auth: process.env.NOTION_API_KEY,
  });
  const renderer = new NotionRenderer();
  const { results } = await client.blocks.children.list({
    block_id: postId,
  });
  const html = await renderer.render(...results);
  return html;
}

export default async function PostPage(props) {
  const params = await props.params;
  const post = await fetchPost(params.id);
  if (!post) {
    return notFound();
  }
  const content = await fetchContent(params.id);

  return (
    <main className={styles.main}>
      <Post
        post={post}
        content={content}
      />
    </main>
  );
};
