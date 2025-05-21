export default function Alert({ children, type }) {
  return (
    <div>
      <button className={`alertbt alertc-${type}`}>
        {children || "errore testo mancante"}
      </button>
    </div>
  );
}
