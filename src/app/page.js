import Link from "next/link";
import AnimeList from "@/components/AnimeList";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );

  const animeResponse = await response.json();
  const animeData = animeResponse.data.slice(0, 8);

  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Most Popular</h1>
        <Link
          className="md:text-xl text-md underline hover:text-indigo-500 transition-all"
          href="/popular"
        >
          See All
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {animeData.map((data) => (
          <div key={data.mal_id} className="shadow-xl ">
            <AnimeList
              title={data.title}
              images={data.images.webp.image_url}
              id={data.mal_id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
