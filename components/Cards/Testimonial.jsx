export function Testimonial({ children, className }) {
  return (
    <div
      className={`${className} laptop:max-w-[924px] laptop:mx-auto laptop:text-center`}
    >
      {children}
    </div>
  );
}

export function TestimonialMessage({ children }) {
  return <h5 className="text-2xl font-medium mb-8">{children}</h5>;
}

export function TestimonialAuthor({ children }) {
  return <div>{children}</div>;
}

export function AuthorAvatar({ children }) {
  return (
    <div className="rounded-full w-16 h-16 overflow-hidden mb-4 mx-auto">
      {children}
    </div>
  );
}

export function AuthorName({ children }) {
  return <p className="font-medium text-base text-center">{children}</p>;
}

export function AuthorRole({ children }) {
  return <p className="text-base text-center">{children}</p>;
}
