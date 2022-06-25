export default function Button({type, text, customClass, customStyle, onClick }) {
  return (
    <button
      onClick={onClick}
      
      type={type}
    >
      {text}
    </button>
  );
}