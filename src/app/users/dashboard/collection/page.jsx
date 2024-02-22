import Image from "next/image";
import Link from "next/link";
import Header from "../Header";

const Page = () => {
  return (
    <section className="mt-2 p-4 w-full">
      <Header title="My Collection" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/" className="border-2 border-color-accent relative">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute bottom-0 w-full bg-color-accent h-16 flex justify-center items-center">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="border-2 border-color-accent relative">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute bottom-0 w-full bg-color-accent h-16 flex justify-center items-center">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="border-2 border-color-accent relative">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute bottom-0 w-full bg-color-accent h-16 flex justify-center items-center">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="border-2 border-color-accent relative">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute bottom-0 w-full bg-color-accent h-16 flex justify-center items-center">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
