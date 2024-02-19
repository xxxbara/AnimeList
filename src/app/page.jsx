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

  const getRandomAnime = (data, n) => {
    const anime = data.sort(() => 0.5 - Math.random());
    return anime.slice(0, n);
  };

  const recommendedAnimeSlice = getRandomAnime(recommendedAnime, 8);

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
