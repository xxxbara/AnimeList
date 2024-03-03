import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import SaveButton from "@/components/Utilities/SaveButton";
import SynopsisAnimeOverview from "@/components/Utilities/SynopsisAnimeOverview";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-color-primary text-2xl">
          {anime.title} - {anime.year}
        </h3>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-4 text-color-primary">
        <Image
          src={anime.images.webp.image_url}
          alt={anime.images.jpg.image_url}
          width={250}
          height={250}
          className="detail-anime"
        />
        <div>
          <div className="flex gap-4">
            <VideoPlayer youtubeId={anime.trailer.youtube_id} />
            {!collection && user && (
              <SaveButton
                anime_mal_id={id}
                user_email={user?.email}
                anime_title={anime.title}
                anime_image={anime.images.webp.image_url}
              />
            )}
          </div>
          <div className="mt-2">
            <SynopsisAnimeOverview anime={anime} />
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
              Episode: {anime.episodes}
            </h3>
            <h3 className="p-3 rounded border border-color-primary">
              Genre: {anime.genres.map((genre) => genre.name).join(", ")}
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
      {/* <div>
      </div> */}
    </>
  );
};

export default Page;
