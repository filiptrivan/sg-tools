import { OurValueProps } from "@/types/values";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { cn } from "@/lib/utils";
import { valueItems as features } from "@/constants/valueData";
import Container from "../container";

const OurValues: React.FC<OurValueProps> = ({
  sectionTitle,
  sectionSubtitle,
  className,
}) => {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <Container>
      <section
        className={cn("pt-10 bg-background text-foreground", className)}
        role="region"
        aria-label={
          sectionTitle ? `Features: ${sectionTitle}` : "Product Features"
        }
      >
        <div className="max-w-7xl py-10 sm:py-16 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          {(sectionTitle || sectionSubtitle) && (
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              {sectionTitle && (
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                  {sectionTitle}
                </h2>
              )}
              {sectionSubtitle && (
                <p className="mt-4 text-lg text-muted-foreground">
                  {sectionSubtitle}
                </p>
              )}
            </div>
          )}

          <div
            className="grid gap-6 py-8 sm:px-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {features.map((feature) => (
              <Card
                key={feature.id}
                className="flex flex-col h-full p-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:border-primary/50 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                role="listitem"
              >
                <CardHeader className="p-0 pb-3">
                  <div className="mb-3 p-2 w-fit rounded-lg bg-primary/10 text-primary border border-primary/20 transition-colors duration-200">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 grow">
                  <CardDescription className="text-sm text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OurValues;
