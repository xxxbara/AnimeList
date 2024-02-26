const Footer = () => {
  return (
    <footer className="text-color-primary ">
      <div className="mt-4 border-t border-gray-700">
        <div className="container mx-auto text-center px-4 py-4">
          <p>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <span className="text-color-accent">RyAnime</span>. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
