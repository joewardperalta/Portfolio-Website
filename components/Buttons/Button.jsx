export default function Button({ children, className }) {
  return (
    <button
      className={`${className} py-3 px-6 rounded-md w-full text-base tablet:w-fit`}
    >
      {children}
    </button>
  );
}
