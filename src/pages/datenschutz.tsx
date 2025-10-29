import * as React from "react";
import { Link } from "gatsby";
import Footer from "../components/Footer";

const DatenschutzPage = () => {
  return (
    <div className="min-h-screen bg-white font-cabin flex flex-col">
      {/* Header */}
      <header className="bg-alabaster py-12 px-4">
        <div className="max-w-4xl mx-auto flex justify-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src="/Logo.svg" alt="Logo" className="w-24 h-auto" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-2xl lg:text-3xl text-coral-red mb-8">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray">
              <div>
                <h2 className="text-xl text-coral-red mb-2">Datenschutz</h2>
                <p className="text-base">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                  persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend der
                  gesetzlichen Datenschutzvorschriften sowie dieser
                  Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-coral-red mb-2">
                  Datenerfassung auf unserer Website
                </h2>
                <div className="space-y-4 text-base">
                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Wer ist verantwortlich für die Datenerfassung auf dieser
                      Website?
                    </h3>
                    <p>
                      Die Datenverarbeitung auf dieser Website erfolgt durch den
                      Websitebetreiber. Dessen Kontaktdaten können Sie dem
                      Impressum dieser Website entnehmen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Wie erfassen wir Ihre Daten?
                    </h3>
                    <p>
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                      diese mitteilen. Hierbei kann es sich z.B. um Daten
                      handeln, die Sie in ein Kontaktformular eingeben. Andere
                      Daten werden automatisch beim Besuch der Website durch
                      unsere IT-Systeme erfasst. Das sind vor allem technische
                      Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit
                      des Seitenaufrufs).
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl text-coral-red mb-2">
                  Allgemeine Hinweise und Pflichtinformationen
                </h2>
                <div className="space-y-4 text-base">
                  <div>
                    <h3 className="text-lg text-coral-red mb-1">Datenschutz</h3>
                    <p>
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                      persönlichen Daten sehr ernst. Wir behandeln Ihre
                      personenbezogenen Daten vertraulich und entsprechend der
                      gesetzlichen Datenschutzvorschriften sowie dieser
                      Datenschutzerklärung.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Hinweis zur verantwortlichen Stelle
                    </h3>
                    <p>
                      Die verantwortliche Stelle für die Datenverarbeitung auf
                      dieser Website ist:
                      <br />
                      <br />
                      Dr. Anne-Katrin Olbrich
                      <br />
                      Psychologische Beratung
                      <br />
                      Sternplatz 15
                      <br />
                      01067 Dresden
                      <br />
                      <br />
                      Telefon:{" "}
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const phone = "0151" + "59954610";
                          window.location.href = "tel:" + phone;
                        }}
                        className="hover:underline"
                        style={{
                          unicodeBidi: "bidi-override",
                          direction: "rtl",
                        }}
                      >
                        01 645 995 – 1510
                      </a>
                      <br />
                      E-Mail:{" "}
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const email =
                            "anne-katrin.olbrich" + "@" + "t-online.de";
                          window.location.href = "mailto:" + email;
                        }}
                        className="hover:underline"
                        style={{
                          unicodeBidi: "bidi-override",
                          direction: "rtl",
                        }}
                      >
                        ed.enilno-t@hcirblo.nirtak-enna
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl text-coral-red mb-2">
                  Datenerfassung auf unserer Website
                </h2>
                <div className="space-y-4 text-base">
                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Server-Log-Dateien
                    </h3>
                    <p>
                      Der Provider der Seiten erhebt und speichert automatisch
                      Informationen in so genannten Server-Log-Dateien, die Ihr
                      Browser automatisch an uns übermittelt. Dies sind:
                      Browsertyp und Browserversion, verwendetes Betriebssystem,
                      Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit
                      der Serveranfrage, IP-Adresse. Eine Zusammenführung dieser
                      Daten mit anderen Datenquellen wird nicht vorgenommen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Kontaktformular
                    </h3>
                    <p>
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                      werden Ihre Angaben aus dem Anfrageformular inklusive der
                      von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                      der Anfrage und für den Fall von Anschlussfragen bei uns
                      gespeichert. Diese Daten geben wir nicht ohne Ihre
                      Einwilligung weiter.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl text-coral-red mb-2">Ihre Rechte</h2>
                <div className="space-y-4 text-base">
                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Auskunft, Sperrung, Löschung
                    </h3>
                    <p>
                      Sie haben jederzeit das Recht unentgeltlich Auskunft über
                      Herkunft, Empfänger und Zweck Ihrer gespeicherten
                      personenbezogenen Daten zu erhalten. Sie haben außerdem
                      ein Recht, die Berichtigung, Sperrung oder Löschung dieser
                      Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum
                      Thema Datenschutz können Sie sich jederzeit unter der im
                      Impressum angegebenen Adresse an uns wenden.
                    </p>
                  </div>
                </div>
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

export default DatenschutzPage;
