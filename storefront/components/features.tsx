import {
  Clock,
  CreditCard,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import Container from "./container";
import Wrapper from "./wrapper";

const FEATURES = [
  {
    title: "Besplatna dostava",
    desc: "Za kupovinu preko 15.000 RSD",
    icon: Truck,
    color: "text-blue-400",
    bg: "bg-blue-500/15",
    border: "border-blue-500/30",
  },
  {
    title: "Brza isporuka",
    desc: "Isporuka 1-5 radnih dana",
    icon: Clock,
    color: "text-amber-400",
    bg: "bg-amber-500/15",
    border: "border-amber-500/30",
  },
  {
    title: "Sigurna kupovina",
    desc: "Garancija na kupljene mašine",
    icon: ShieldCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-500/15",
    border: "border-emerald-500/30",
  },
  {
    title: "Čekovima građana",
    desc: "Na 4 rate bez kamate",
    icon: CreditCard,
    color: "text-violet-400",
    bg: "bg-violet-500/15",
    border: "border-violet-500/30",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
      <Wrapper>
        <Container>
          <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-center tracking-tight">
              Zašto kupovati kod nas?
            </h2>
          </div>
        </Container>

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-10">
            {FEATURES.map((feature, index) => (
              <Feature
                key={index}
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
                color={feature.color}
                bg={feature.bg}
                border={feature.border}
              />
            ))}
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

const Feature = ({
  title,
  desc,
  icon: Icon,
  color,
  bg,
  border,
}: {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
}) => {
  return (
    <div className="flex flex-col p-4 lg:p-6 border border-border/60 rounded-lg lg:rounded-xl">
      <div
        className={`flex items-center justify-center size-9 lg:size-11 rounded-xl ${bg} ${border} border`}
      >
        <Icon className={`size-5 lg:size-6 ${color}`} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </div>
  );
};

export default Features;
