import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function Pricing({
  children,
  theme = "white",
  title = "",
  description = "",
  price = "",
  features = [],
}) {
  const bgColor = theme === "dark" ? "bg-black" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-dark";
  const borderColor = theme === "dark" ? "border-white" : "border-black";

  return (
    <div
      className={`p-8 border rounded-md w-full h-full tablet:max-w-[35rem] laptop:flex laptop:flex-col ${bgColor} ${textColor}`}
    >
      <div className="basis-full">
        <div className={`pb-8 border-b ${borderColor}`}>
          <h6 className="text-lg font-medium mb-2">{title}</h6>
          <p className="text-base mb-6">{description}</p>
          <p className="text-5xl font-medium">${price}/mo</p>
        </div>

        <div className="text-base pt-8">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <i className="fa-solid fa-check"></i>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <PrimaryButton className="tablet:w-full">Get Started</PrimaryButton>
      </div>
    </div>
  );
}
