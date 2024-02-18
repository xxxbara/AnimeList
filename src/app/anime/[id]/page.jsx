import { getAnimeResponse } from "@/app/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { Play } from "@phosphor-icons/react";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const response = await getAnimeResponse(`anime/${id}`);
  const anime = response.data;

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-color-primary text-2xl">
          {anime.title} - {anime.year}
        </h3>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.images.webp.image_url}
          alt={anime.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <div>
          <div>
            <h3 className="text-xl">Overview:</h3>
            <p className="text-justify">{anime.synopsis}</p>
          </div>
          <div className="mt-3 text-xsm sm:flex gap-4 text-color-accent">
            <h3 className="p-3 rounded border border-color-primary">
              Rank: {anime.rank}
            </h3>
            <h3 className="p-3 rounded border border-color-primary">
              Score: {anime.score}
            </h3>
            <h3 className="p-3 rounded border border-color-primary">
              Type: {anime.type}
            </h3>
            <h3 className="p-3 rounded border border-color-primary">
              Episodes: {anime.episodes}
            </h3>
            <h3 className="p-3 rounded border border-color-primary">
              Genres: {anime.genres.map((genre) => genre.name).join(", ")}
            </h3>{" "}
          </div>
          <div className="mt-4">
            RyAnime is a site to watch online anime like Anime{" "}
            <span className="font-bold text-color-accent">{anime.title}</span>{" "}
            online, or you can even watch{" "}
            <span className="font-bold text-color-accent">{anime.title}</span>{" "}
            in HD quality.
          </div>
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
