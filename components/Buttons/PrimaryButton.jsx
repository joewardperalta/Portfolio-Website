import Button from "./Button";

export default function PrimaryButton({ children, className }) {
  return (
    <Button className={`bg-primary text-white ${className}`}>{children}</Button>
  );
}
