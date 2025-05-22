import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const base =
    "px-5 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent text-sm";
  const variants = {
    primary: `bg-accent text-white hover:bg-accent/90`,
    secondary: `bg-transparent border border-accent text-accent hover:bg-accent/10`,
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
} 