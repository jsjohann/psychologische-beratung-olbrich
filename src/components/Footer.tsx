import { Link } from "gatsby";
import * as React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-alabaster py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-base">
            <Link
              to="/"
              className="text-black hover:text-coral-red transition-colors"
            >
              Dr. Anne-Katrin Olbrich
            </Link>
          </div>
          <div className="flex space-x-6 text-base">
            <Link
              to="/impressum"
              className="text-black hover:text-coral-red transition-colors"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-black hover:text-coral-red transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
