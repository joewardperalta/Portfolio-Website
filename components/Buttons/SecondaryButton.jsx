import Button from "./Button";

export default function SecondaryButton({ children, className }) {
  return (
    <Button className={`border border-white ${className}`}>{children}</Button>
  );
}
