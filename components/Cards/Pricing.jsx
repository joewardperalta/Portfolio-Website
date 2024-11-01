import Image from "next/image";

export function Pricing({ children, className }) {
  return (
    <div className={`${className} p-8 border border-black rounded-md`}>
      {children}
    </div>
  );
}

export function PricingHead({ children }) {
  return <div className="pb-8 border-b border-b-black">{children}</div>;
}

export function PricingBody({ children }) {
  return <div className="text-base pt-8">{children}</div>;
}

export function PricingFeatures({ children }) {
  return <div className="space-y-4">{children}</div>;
}

export function PricingAction({ children }) {
  return <div className="mt-8">{children}</div>;
}

export function Feature({ children }) {
  return (
    <div className="flex items-center gap-4">
      <i className="fa-solid fa-check"></i>
      <p>{children}</p>
    </div>
  );
}

export function PricingTitle({ children }) {
  return <h6 className="text-lg font-medium mb-2">{children}</h6>;
}

export function PricingDescription({ children }) {
  return <p className="text-base mb-6">{children}</p>;
}

export function PricingPrice({ children }) {
  return <p className="text-5xl font-medium">{children}</p>;
}
