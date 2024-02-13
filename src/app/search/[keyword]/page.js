import Header from "@/components/AnimeList/Header";
import AnimeSearchList from "@/components/AnimeSearchList";

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );

  const animeList = await response.json();

  return (
    <>
      <section>
        <Header title={`Result for ${keyword}`} />
        <AnimeSearchList api={animeList} />
      </section>
    </>
  );
};

export default Page;
