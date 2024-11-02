import { inter } from "@/app/fonts";

export default function Subheading({ children, className = "" }) {
  return (
    <p
      className={`${inter.className} ${className} 
      text-lg tablet:text-xl`}
    >
      {children}
    </p>
  );
}
