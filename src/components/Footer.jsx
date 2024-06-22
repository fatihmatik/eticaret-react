const Footer = () => {
  return (
    <div className="bg-blue-500 text-white py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
        <div className="flex space-x-4 mb-4">
          <a
            href="what"
            className="text-white hover:text-gray-100 transition duration-100"
          >
            Facebook
          </a>
          <a
            href="what"
            className="text-white hover:text-gray-100 transition duration-100"
          >
            Twitter
          </a>
          <a
            href="what"
            className="text-white hover:text-gray-100 transition duration-100"
          >
            Instagram
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} World's Best E-Commerce Site. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
