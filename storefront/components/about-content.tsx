import Container from "./container";
import Section from "./section";
import Wrapper from "./wrapper";

const AboutContent = () => {
  return (
    <Section>
      <Wrapper>
        <Container>
          <div className="prose prose-invert max-w-full prose-p:text-neutral-300 prose-li:text-neutral-300 prose-strong:text-foreground prose-headings:font-heading marker:text-primary">
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
