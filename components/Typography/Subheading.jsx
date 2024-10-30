import { inter } from "@/app/fonts";

export default function Subheading({ children, className = "" }) {
  return (
    <p
      className={`${inter.className} ${className} text-subheading-sm tablet:text-subheading-base`}
    >
      {children}
    </p>
  );
}
