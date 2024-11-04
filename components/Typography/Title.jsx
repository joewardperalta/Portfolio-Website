import { kaisei_opti } from "@/app/fonts";

export default function Title({ children, className = "" }) {
  return (
    <h1
      className={`${kaisei_opti.className} ${className} 
      text-4xl font-medium tablet:text-5xl tablet:mb-8 desktop:text-6xl`}
    >
      {children}
    </h1>
  );
}
