import {
  BadgePercent,
  History,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FEATURES } from "@/constants/content";
import Container from "./container";
import Section from "./section";
import Wrapper from "./wrapper";

const FEATURE_STYLES = [
  {
    icon: History,
    color: "text-amber-400",
    bg: "bg-amber-500/15",
    border: "border-amber-500/30",
  },
  {
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/15",
    border: "border-blue-500/30",
  },
  {
    icon: ShieldCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-500/15",
    border: "border-emerald-500/30",
  },
  {
    icon: BadgePercent,
    color: "text-violet-400",
    bg: "bg-violet-500/15",
    border: "border-violet-500/30",
  },
];

const Features = () => {
  return (
    <Section>
      <Wrapper>
        <Container>
          <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-center tracking-tight">
              Zašto SG Tools?
            </h2>
          </div>
        </Container>

        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mt-10">
            {FEATURES.map((item, index) => (
              <Feature
                key={index}
                title={item.title}
                desc={item.desc}
                icon={FEATURE_STYLES[index].icon}
                color={FEATURE_STYLES[index].color}
                bg={FEATURE_STYLES[index].bg}
                border={FEATURE_STYLES[index].border}
              />
            ))}
          </div>
        </Container>
      </Wrapper>
    </Section>
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
    <div className="flex flex-col justify-between p-3 lg:p-6 border border-border/60 rounded-lg lg:rounded-xl">
      <div
        className={`flex items-center justify-center size-9 lg:size-11 rounded-xl ${bg} ${border} border`}
      >
        <Icon className={`size-5 lg:size-6 ${color}`} strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold mt-4">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">{desc}</p>
      </div>
    </div>
  );
};

export default Features;
