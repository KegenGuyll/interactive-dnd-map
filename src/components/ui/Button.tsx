import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'default';
}

const Button: React.FC<ButtonProps> = ({ children, className, variant = 'default', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-opacity-75 disabled:opacity-50';
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400',
    default: 'bg-white text-black border border-gray-300 hover:bg-gray-100 focus:ring-gray-200',
  };

  return (
    <button
      className={classNames(baseClasses, variantClasses[variant],className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;