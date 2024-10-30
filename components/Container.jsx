export default function Container({ children, className = "" }) {
  return (
    <div
      className={`${className} flex gap-6 px-6 mx-auto tablet:px-10 laptop:px-14 desktop:max-w-screen-desktop`}
    >
      {children}
    </div>
  );
}
