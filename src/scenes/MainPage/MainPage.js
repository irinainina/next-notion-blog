'use client';
import { useState, useEffect } from "react";
import MainTitle from "@/components/MainTitle/MainTitle";
import Filter from "@/components/Filter/Filter";
import PostList from "@/components/PostList/PostList";

const MainPage = ({ data }) => {
  const [tagActive, setTagActive] = useState("All Categories");
  const [filterData, setFilterData] = useState(data);

  useEffect(() => {
    if (tagActive === "All Categories") {
      setFilterData(data);
    } else {
      setFilterData(data.filter((item) => item.tag === tagActive));
    }
  }, [tagActive]);

  return (
    <>
      <MainTitle />
      <Filter tagActive={tagActive} setTagActive={setTagActive} />
      <PostList data={filterData} />
    </>
  );
};

export default MainPage;
