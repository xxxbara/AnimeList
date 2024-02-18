import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  
  const data = await getAnimeResponse("top/anime");
  const topAnime = data.data.slice(0, 8);
  
  return (
    <>
      {/* Popular Anime */}
      <section>
        <Header title="Most Popular" linkHref="/popular" linkTitle="See All" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
