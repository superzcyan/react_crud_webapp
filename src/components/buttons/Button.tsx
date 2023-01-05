import React, { MouseEventHandler } from "react";
interface ButtonProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  className?: string;
  buttonText?: string;
}
const submitStyle =
  "sm:w-full bg-blue-500 inline-block px-2 sm:px-6 py-1 sm:py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700";
const resetStyle =
  "sm:w-full bg-white inline-block px-2 sm:px-6 py-1 sm:py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-500 hover:text-white";

const Button = ({
  type,
  onClick,
  className = submitStyle,
  buttonText,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={type === "reset" ? resetStyle : className}
    >
      {buttonText}
    </button>
  );
};

export default Button;
