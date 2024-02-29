import { getAnimeResponse } from "@/libs/api-libs";
import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const animeList = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <Header title={`Result for ${decodedKeyword}`} />
        <AnimeList api={animeList} />
      </section>
    </>
  );
};

export default Page;
