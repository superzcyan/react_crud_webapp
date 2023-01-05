import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: "text" | "password" | "email" | "date" | "number";
  required: true | false;
  registration?: Partial<UseFormRegisterReturn>;
  className?: string;
  label?: string;
  placeHolder?: string;
  hasError: true | false;
}

const inputClassName =
  "w-full px-2 py-2 text-xs rounded border-2 border-gray-300 focus:border-blue-600 focus:outline-none";
const hasErrorClassName =
  "w-full px-2 py-2 text-xs rounded border-2 border-red-500 focus:outline-none";
const TextInput = ({
  type = "text",
  required = false,
  registration,
  className = inputClassName,
  label,
  placeHolder,
  hasError = false,
  ...props
}: TextInputProps): JSX.Element => {
  return (
    <div className={`${label && "grid sm:grid-cols-2"} space-x-4`}>
      {label && (
        <label className="flex space-x-2 justify-start expandedLabel fontExpand">
          <div>{label}</div>
          {required && <div className="text-red-500 pr-0.5 font-bold">*</div>}:
        </label>
      )}
      <input
        className={hasError ? hasErrorClassName : className}
        type={type}
        placeholder={placeHolder}
        required={required}
        {...registration}
        {...props}
      />
    </div>
  );
};

export default TextInput;
