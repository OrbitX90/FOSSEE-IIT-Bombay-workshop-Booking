export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  fullWidth = false,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
  const sizeStyles = "px-4 py-2 text-sm";
  const widthStyles = fullWidth ? "w-full" : "";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-sm",
    secondary: "bg-accent text-primary hover:bg-accent/90 shadow-sm",
    ghost: "bg-transparent text-text-primary hover:bg-gray-100",
    danger: "bg-error text-white hover:bg-error/90 shadow-sm border border-error",
    outline: "bg-white text-primary border border-primary hover:bg-gray-50",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${sizeStyles} ${variants[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
