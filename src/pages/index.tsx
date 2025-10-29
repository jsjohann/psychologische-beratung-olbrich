import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import Map from "../components/Map";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faEnvelope,
  faLocationDot,
  faPeopleRoof,
  faPersonRays,
  faPhone,
  faVideo,
  faX,
} from "@fortawesome/free-solid-svg-icons";

const IndexPage: React.FC<PageProps> = () => {
  const [isQualifikationenModalOpen, setIsQualifikationenModalOpen] =
    React.useState(false);
  const [isPraxiserfahrungenModalOpen, setIsPraxiserfahrungenModalOpen] =
    React.useState(false);

  const QualifikationenModal = () => (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={() => setIsQualifikationenModalOpen(false)}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-3xl lg:text-4xl text-coral-red">
              Qualifikationen
            </h3>
            <button
              onClick={() => setIsQualifikationenModalOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FontAwesomeIcon icon={faX} className="text-xl" size="xl" />
            </button>
          </div>
          <div className="space-y-3 text-black">
            <div>
              <h4 className="text-lg">Diplom Kulturwissenschaftlerin</h4>
              <p className="text-lg text-gray">Karl-Marx-Universität Leipzig</p>
            </div>
            <div>
              <h4 className="text-lg">
                Psychologische Beraterin in Integrierter Familienorientierter
                Beratung – IFB
              </h4>
              <p className="text-lg text-gray">
                Evangelisches Zentralinstitut für Familienberatung (EZI), Berlin
              </p>
            </div>
            <div>
              <h4 className="text-lg">
                Zertifikat Weiterbildungscurriculum „Psychosoziale Beratung im
                Kontext pränataler Diagnostik"
              </h4>
              <p className="text-lg text-gray">
                Evangelisches Zentralinstitut für Familienberatung (EZI), Berlin
              </p>
            </div>
            <div>
              <h4 className="text-lg">Certificate Marte Meo Therapist</h4>
              <p className="text-lg text-gray">
                Marte Meo Institut Deutschland – Region Ost
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PraxiserfahrungenModal = () => (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={() => setIsPraxiserfahrungenModalOpen(false)}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-3xl lg:text-4xl text-coral-red">
              Praxiserfahrungen
            </h3>
            <button
              onClick={() => setIsPraxiserfahrungenModalOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FontAwesomeIcon icon={faX} className="text-xl" size="xl" />
            </button>
          </div>
          <div className="space-y-3 text-black">
            <div>
              <h4 className="text-lg">
                Evangelische Beratungsstelle der Diakonie Dresden
              </h4>
              <p className="text-lg text-gray">2014 – 2025</p>
            </div>
            <div>
              <h4 className="text-lg">
                Schwangeren- und Schwangerschaftskonfliktsberatungsstelle der
                Diakonie Freiberg
              </h4>
              <p className="text-lg text-gray">2009 – 2014</p>
            </div>
            <div>
              <h4 className="text-lg">
                Familienberatungsstelle der Diakonie Pirna
              </h4>
              <p className="text-lg text-gray">2007 – 2014</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-cabin">
      {/* 1. Teaser Section */}
      <section className="bg-alabaster lg:py-32 py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-9 flex justify-center">
            <img src="./logo.svg" alt="Logo" className="w-48 h-auto" />
          </div>
          <h1 className="text-3xl lg:text-4xl text-coral-red mb-1">
            Dr. Anne-Katrin Olbrich
          </h1>
          <p className="text-xl text-gray">
            Psychologische Beratung in Dresden
          </p>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="lg:py-24 py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-16">
            {/* Lebensberatung */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <FontAwesomeIcon
                  icon={faPersonRays}
                  className="text-7xl text-coral-red"
                  size="2xl"
                />
              </div>
              <h3 className="text-2xl text-coral-red mb-1">Lebensberatung</h3>
              <p className="text-gray text-xl">
                Begleitung bei Entscheidungen und persönlicher Orientierung
              </p>
            </div>

            {/* Paarberatung */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <FontAwesomeIcon
                  icon={faComments}
                  className="text-7xl text-coral-red"
                  size="2xl"
                />
              </div>
              <h3 className="text-2xl text-coral-red mb-1">Paarberatung</h3>
              <p className="text-gray text-xl">
                Unterstützung bei Konflikten und Kommunikation in Beziehungen
              </p>
            </div>

            {/* Familienberatung */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <FontAwesomeIcon
                  icon={faPeopleRoof}
                  className="text-7xl text-coral-red"
                  size="2xl"
                />
              </div>
              <h3 className="text-2xl text-coral-red mb-1">Familienberatung</h3>
              <p className="text-gray text-xl">
                Beratung Erwachsener zu generationsübergreifenden Familienthemen
              </p>
            </div>

            {/* Marte Meo Therapie */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <FontAwesomeIcon
                  icon={faVideo}
                  className="text-7xl text-coral-red"
                  size="2xl"
                />
              </div>
              <h3 className="text-2xl text-coral-red mb-1">
                Marte Meo Therapie
              </h3>
              <p className="text-gray text-xl">
                Förderung von Entwicklung durch Videoanalyse
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quote Section */}
      <section className="bg-alabaster lg:py-24 py-12 px-8">
        <div className="max-w-xl mx-auto text-left">
          <blockquote className="text-3xl lg:text-4xl text-coral-red mb-3">
            „Das Leben kann nur rückwärts verstanden werden – es muss aber nach
            vorne gelebt werden."
          </blockquote>
          <cite className="text-xl text-gray">– Søren Kierkegaard</cite>
        </div>
      </section>

      {/* 4. About Me Section */}
      <section className="lg:py-24 py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:col-start-2">
              <h2 className="text-3xl lg:text-4xl text-coral-red mb-4">
                Über mich
              </h2>
              <p className="text-xl text-black leading-relaxed">
                In meiner Arbeit begleite ich seit vielen Jahren Menschen in
                persönlichen, partnerschaftlichen und familiären Fragen. Dabei
                stütze ich mich auf vielfältige{" "}
                <button
                  onClick={() => setIsPraxiserfahrungenModalOpen(true)}
                  className="text-coral-red hover:text-coral-red/80 cursor-pointer decoration-2 transition-colors"
                >
                  Praxiserfahrungen
                </button>{" "}
                in Beratungsstellen der Diakonie sowie auf fundierte{" "}
                <button
                  onClick={() => setIsQualifikationenModalOpen(true)}
                  className="text-coral-red hover:text-coral-red/80 cursor-pointer decoration-2 transition-colors"
                >
                  Qualifikationen
                </button>{" "}
                in psychologischer Beratung und entwicklungsfördernden Methoden
                wie der Marte Meo Therapie.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="flex items-center justify-center">
                <StaticImage
                  src="../images/anne-katrin-olbrich.jpg"
                  alt="Anne-Katrin Olbrich"
                  className="w-full"
                  layout="constrained"
                  placeholder="blurred"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section>
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 md:items-stretch">
            <div className="md:col-span-6">
              <div className="bg-gray-200 flex items-center justify-center h-96 md:h-full">
                <Map />
              </div>
            </div>
            <div className="md:col-span-6 bg-warm-green p-8 lg:p-24">
              <h2 className="text-3xl lg:text-4xl text-white mb-5">Kontakt</h2>
              <div className="space-y-2 text-white">
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-white mr-3 flex-shrink-0 mt-1"
                    size="sm"
                  />
                  <div>
                    <p className="text-xl">Sternplatz 15</p>
                    <p className="text-xl">01067 Dresden</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-white mr-3 flex-shrink-0 mt-1"
                    size="sm"
                  />
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const phone = "0151" + "59954610";
                      window.location.href = "tel:" + phone;
                    }}
                    className="text-xl hover:underline"
                    style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
                  >
                    01 645 995 – 1510
                  </a>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-white mr-3 flex-shrink-0 mt-1"
                    size="sm"
                  />
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const email = "anne-katrin.olbrich" + "@" + "t-online.de";
                      window.location.href = "mailto:" + email;
                    }}
                    className="text-xl hover:underline"
                    style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
                  >
                    ed.enilno-t@hcirblo.nirtak-enna
                  </a>
                </div>
              </div>
              <p className="text-xl text-white mt-4">
                Termine nur nach vorheriger Vereinbarung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <Footer />

      {/* Modals */}
      {isQualifikationenModalOpen && <QualifikationenModal />}
      {isPraxiserfahrungenModalOpen && <PraxiserfahrungenModal />}
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Dr. Anne-Katrin Olbrich – Psychologische Beratung Dresden</title>
    <meta
      name="description"
      content="Psychologische Beratung in Dresden – Lebensberatung, Paarberatung, Familienberatung und Marte Meo Therapie"
    />
    <meta name="theme-color" content="#e56c5c" />
    <script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id="3c1dcc53-1f96-458e-9d8c-16b4892fbfb0"
    ></script>
  </>
);
