interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit";
  }
  
  const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button" }) => (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
    >
      {text}
    </button>
  );
  
  export default Button;
  