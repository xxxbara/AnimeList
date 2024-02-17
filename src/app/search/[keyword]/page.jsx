import Header from "@/components/AnimeList/Header";
import AnimeSearchListWithoutSlice from "@/components/AnimeListWithoutSlice";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  );

  const animeList = await response.json();

  return (
    <>
      <section>
        <Header title={`Result for ${decodedKeyword}`} />
        <AnimeSearchListWithoutSlice api={animeList} />
      </section>
    </>
  );
};

export default Page;
