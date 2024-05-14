// Контейнер для секций контента. Принимает title и children.

export default function ContentSection({ title, children }) {
  return (
    <div>
      <h1>
        {title}
      </h1>

      {children}
    </div>
  );
}
