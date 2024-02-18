const Footer = () => {
  return (
    <footer className="text-color-primary py-8">
      <div className="mt-4 border-t border-gray-700">
        <div className="container mx-auto text-center px-4 py-4">
          <p>
            Copyright &copy; {new Date().getFullYear()} RyAnime. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
