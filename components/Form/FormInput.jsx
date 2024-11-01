export function FormInput({
  children,
  id = "",
  name = "",
  type = "",
  required = false,
  placeholder = "",
}) {
  return (
    <div className="border-b border-b-black">
      <input
        className="w-full pb-1 text-base text-black focus-visible:outline-none"
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
      >
        {children}
      </input>
    </div>
  );
}
