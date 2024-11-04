export function List({ children, className }) {
  return <div className={`${className} w-fill`}>{children}</div>;
}

export function ListTitle({ children, className }) {
  return (
    <h6 className={`${className} text-lg font-medium mb-5`}>{children}</h6>
  );
}

export function ListContainer({ children, className }) {
  return <ul className={`${className} space-y-3`}>{children}</ul>;
}

export function ListItem({ children, className }) {
  return <li className={`${className}`}>{children}</li>;
}
