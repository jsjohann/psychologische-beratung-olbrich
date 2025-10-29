import * as React from "react";
import { Link } from "gatsby";
import Footer from "../components/Footer";

const ImpressumPage = () => {
  return (
    <div className="min-h-screen bg-white font-cabin flex flex-col">
      {/* Header */}
      <header className="bg-alabaster py-12 px-4">
        <div className="max-w-4xl mx-auto flex justify-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src="../logo.svg" alt="Logo" className="w-24 h-auto" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-2xl lg:text-3xl text-coral-red mb-8">
            Impressum
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray">
              <div>
                <h2 className="text-xl text-coral-red mb-2">
                  Angaben gemäß § 5 TMG
                </h2>
                <p className="text-base">
                  Dr. Anne-Katrin Olbrich
                  <br />
                  Psychologische Beratung
                  <br />
                  Sternplatz 15
                  <br />
                  01067 Dresden
                </p>
              </div>

              <div>
                <h2 className="text-xl text-coral-red mb-2">Kontakt</h2>
                <p className="text-base">
                  Telefon:{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const phone = "0151" + "59954610";
                      window.location.href = "tel:" + phone;
                    }}
                    className="hover:underline"
                    style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
                  >
                    01 645 995 – 1510
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const email = "anne-katrin.olbrich" + "@" + "t-online.de";
                      window.location.href = "mailto:" + email;
                    }}
                    className="hover:underline"
                    style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
                  >
                    ed.enilno-t@hcirblo.nirtak-enna
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-xl text-coral-red mb-2">
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </h2>
                <p className="text-base">
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600">
                  Quelle:{" "}
                  <a
                    href="https://www.e-recht24.de/impressum-generator.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    https://www.e-recht24.de/impressum-generator.html
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ImpressumPage;
