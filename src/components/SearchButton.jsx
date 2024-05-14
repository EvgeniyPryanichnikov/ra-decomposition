// Универсальный компонент для отображения кнопки.
// Принимает обработчик onClick и текст text для отображения на кнопке.

export default function SearchButton({ onClick, text }) {
  return (
    <div>
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
