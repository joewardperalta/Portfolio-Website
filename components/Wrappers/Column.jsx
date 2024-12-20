export default function Column({ children, className = "" }) {
  return (
    <div
      className={`${className} grow shrink basis-full rounded-md 
      overflow-clip laptop:basis-1/12`}
    >
      {children}
    </div>
  );
}
