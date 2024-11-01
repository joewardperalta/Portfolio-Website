export function Product({ children }) {
  return <div>{children}</div>;
}

export function ProductHead({ children }) {
  return <div className="rounded-md overflow-clip mb-6">{children}</div>;
}

export function ProductBody({ children }) {
  return <div className="mb-6">{children}</div>;
}

export function ProductTag({ children }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

export function ProductAction({ children }) {
  return <div>{children}</div>;
}

export function ProductTitle({ children }) {
  return <h5 className="text-lg font-medium mb-2">{children}</h5>;
}

export function ProductDescription({ children }) {
  return <p className="text-base mb-4">{children}</p>;
}

export function Tag({ children }) {
  return (
    <div className="bg-gray-light px-2 py-1">
      <p>{children}</p>
    </div>
  );
}
