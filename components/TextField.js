import React from "react";

const InputField = ({
  label,
  type = "text",
  id,
  value,
  onChange,
  placeholder,
  name,
  className,
  required,
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        type={type}
        name={name}
        id={id}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder || " "}
        className="peer autofill:bg-autofill w-full border-b-2 border-gray-300 bg-transparent py-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 focus:border-blue-500"
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm pointer-events-none"
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
