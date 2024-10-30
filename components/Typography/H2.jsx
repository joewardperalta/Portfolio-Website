import { kaisei_opti } from "@/app/fonts";

export default function H2({ children, className = "" }) {
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
