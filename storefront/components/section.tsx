import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Section = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full py-16 lg:py-24",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Section;
