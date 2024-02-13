import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex text-color-primary justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          className="md:text-xl text-md underline hover:text-color-accent transition-all"
          href={linkHref}
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
