export default function Wrapper({ children, className }) {
  return (
    <div className={`${className} px-6 py-16 tablet:px-10 tablet:py-28`}>
      {children}
    </div>
  );
}
