import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
  fullWidth?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  fullWidth = false, 
  href,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-display font-bold text-sm tracking-wide transition-all duration-300 rounded-full group";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#cb5600] to-orange-600 text-white hover:shadow-[0_0_30px_rgba(203,86,0,0.4)] hover:scale-105 border border-transparent",
    secondary: "bg-white text-black hover:bg-neutral-200",
    outline: "bg-transparent border border-white/20 text-white hover:border-[#cb5600] hover:text-[#cb5600]"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
        {...(href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;