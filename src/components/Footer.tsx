import * as React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-alabaster py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-sm">
            <a
              href="/"
              className="text-black hover:text-coral-red transition-colors"
            >
              Dr. Anne-Katrin Olbrich
            </a>
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="/impressum"
              className="text-black hover:text-coral-red transition-colors"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-black hover:text-coral-red transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
