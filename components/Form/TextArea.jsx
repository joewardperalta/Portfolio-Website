export default function TextArea({ id, name, rows, cols, placeholder }) {
  return (
    <div className="border-b border-b-black">
      <textarea
        className="h-52 w-full text-base focus-visible:outline-none"
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
