import Image from "next/image";

export default function TertiaryButton({ children, type = "", className }) {
  return (
    <button className={`${className} flex gap-2 items-center`} type={type}>
      {children}
      <Image
        src="/img/right arrow.svg"
        width={8}
        height={8}
        alt="right arrow icon"
      />
    </button>
  );
}
