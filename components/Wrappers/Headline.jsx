export default function Headline({ children, className = "" }) {
  return <div className={`${className} mb-9 tablet:mb-16`}>{children}</div>;
}
