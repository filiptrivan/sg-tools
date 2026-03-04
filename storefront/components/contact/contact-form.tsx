import Container from "../container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import Wrapper from "../wrapper";

const ContactForm = () => {
  return (
    <div className="w-full pb-16 lg:pb-24">
      <Wrapper>
        <Container delay={0.1}>
          <div className="flex flex-col lg:items-center lg:justify-center">
            <h2 className="text-2xl lg:text-3xl font-semibold text-left lg:text-center">
              Kontaktiraj nas
            </h2>
          </div>
        </Container>

        <Container delay={0.2}>
          <form className="max-w-3xl mx-auto w-full mt-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Ime*</Label>
                <Input
                  id="firstName"
                  placeholder="Petar"
                  className="bg-[#0A0A0A] border-border/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Prezime*</Label>
                <Input
                  id="lastName"
                  placeholder="Petrović"
                  className="bg-[#0A0A0A] border-border/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Naslov*</Label>
              <Input
                id="subject"
                placeholder="Unesi naslov poruke"
                className="bg-[#0A0A0A] border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="workEmail">E-mail*</Label>
              <Input
                id="workEmail"
                type="email"
                placeholder="petar@primer.rs"
                className="bg-[#0A0A0A] border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Kako možemo da ti pomognemo?*</Label>
              <Textarea
                id="message"
                placeholder="Unesi svoju poruku ovde..."
                className="min-h-[150px] bg-[#0A0A0A] border-border/50 resize-none"
              />
            </div>

            <Button className="w-full">Pošalji</Button>
          </form>
        </Container>
      </Wrapper>
    </div>
  );
};

export default ContactForm;
