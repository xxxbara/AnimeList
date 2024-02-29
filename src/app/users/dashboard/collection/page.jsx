import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const user = await authUserSession();

  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  // Menggunakan Promise.all untuk menunggu semua panggilan getAnimeResponse selesai
  const dataPromises = collection.map((anime) => {
    return getAnimeResponse(`anime/${anime.anime_mal_id}`);
  });

  const responseData = await Promise.all(dataPromises);

  return (
    <section className="mt-2 p-4 w-full">
      <Header title="My Collection" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {responseData.map((anime, index) => {
          console.log(anime);
          return (
            <Link
              key={index}
              // href={`/anime/${animeData.mal_id}`}
              href=""
              className="border-2 border-color-accent relative"
            >
              <Image
                src=""
                alt=""
                width={350}
                height={350}
                className="w-full"
              />
              <div className="absolute bottom-0 w-full bg-color-accent h-16 flex justify-center items-center">
                <h5 className="text-xl text-center">{anime}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
