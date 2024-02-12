import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );

  const animeResponse = await response.json();
  const topAnime = animeResponse.data.slice(0, 8);

  return (
    <>
      {/* Popular Anime */}
      <section>
        <Header title="Most Popular" linkHref="/popular" linkTitle="See All" />
        <AnimeList api={topAnime} />
      </section>
      {/* Latest Anime */}
      <section>
        <Header title="Latest" linkHref="/latest" linkTitle="See All" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Home;
