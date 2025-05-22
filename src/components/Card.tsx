import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-100 rounded-lg p-5 shadow-none hover:shadow-md transition-shadow ${className}`.trim()}
    >
      {children}
    </div>
  );
} 