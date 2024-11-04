export default function Container({ children, className = "" }) {
  return (
    <div
      className={`${className} flex flex-wrap gap-6 mx-auto laptop:max-w-screen-laptop`}
    >
      {children}
    </div>
  );
}
