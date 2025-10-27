import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import {
  FaVideo,
  FaPeopleRoof,
  FaComments,
  FaPersonRays,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaX,
} from "react-icons/fa6";
import { GatsbyImage } from "gatsby-plugin-image";
import Map from "../components/Map";
import Footer from "../components/Footer";

interface IndexPageData {
  image: {
    childImageSharp: {
      gatsbyImageData: any;
    };
  };
}

const IndexPage: React.FC<PageProps<IndexPageData>> = ({ data }) => {
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
        className="bg-white rounded-lg max-w-xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-coral-red">
              Qualifikationen
            </h3>
            <button
              onClick={() => setIsQualifikationenModalOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FaX className="text-xl" />
            </button>
          </div>
          <div className="space-y-3 text-black">
            <div>
              <h4 className="text-sm">Diplom Kulturwissenschaftlerin</h4>
              <p className="text-sm text-gray">Karl-Marx-Universität Leipzig</p>
            </div>
            <div>
              <h4 className="text-sm">
                Psychologische Beraterin in Integrierter Familienorientierter
                Beratung – IFB
              </h4>
              <p className="text-sm text-gray">
                Evangelisches Zentralinstitut für Familienberatung (EZI), Berlin
              </p>
            </div>
            <div>
              <h4 className="text-sm">
                Zertifikat Weiterbildungscurriculum „Psychosoziale Beratung im
                Kontext pränataler Diagnostik"
              </h4>
              <p className="text-sm text-gray">
                Evangelisches Zentralinstitut für Familienberatung (EZI), Berlin
              </p>
            </div>
            <div>
              <h4 className="text-sm">Certificate Marte Meo Therapist</h4>
              <p className="text-sm text-gray">
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
        className="bg-white rounded-lg max-w-xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-coral-red">
              Praxiserfahrungen
            </h3>
            <button
              onClick={() => setIsPraxiserfahrungenModalOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FaX className="text-xl" />
            </button>
          </div>
          <div className="space-y-3 text-black">
            <div>
              <h4 className="text-sm">
                Evangelische Beratungsstelle der Diakonie Dresden
              </h4>
              <p className="text-sm text-gray">2014 – 2025</p>
            </div>
            <div>
              <h4 className="text-sm">
                Schwangeren- und Schwangerschaftskonfliktsberatungsstelle der
                Diakonie Freiberg
              </h4>
              <p className="text-sm text-gray">2009 – 2014</p>
            </div>
            <div>
              <h4 className="text-sm">
                Familienberatungsstelle der Diakonie Pirna
              </h4>
              <p className="text-sm text-gray">2007 – 2014</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-cabin">
      {/* 1. Teaser Section */}
      <section className="bg-alabaster py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img src="/logo.svg" alt="Logo" className="w-48 h-auto" />
          </div>
          <h1 className="text-2xl md:text-2xl lg:text-3xl text-coral-red mb-1">
            Dr. Anne-Katrin Olbrich
          </h1>
          <p className="text-lg md:text-md text-gray">
            Psychologische Beratung Dresden
          </p>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Lebensberatung */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <FaPersonRays className="text-6xl text-coral-red" />
              </div>
              <h3 className="text-xl text-coral-red mb-1">Lebensberatung</h3>
              <p className="text-gray text-md">
                Begleitung bei Entscheidungen und persönlicher Orientierung
              </p>
            </div>

            {/* Paarberatung */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <FaComments className="text-6xl text-coral-red" />
              </div>
              <h3 className="text-xl text-coral-red mb-1">Paarberatung</h3>
              <p className="text-gray text-md">
                Unterstützung bei Konflikten und Kommunikation in Beziehungen
              </p>
            </div>

            {/* Familienberatung */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <FaPeopleRoof className="text-6xl text-coral-red" />
              </div>
              <h3 className="text-xl text-coral-red mb-1">Familienberatung</h3>
              <p className="text-gray text-md">
                Beratung Erwachsener zu generationsübergreifenden Familienthemen
              </p>
            </div>

            {/* Marte Meo Therapie */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <FaVideo className="text-6xl text-coral-red" />
              </div>
              <h3 className="text-xl text-coral-red mb-1">
                Marte Meo Therapie
              </h3>
              <p className="text-gray text-md">
                Förderung von Entwicklung durch Videoanalyse
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quote Section */}
      <section className="bg-alabaster py-16 px-4">
        <div className="max-w-xl mx-auto text-left">
          <blockquote className="text-xl md:text-2xl font-light text-coral-red mb-3">
            „Das Leben kann nur rückwärts verstanden werden – es muss aber nach
            vorne gelebt werden."
          </blockquote>
          <cite className="text-md text-gray">– Søren Kierkegaard</cite>
        </div>
      </section>

      {/* 4. About Me Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 lg:col-start-2">
              <h2 className="text-lg md:text-3xl text-coral-red mb-3">
                Über mich
              </h2>
              <p className="text-md text-black leading-relaxed">
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
            <div className="lg:col-span-4">
              <div className="flex items-center justify-center">
                <GatsbyImage
                  image={data.image.childImageSharp.gatsbyImageData}
                  alt="Anne-Katrin Olbrich"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section className="">
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-6">
              <div className="bg-gray-200 flex items-center justify-center h-96 lg:h-full">
                <Map />
              </div>
            </div>
            <div className="lg:col-span-6 bg-warm-green p-24">
              <h2 className="text-lg md:text-3xl text-white mb-6">Kontakt</h2>
              <div className="space-y-2 text-white">
                <div className="flex items-start">
                  <FaLocationDot className="text-white mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg">Sternplatz 15</p>
                    <p className="text-lg">01067 Dresden</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-white mr-3 flex-shrink-0 mt-1" />
                  <p className="text-lg">0151 – 599 546 10</p>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-white mr-3 flex-shrink-0 mt-1" />
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const email = "anne-katrin.olbrich" + "@" + "t-online.de";
                      window.location.href = "mailto:" + email;
                    }}
                    className="text-lg hover:underline"
                    style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
                  >
                    ed.enilno-t@hcirblo.nirtak-enna
                  </a>
                </div>
              </div>
              <p className="text-lg text-white mt-4">
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

export const query = graphql`
  query {
    image: file(relativePath: { eq: "anne-katrin-olbrich.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Dr. Anne-Katrin Olbrich - Psychologische Beratung Dresden</title>
    <meta
      name="description"
      content="Psychologische Beratung in Dresden - Lebensberatung, Paarberatung, Familienberatung und Marte Meo Therapie"
    />
  </>
);
