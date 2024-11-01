export default function Headline({ children, className = "" }) {
  return <div className={"mb-9 " + className}>{children}</div>;
}
