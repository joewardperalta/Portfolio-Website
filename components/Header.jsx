export default function Header({ children, className = "" }) {
  return <div className={"mb-14 tablet:mb-20 " + className}>{children}</div>;
}
