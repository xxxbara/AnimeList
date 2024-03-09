import { authUserSession } from "@/libs/auth-libs";
import Header from "../Header";
import prisma from "@/libs/prisma";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-2 p-4 w-full">
      <Header title="My Comment" />
      <div className="text-color-dark grid gap-4 sm:grid-cols-1 lg:grid-cols-2 py-4">
        {comments.map((comment, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${comment.anime_mal_id}`}
              className="w-full border-2 p-2 bg-color-primary rounded-lg"
            >
              <h2 className="text-xl">{comment.anime_title}</h2>
              <p>{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
