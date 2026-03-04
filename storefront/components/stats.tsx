import { STATS } from "@/constants/content";
import Container from "./container";
import Wrapper from "./wrapper";

const Stats = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {STATS.map((stat, index) => (
            <Container key={index} delay={index}>
              <div className="flex flex-col items-center justify-center text-center">
                <h4 className="text-4xl lg:text-5xl font-bold font-heading">
                  {stat.value}
                </h4>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </Container>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Stats;
