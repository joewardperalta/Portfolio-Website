import { kaisei_opti } from "@/app/fonts";

export default function H2({ children }) {
  const className =
    kaisei_opti.className +
    " text-[1.75rem] leading-[1.2] tablet:text-[2.5rem] desktop:text-[3rem]";

  return <h2 className={className}>{children}</h2>;
}
