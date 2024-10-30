import { kaisei_opti, inter } from "@/app/fonts";

export function Title({ children }) {
  return (
    <h1
      className={
        kaisei_opti.className +
        " text-4xl leading-[1.2] font-medium tablet:text-6xl tablet:mb-7"
      }
    >
      {children}
    </h1>
  );
}

export function H2({ children }) {
  return (
    <h2
      className={
        kaisei_opti.className +
        " text-2xl leading-[1.2] font-medium mb-6 tablet:text-4xl tablet:mb-7"
      }
    >
      {children}
    </h2>
  );
}

export function Subheading({ children }) {
  return (
    <p className={inter.className + " text-xl leading-[1.5]"}>{children}</p>
  );
}
