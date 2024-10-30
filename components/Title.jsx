import { kaisei_opti } from "@/app/fonts";

export default function Title({ children }) {
  const className =
    kaisei_opti.className +
    " text-[2.375rem] leading-[1.2] tablet:text-[3.5rem]";

  return <h1 className={className}>{children}</h1>;
}
