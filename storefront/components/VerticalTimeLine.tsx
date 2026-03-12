import { timelineItems } from "@/constants/timeline";
import { Timeline } from "./TimeLIne";

export default function VerticalTimeLine() {
  return (
    <div className="min-h-screen bg-background">
      <header className="text-center py-10 sm:py-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Priča iza SG Tools
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Ono što je pre više od 30 godina počelo kao porodična strast prema
          alatima, danas je preraslo u brend posvećen kvalitetu, inovacijama i
          pažljivom osluškivanju potreba profesionalaca i majstora.
        </p>
      </header>

      <main>
        <Timeline items={timelineItems} />
      </main>
    </div>
  );
}
