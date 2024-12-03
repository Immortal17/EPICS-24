import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-lg';
  
  const variants = {
    primary: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-emerald-500/25',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 hover:border-gray-600'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;