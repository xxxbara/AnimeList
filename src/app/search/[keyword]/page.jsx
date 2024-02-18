import { getAnimeResponse } from "@/app/libs/api-libs";
import Header from "@/components/AnimeList/Header";
import AnimeListWithoutSlice from "@/components/AnimeListWithoutSlice";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const animeList = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <Header title={`Result for ${decodedKeyword}`} />
        <AnimeListWithoutSlice api={animeList} />
      </section>
    </>
  );
};

export default Page;
