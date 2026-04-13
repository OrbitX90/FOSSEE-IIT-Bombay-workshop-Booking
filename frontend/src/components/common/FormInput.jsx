import React, { useId } from 'react';

const FormInput = React.forwardRef(({ 
  label, 
  error, 
  type = 'text', 
  className = '', 
  ...props 
}, ref) => {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-text-primary">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        type={type}
        className={`w-full px-3 py-2 border rounded-md text-sm transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent
          ${error ? 'border-error focus-visible:ring-error' : 'border-border'}
        `}
        aria-invalid={!!error}
        aria-errormessage={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <span id={errorId} className="text-xs font-medium text-error">
          {error}
        </span>
      )}
    </div>
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;
