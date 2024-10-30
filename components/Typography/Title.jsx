import { kaisei_opti } from "@/app/fonts";

export default function Title({ children, className = "" }) {
  return (
    <h1
      className={`${kaisei_opti.className} ${className} text-title-sm font-medium tablet:text-title-lg tablet:mb-7`}
    >
      {children}
    </h1>
  );
}
