import * as React from "react";
import { HeadFC, Link } from "gatsby";
import Footer from "../components/Footer";

const DatenschutzPage = () => {
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
            Datenschutzerklärung
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray">
              <div>
                <h2 className="text-xl text-coral-red mb-2">
                  1. Datenschutz auf einen Blick
                </h2>

                <div className="space-y-4 text-base">
                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Allgemeine Hinweise
                    </h3>
                    <p>
                      Die folgenden Hinweise geben einen einfachen Überblick
                      darüber, was mit Ihren personenbezogenen Daten passiert,
                      wenn Sie diese Website besuchen. Personenbezogene Daten
                      sind alle Daten, mit denen Sie persönlich identifiziert
                      werden können. Ausführliche Informationen zum Thema
                      Datenschutz entnehmen Sie unserer unter diesem Text
                      aufgeführten Datenschutzerklärung.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Datenerfassung auf dieser Website
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-base text-coral-red mb-1">
                          Wer ist verantwortlich für die Datenerfassung auf
                          dieser Website?
                        </h4>
                        <p>
                          Die Datenverarbeitung auf dieser Website erfolgt durch
                          den Websitebetreiber. Dessen Kontaktdaten können Sie
                          dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in
                          dieser Datenschutzerklärung entnehmen.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-base text-coral-red mb-1">
                          Wie erfassen wir Ihre Daten?
                        </h4>
                        <p>
                          Ihre Daten werden zum einen dadurch erhoben, dass Sie
                          uns diese mitteilen. Hierbei kann es sich z. B. um
                          Daten handeln, die Sie in ein Kontaktformular
                          eingeben.
                        </p>
                        <p>
                          Andere Daten werden automatisch oder nach Ihrer
                          Einwilligung beim Besuch der Website durch unsere
                          IT-Systeme erfasst. Das sind vor allem technische
                          Daten (z. B. Internetbrowser, Betriebssystem oder
                          Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten
                          erfolgt automatisch, sobald Sie diese Website
                          betreten.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-base text-coral-red mb-1">
                          Wofür nutzen wir Ihre Daten?
                        </h4>
                        <p>
                          Ein Teil der Daten wird erhoben, um eine fehlerfreie
                          Bereitstellung der Website zu gewährleisten. Andere
                          Daten können zur Analyse Ihres Nutzerverhaltens
                          verwendet werden. Sofern über die Website Verträge
                          geschlossen oder angebahnt werden können, werden die
                          übermittelten Daten auch für Vertragsangebote,
                          Bestellungen oder sonstige Auftragsanfragen
                          verarbeitet.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-base text-coral-red mb-1">
                          Welche Rechte haben Sie bezüglich Ihrer Daten?
                        </h4>
                        <p>
                          Sie haben jederzeit das Recht, unentgeltlich Auskunft
                          über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                          personenbezogenen Daten zu erhalten. Sie haben
                          außerdem ein Recht, die Berichtigung oder Löschung
                          dieser Daten zu verlangen. Wenn Sie eine Einwilligung
                          zur Datenverarbeitung erteilt haben, können Sie diese
                          Einwilligung jederzeit für die Zukunft widerrufen.
                          Außerdem haben Sie das Recht, unter bestimmten
                          Umständen die Einschränkung der Verarbeitung Ihrer
                          personenbezogenen Daten zu verlangen. Des Weiteren
                          steht Ihnen ein Beschwerderecht bei der zuständigen
                          Aufsichtsbehörde zu.
                        </p>
                        <p>
                          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
                          können Sie sich jederzeit an uns wenden.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Analyse-Tools und Tools von Drittanbietern
                    </h3>
                    <p>
                      Beim Besuch dieser Website kann Ihr Surf-Verhalten
                      statistisch ausgewertet werden. Das geschieht vor allem
                      mit sogenannten Analyseprogrammen.
                    </p>
                    <p>
                      Detaillierte Informationen zu diesen Analyseprogrammen
                      finden Sie in der folgenden Datenschutzerklärung.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl text-coral-red mb-2">2. Hosting</h2>
                <div className="space-y-4 text-base">
                  <p>
                    Wir hosten die Inhalte unserer Website bei folgendem
                    Anbieter:
                  </p>
                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Externes Hosting
                    </h3>
                    <p>
                      Diese Website wird extern gehostet. Die personenbezogenen
                      Daten, die auf dieser Website erfasst werden, werden auf
                      den Servern des Hosters / der Hoster gespeichert. Hierbei
                      kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta-
                      und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                      Namen, Websitezugriffe und sonstige Daten, die über eine
                      Website generiert werden, handeln.
                    </p>
                    <p>
                      Das externe Hosting erfolgt zum Zwecke der
                      Vertragserfüllung gegenüber unseren potenziellen und
                      bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im
                      Interesse einer sicheren, schnellen und effizienten
                      Bereitstellung unseres Online-Angebots durch einen
                      professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                      Sofern eine entsprechende Einwilligung abgefragt wurde,
                      erfolgt die Verarbeitung ausschließlich auf Grundlage von
                      Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit
                      die Einwilligung die Speicherung von Cookies oder den
                      Zugriff auf Informationen im Endgerät des Nutzers (z. B.
                      Device-Fingerprinting) im Sinne des TDDDG umfasst. Die
                      Einwilligung ist jederzeit widerrufbar.
                    </p>
                    <p>
                      Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
                      verarbeiten, wie dies zur Erfüllung seiner
                      Leistungspflichten erforderlich ist und unsere Weisungen
                      in Bezug auf diese Daten befolgen.
                    </p>
                    <p>Wir setzen folgende(n) Hoster ein:</p>
                    <p>
                      GitHub Inc.
                      <br />
                      88 Colin P Kelly Jr St
                      <br />
                      San Francisco, CA 94107
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl text-coral-red mb-2">
                  3. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                <div className="space-y-4 text-base">
                  <div>
                    <h3 className="text-lg text-coral-red mb-1">Datenschutz</h3>
                    <p>
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                      persönlichen Daten sehr ernst. Wir behandeln Ihre
                      personenbezogenen Daten vertraulich und entsprechend den
                      gesetzlichen Datenschutzvorschriften sowie dieser
                      Datenschutzerklärung.
                    </p>
                    <p>
                      Wenn Sie diese Website benutzen, werden verschiedene
                      personenbezogene Daten erhoben. Personenbezogene Daten
                      sind Daten, mit denen Sie persönlich identifiziert werden
                      können. Die vorliegende Datenschutzerklärung erläutert,
                      welche Daten wir erheben und wofür wir sie nutzen. Sie
                      erläutert auch, wie und zu welchem Zweck das geschieht.
                    </p>
                    <p>
                      Wir weisen darauf hin, dass die Datenübertragung im
                      Internet (z. B. bei der Kommunikation per E-Mail)
                      Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                      der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Hinweis zur verantwortlichen Stelle
                    </h3>
                    <p>
                      Die verantwortliche Stelle für die Datenverarbeitung auf
                      dieser Website ist:
                    </p>
                    <p>
                      Dr. Anne-Katrin Olbrich
                      <br />
                      Sternplatz 15
                      <br />
                      01067 Dresden
                    </p>
                    <p>
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
                    <p>
                      Verantwortliche Stelle ist die natürliche oder juristische
                      Person, die allein oder gemeinsam mit anderen über die
                      Zwecke und Mittel der Verarbeitung von personenbezogenen
                      Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Speicherdauer
                    </h3>
                    <p>
                      Soweit innerhalb dieser Datenschutzerklärung keine
                      speziellere Speicherdauer genannt wurde, verbleiben Ihre
                      personenbezogenen Daten bei uns, bis der Zweck für die
                      Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
                      Löschersuchen geltend machen oder eine Einwilligung zur
                      Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                      sofern wir keine anderen rechtlich zulässigen Gründe für
                      die Speicherung Ihrer personenbezogenen Daten haben (z. B.
                      steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                      letztgenannten Fall erfolgt die Löschung nach Fortfall
                      dieser Gründe.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Allgemeine Hinweise zu den Rechtsgrundlagen der
                      Datenverarbeitung auf dieser Website
                    </h3>
                    <p>
                      Sofern Sie in die Datenverarbeitung eingewilligt haben,
                      verarbeiten wir Ihre personenbezogenen Daten auf Grundlage
                      von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a
                      DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1
                      DSGVO verarbeitet werden. Im Falle einer ausdrücklichen
                      Einwilligung in die Übertragung personenbezogener Daten in
                      Drittstaaten erfolgt die Datenverarbeitung außerdem auf
                      Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in
                      die Speicherung von Cookies oder in den Zugriff auf
                      Informationen in Ihr Endgerät (z. B. via
                      Device-Fingerprinting) eingewilligt haben, erfolgt die
                      Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1
                      TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind
                      Ihre Daten zur Vertragserfüllung oder zur Durchführung
                      vorvertraglicher Maßnahmen erforderlich, verarbeiten wir
                      Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
                      Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur
                      Erfüllung einer rechtlichen Verpflichtung erforderlich
                      sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
                      Datenverarbeitung kann ferner auf Grundlage unseres
                      berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
                      erfolgen. Über die jeweils im Einzelfall einschlägigen
                      Rechtsgrundlagen wird in den folgenden Absätzen dieser
                      Datenschutzerklärung informiert.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Empfänger von personenbezogenen Daten
                    </h3>
                    <p>
                      Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit
                      verschiedenen externen Stellen zusammen. Dabei ist
                      teilweise auch eine Übermittlung von personenbezogenen
                      Daten an diese externen Stellen erforderlich. Wir geben
                      personenbezogene Daten nur dann an externe Stellen weiter,
                      wenn dies im Rahmen einer Vertragserfüllung erforderlich
                      ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B.
                      Weitergabe von Daten an Steuerbehörden), wenn wir ein
                      berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an
                      der Weitergabe haben oder wenn eine sonstige
                      Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz
                      von Auftragsverarbeitern geben wir personenbezogene Daten
                      unserer Kunden nur auf Grundlage eines gültigen Vertrags
                      über Auftragsverarbeitung weiter. Im Falle einer
                      gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame
                      Verarbeitung geschlossen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Widerruf Ihrer Einwilligung zur Datenverarbeitung
                    </h3>
                    <p>
                      Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                      ausdrücklichen Einwilligung möglich. Sie können eine
                      bereits erteilte Einwilligung jederzeit widerrufen. Die
                      Rechtmäßigkeit der bis zum Widerruf erfolgten
                      Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Widerspruchsrecht gegen die Datenerhebung in besonderen
                      Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                    </h3>
                    <p className="font-semibold">
                      WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1
                      LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS
                      RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
                      SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
                      PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT
                      AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING.
                      DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG
                      BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN
                      SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
                      PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI
                      DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
                      VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND
                      FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
                      GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
                      RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                    </p>
                    <p className="font-semibold">
                      WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                      DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT,
                      JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
                      BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER
                      WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING,
                      SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.
                      WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN
                      DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER
                      DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2
                      DSGVO).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Beschwerderecht bei der zuständigen Aufsichtsbehörde
                    </h3>
                    <p>
                      Im Falle von Verstößen gegen die DSGVO steht den
                      Betroffenen ein Beschwerderecht bei einer
                      Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
                      gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des
                      Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
                      besteht unbeschadet anderweitiger verwaltungsrechtlicher
                      oder gerichtlicher Rechtsbehelfe.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Recht auf Datenübertragbarkeit
                    </h3>
                    <p>
                      Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                      Einwilligung oder in Erfüllung eines Vertrags
                      automatisiert verarbeiten, an sich oder an einen Dritten
                      in einem gängigen, maschinenlesbaren Format aushändigen zu
                      lassen. Sofern Sie die direkte Übertragung der Daten an
                      einen anderen Verantwortlichen verlangen, erfolgt dies
                      nur, soweit es technisch machbar ist.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Auskunft, Berichtigung und Löschung
                    </h3>
                    <p>
                      Sie haben im Rahmen der geltenden gesetzlichen
                      Bestimmungen jederzeit das Recht auf unentgeltliche
                      Auskunft über Ihre gespeicherten personenbezogenen Daten,
                      deren Herkunft und Empfänger und den Zweck der
                      Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
                      Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum
                      Thema personenbezogene Daten können Sie sich jederzeit an
                      uns wenden.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Recht auf Einschränkung der Verarbeitung
                    </h3>
                    <p>
                      Sie haben das Recht, die Einschränkung der Verarbeitung
                      Ihrer personenbezogenen Daten zu verlangen. Hierzu können
                      Sie sich jederzeit an uns wenden. Das Recht auf
                      Einschränkung der Verarbeitung besteht in folgenden
                      Fällen:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>
                        Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                        personenbezogenen Daten bestreiten, benötigen wir in der
                        Regel Zeit, um dies zu überprüfen. Für die Dauer der
                        Prüfung haben Sie das Recht, die Einschränkung der
                        Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                      </li>
                      <li>
                        Wenn die Verarbeitung Ihrer personenbezogenen Daten
                        unrechtmäßig geschah/geschieht, können Sie statt der
                        Löschung die Einschränkung der Datenverarbeitung
                        verlangen.
                      </li>
                      <li>
                        Wenn wir Ihre personenbezogenen Daten nicht mehr
                        benötigen, Sie sie jedoch zur Ausübung, Verteidigung
                        oder Geltendmachung von Rechtsansprüchen benötigen,
                        haben Sie das Recht, statt der Löschung die
                        Einschränkung der Verarbeitung Ihrer personenbezogenen
                        Daten zu verlangen.
                      </li>
                      <li>
                        Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                        eingelegt haben, muss eine Abwägung zwischen Ihren und
                        unseren Interessen vorgenommen werden. Solange noch
                        nicht feststeht, wessen Interessen überwiegen, haben Sie
                        das Recht, die Einschränkung der Verarbeitung Ihrer
                        personenbezogenen Daten zu verlangen.
                      </li>
                    </ul>
                    <p>
                      Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                      eingeschränkt haben, dürfen diese Daten – von ihrer
                      Speicherung abgesehen – nur mit Ihrer Einwilligung oder
                      zur Geltendmachung, Ausübung oder Verteidigung von
                      Rechtsansprüchen oder zum Schutz der Rechte einer anderen
                      natürlichen oder juristischen Person oder aus Gründen
                      eines wichtigen öffentlichen Interesses der Europäischen
                      Union oder eines Mitgliedstaats verarbeitet werden.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      SSL- bzw. TLS-Verschlüsselung
                    </h3>
                    <p>
                      Diese Seite nutzt aus Sicherheitsgründen und zum Schutz
                      der Übertragung vertraulicher Inhalte, wie zum Beispiel
                      Bestellungen oder Anfragen, die Sie an uns als
                      Seitenbetreiber senden, eine SSL- bzw.
                      TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                      erkennen Sie daran, dass die Adresszeile des Browsers von
                      „http://" auf „https://" wechselt und an dem
                      Schloss-Symbol in Ihrer Browserzeile.
                    </p>
                    <p>
                      Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist,
                      können die Daten, die Sie an uns übermitteln, nicht von
                      Dritten mitgelesen werden.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl text-coral-red mb-2">
                  4. Datenerfassung auf dieser Website
                </h2>
                <div className="space-y-4 text-base">
                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Anfrage per E-Mail, Telefon oder Telefax
                    </h3>
                    <p>
                      Wenn Sie uns per E-Mail, Telefon oder Telefax
                      kontaktieren, wird Ihre Anfrage inklusive aller daraus
                      hervorgehenden personenbezogenen Daten (Name, Anfrage) zum
                      Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert
                      und verarbeitet. Diese Daten geben wir nicht ohne Ihre
                      Einwilligung weiter.
                    </p>
                    <p>
                      Die Verarbeitung dieser Daten erfolgt auf Grundlage von
                      Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                      Erfüllung eines Vertrags zusammenhängt oder zur
                      Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                      In allen übrigen Fällen beruht die Verarbeitung auf
                      unserem berechtigten Interesse an der effektiven
                      Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
                      lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1
                      lit. a DSGVO) sofern diese abgefragt wurde; die
                      Einwilligung ist jederzeit widerrufbar.
                    </p>
                    <p>
                      Die von Ihnen an uns per Kontaktanfragen übersandten Daten
                      verbleiben bei uns, bis Sie uns zur Löschung auffordern,
                      Ihre Einwilligung zur Speicherung widerrufen oder der
                      Zweck für die Datenspeicherung entfällt (z. B. nach
                      abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
                      gesetzliche Bestimmungen – insbesondere gesetzliche
                      Aufbewahrungsfristen – bleiben unberührt.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-coral-red mb-1">
                      Webanalyse mit Umami Analytics
                    </h3>
                    <p>
                      Diese Website nutzt Umami Analytics, ein Webanalysetool
                      der Umami Software, Inc., 1362 42nd Ave, San Francisco,
                      Kalifornien, 94122, USA.
                    </p>
                    <p>
                      Umami Analytics verzichtet auf die Verwendung von Cookies
                      und speichert keine Daten im Browser der Besucher. Das
                      Tool verwendet ausschließlich ein JavaScript-Skript zur
                      Erfassung von Nutzungsdaten für statistische Auswertungen.
                      Die gewonnenen Erkenntnisse helfen uns dabei, unsere
                      Website-Inhalte und Angebote kontinuierlich zu verbessern.
                    </p>
                    <p>
                      Die Rechtsgrundlage für diese Datenverarbeitung bildet
                      Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO.
                      Der Zugriff auf und die Speicherung von Informationen in
                      Ihrem Endgerät erfolgt auf Grundlage der Umsetzungsgesetze
                      der ePrivacy-Richtlinie der EU-Mitgliedsstaaten, in
                      Deutschland nach § 25 Abs. 1 TTDSG.
                    </p>
                    <p>
                      Weitere Informationen zur Datenverarbeitung durch Umami
                      Analytics finden Sie in deren Datenschutzerklärung:{" "}
                      <a
                        href="https://umami.is/privacy"
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://umami.is/privacy
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-500 mt-8">
                <p>
                  Quelle:{" "}
                  <a
                    href="https://www.e-recht24.de"
                    className="hover:underline"
                  >
                    https://www.e-recht24.de
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

export default DatenschutzPage;

export const Head: HeadFC = () => (
  <>
    <title>Dr. Anne-Katrin Olbrich – Psychologische Beratung Dresden</title>
    <meta name="robots" content="noindex, nofollow" />
  </>
);
