import { kaisei_opti, inter } from "@/app/fonts";

export function Title({ children, className = "" }) {
  return (
    <h1
      className={`${kaisei_opti.className} ${className} text-title-sm font-medium tablet:text-title-lg tablet:mb-7`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }) {
  return (
    <h2
      className={
        kaisei_opti.className +
        " text-2xl leading-[1.2] font-medium mb-6 tablet:text-4xl tablet:mb-7 " +
        className
      }
    >
      {children}
    </h2>
  );
}

export function Subheading({ children, className = "" }) {
  return (
    <p
      className={`${inter.className} ${className} text-subheading-sm tablet:text-subheading-base`}
    >
      {children}
    </p>
  );
}
