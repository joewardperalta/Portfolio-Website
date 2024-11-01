import { kaisei_opti } from "@/app/fonts";

export default function Title({ children, className = "" }) {
  return (
    <h1
      className={`${kaisei_opti.className} ${className} 
      text-4xl font-medium`}
    >
      {children}
    </h1>
  );
}
