import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const popularAnime = await getAnimeResponse("top/anime");
  const topAnime = popularAnime.data.slice(0, 8);

  const recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  const recommendedAnimeSlice = recommendedAnime.slice(0, 8);
  // console.log(recommendedAnime);

  return (
    <>
      {/* Popular Anime */}
      <section>
        <Header title="Most Popular" linkHref="/popular" linkTitle="See All" />
        <AnimeList api={topAnime} />
      </section>
      {/* Recommendation Anime */}
      <section>
        <Header title="Recommendation" />
        <AnimeList api={recommendedAnimeSlice} />
      </section>
    </>
  );
};

export default Page;
