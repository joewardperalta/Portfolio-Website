export function List({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function ListTitle({ children }) {
  return <h6 className="text-lg font-medium mb-2">{children}</h6>;
}

export function ListContainer({ children }) {
  return <ul className="space-y-3">{children}</ul>;
}

export function ListItem({ children }) {
  return <li>{children}</li>;
}
