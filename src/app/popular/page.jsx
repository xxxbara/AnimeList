"use client";

import AnimeSearchListWithoutSlice from "@/components/AnimeListWithoutSlice";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );

    const data = await response.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <section>
        <HeaderMenu title={`MOST POPULAR ANIME #${page}`} />
        <AnimeSearchListWithoutSlice api={topAnime} />
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </section>
    </>
  );
};

export default Page;
