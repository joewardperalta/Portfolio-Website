export default function Navbar({ children }) {
  return (
    <div className="py-navbar-py absolute px-6 flex justify-between w-full">
      {children}
    </div>
  );
}
