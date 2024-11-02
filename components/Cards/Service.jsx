export function Service({ children, className }) {
  return (
    <div
      className={`${className} flex flex-col items-center w-full tablet:tablet:max-w-[35rem] tablet:mx-auto`}
    >
      {children}
    </div>
  );
}

export function ServiceHead({ children }) {
  return <div className="mb-6">{children}</div>;
}

export function ServiceBody({ children }) {
  return <div>{children}</div>;
}

export function ServiceTitle({ children }) {
  return <h6 className="text-lg text-center font-medium mb-6">{children}</h6>;
}

export function ServiceDescription({ children }) {
  return <p className="text-base text-center">{children}</p>;
}
