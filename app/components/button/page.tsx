import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}
const Button: React.FC<ButtonProps> = ({ variant = "primary", className,...props }) => {
  console.log(props);
  
  return (
    <button
      className={`btn ${
        variant !== "primary" ? "bg-secondary" : "bg-red-400"
      } rounded-xl px-6 py-1 text-white font-bold ${className}`}
      {...props}
    />
  );
};

export default Button;
