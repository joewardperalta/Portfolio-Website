import { kaisei_opti } from "@/app/fonts";

export default function SectionHeading({ children, className = "" }) {
  return (
    <h2
      className={`${kaisei_opti.className} ${className} 
       text-3xl font-medium mb-6 tablet:text-4xl tablet:mb-8`}
    >
      {children}
    </h2>
  );
}
