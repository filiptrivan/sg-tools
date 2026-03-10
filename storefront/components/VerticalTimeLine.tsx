import { timelineItems } from "@/constants/timeline";
import { Timeline } from "./TimeLIne";

export default function VerticalTimeLine() {
  return (
    <div className="min-h-screen bg-background">
      <header className="text-center py-10 sm:py-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          The Story Behind SG Tools
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          What started over 30 years ago as a family passion for tools has grown
          into a brand dedicated to quality, innovation, and listening to the
          needs of professionals and craftsmen.
        </p>
      </header>

      <main>
        <Timeline items={timelineItems} />
      </main>
    </div>
  );
}
