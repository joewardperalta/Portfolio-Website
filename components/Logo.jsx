import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        className="w-[85px] tablet:w-[113px]"
        src="/img/JLANCE logo.svg"
        width={200}
        height={200}
        alt="jlance logo"
      />
    </div>
  );
}
