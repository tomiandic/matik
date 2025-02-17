import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out";

  const variantStyles = {
    primary: "bg-main text-white hover:bg-main-dark focus:ring-blue-500",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    disabled: "bg-slate-400 text-gray-300",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <button
      disabled={disabled}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
