import { TimelineItem } from "@/types/timeline";
import { Ear, Rocket, Wrench } from "lucide-react";

export const timelineItems: TimelineItem[] = [
  {
    title: "30 godina u svetu alata",
    description:
      "Pre tri decenije naša porodica je zakoračila u svet alata. Od tada neprestano učimo, rastemo i pratimo potrebe tržišta.",
    date: "1994",
    category: "Osnivanje",
    image: <Wrench className="w-8 h-8 text-primary sm:w-14 sm:h-14" />,
    status: "completed",
  },
  {
    title: "Slušali smo kupce.",
    description:
      "Kako se posao razvijao, slušali smo šta kupcima zaista treba — njihove sugestije postale su naše smernice.",
    date: "2012",
    category: "Proizvod",
    image: <Ear className="w-8 h-8 text-primary sm:w-14 sm:h-14" />,
    status: "completed",
  },
  {
    title: "SG Tools je rođen.",
    description:
      "Pre 7 godina pretvorili smo to znanje u brend. Danas širimo naš asortiman i stvaramo nove proizvode sa istom pažnjom.",
    date: "2019",
    category: "Brend",
    image: <Rocket className="w-8 h-8 text-primary sm:w-14 sm:h-14" />,
    status: "completed",
  },
];
