export default function Column({ children, className = "" }) {
  return (
    <div className={"grow shrink basis-1/12 " + className}>{children}</div>
  );
}
