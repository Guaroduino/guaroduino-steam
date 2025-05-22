import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, className = "", ...props }: InputProps) {
  return (
    <label className="block w-full">
      {label && <span className="block mb-1 text-sm font-medium text-gray-700">{label}</span>}
      <input
        className={`w-full px-4 py-2 border border-gray-200 rounded focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white text-gray-900 ${className}`.trim()}
        {...props}
      />
    </label>
  );
} 