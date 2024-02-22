import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="mt-8 text-color-primary text-2xl flex flex-col justify-center items-center">
      <h5 className="text-4xl font-bold">
        Welcome, <span className="text-color-accent">{user?.name}</span>
      </h5>
      <Image
        src={user?.image}
        alt="profile picture"
        width={250}
        height={250}
        className="width-250px height-250px mt-3 rounded-full"
      />
      <div className="py-8 flex flex-wrap gap-4">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent text-color-dark font-bold py-3 px-3 text-xl rounded-sm"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent text-color-dark font-bold py-3 px-3 text-xl rounded-sm"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
