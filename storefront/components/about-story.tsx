import { ABOUT_MILESTONES } from "@/constants/content";
import Container from "./container";
import Section from "./section";
import Wrapper from "./wrapper";

const AboutStory = () => {
  return (
    <Section>
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ABOUT_MILESTONES.map((milestone, index) => (
            <Container
              key={index}
              delay={index * 0.1}
              className="flex items-stretch gap-6"
            >
              <div className="flex flex-col items-center min-w-[40px]">
                <span className="text-2xl font-semibold text-muted-foreground/80 font-heading">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < ABOUT_MILESTONES.length - 1 && (
                  <span className="w-px grow bg-neutral-700 mt-1 lg:hidden"></span>
                )}
              </div>
              <div className="flex-1">
                <h4 className="text-xl lg:text-2xl font-semibold font-heading">
                  {milestone.title}
                </h4>
                <div className="mt-2 text-base text-neutral-400">
                  {milestone.description}
                </div>
              </div>
            </Container>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default AboutStory;
