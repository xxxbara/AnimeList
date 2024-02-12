import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Link
        className="md:text-xl text-md underline hover:text-indigo-500 transition-all"
        href={linkHref}
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
