import { Client } from "@notionhq/client";
import normalizeDataItem from "@/utils/normalizeDataItem";
import MainPage from "@/scenes/MainPage/MainPage";
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const database_id = process.env.NOTION_DATABASE_ID;

export async function fetchPosts() {
  const data = await notion.databases.query({ database_id: database_id });
  const normalizeData = data.results.map((item) => normalizeDataItem(item));
  const sortData = normalizeData.sort((a, b) => a.id - b.id);
  return sortData;
}

const HomePage = async () => {
  const data = await fetchPosts();

  return (
    <main>
      <MainPage data={data} />
    </main>
  );
};

export default HomePage;
