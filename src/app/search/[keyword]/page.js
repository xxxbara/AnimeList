import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );

  const animeResponse = await response.json();
  const searchAnime = animeResponse.data.slice(0, 8);

  return (
    <>
      <section>
        <Header title={`Result for ${keyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
