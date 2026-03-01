import Container from "./container";
import Wrapper from "./wrapper";

const stats = [
  { value: "10,630+", label: "Veleprodajnih kupaca" },
  { value: "120+", label: "Dilera širom Srbije" },
  { value: "100%", label: "Zadovoljstvo uslugom" },
];

const Stats = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {stats.map((stat, index) => (
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
