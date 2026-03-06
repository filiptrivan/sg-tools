import Container from "./container";
import Section from "./section";
import Wrapper from "./wrapper";

const AboutContent = () => {
  return (
    <Section>
      <Wrapper>
        <Container>
          <div className="prose prose-invert max-w-full prose-p:text-neutral-300 prose-li:text-neutral-300 prose-strong:text-foreground prose-headings:font-heading marker:text-primary">
            <h3>Kako je sve počelo</h3>
            <p>
              SG TOOLS je brend nastao kao odgovor na ono što smo godinama
              slušali sa druge strane pulta — od majstora, hobista, instalatera
              i servisera koji tačno znaju šta od alata očekuju. Njihove
              sugestije nismo posmatrali kao komentare, već kao{" "}
              <strong>smernice</strong>. Pažljivo smo ih slušali, beležili i
              pretvarali u <strong>konkretna rešenja</strong>.
            </p>

            <h3>Šta za nas znači kvalitet</h3>
            <p>
              Razumeli smo da dobar alat nije samo pitanje izgleda ili tehničke
              specifikacije, već ravnoteža između pouzdanosti, ergonomije,
              kvaliteta materijala i osećaja u radu. Od izbora sirovina do
              završne obrade, <strong>ništa nije prepušteno slučaju</strong>.
            </p>
            <ul>
              <li>
                <strong>Materijali</strong> — birani promišljeno, sa naglaskom
                na trajnost i otpornost u realnim uslovima rada.
              </li>
              <li>
                <strong>Ergonomija</strong> — alat mora prirodno ležati u ruci,
                pružati siguran hvat i omogućiti dugotrajan rad bez zamora.
              </li>
              <li>
                <strong>Dizajn</strong> — uvek u službi funkcije, bez suvišnih
                detalja, sa jasnom namenom da alat bude pouzdan i praktičan.
              </li>
            </ul>

            <h3>Naša misija</h3>
            <p>
              Ovo nije brend koji nastaje kompromisima na račun kvaliteta, ali
              isto tako nije ni brend koji kvalitet čini nedostupnim. Naš cilj
              je jasan —{" "}
              <strong>
                profesionalni kvalitet po cenama koje imaju smisla
              </strong>
              .
            </p>
            <p>
              Nastao iz slušanja, razumevanja i znanja, uz poštovanje iskustva
              korisnika — pretvarajući ga u konkretna, funkcionalna rešenja.{" "}
              <strong>SG TOOLS je zajednički uspeh</strong> koji nastavljamo da
              gradimo zajedno sa našim kupcima.
            </p>
          </div>
        </Container>
      </Wrapper>
    </Section>
  );
};

export default AboutContent;
