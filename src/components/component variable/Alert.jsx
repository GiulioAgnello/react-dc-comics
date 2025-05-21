export default function Alert({ children, type }) {
  return (
    <div>
      <button className={`alertbt alertc-${type}`}>
        {children || "si è verificato un errore"}
      </button>
    </div>
  );
}
