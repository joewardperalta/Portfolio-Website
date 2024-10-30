function Button({ children, className }) {
  return (
    <button
      className={`px-6 py-2.5 text-sm rounded w-full tablet:w-fit tablet:px-6 tablet:py-4 ${className}`}
    >
      {children}
    </button>
  );
}

export function PrimaryButton({ children, className }) {
  return (
    <Button className={`bg-primary text-white ${className}`}>{children}</Button>
  );
}

export function SecondaryButton({ children, className }) {
  return (
    <Button className={`border border-white ${className}`}>{children}</Button>
  );
}
