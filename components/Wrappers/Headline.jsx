export default function Headline({ children, className = "" }) {
  return <div className={"mb-14 " + className}>{children}</div>;
}
