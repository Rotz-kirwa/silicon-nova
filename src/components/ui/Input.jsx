import './Input.css';

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  success,
  disabled = false,
  required = false,
  className = '',
  ...props
}) => {
  const inputId = `input-${name}`;
  const errorId = `error-${name}`;
  const inputClassName = `input ${error ? 'input-error' : ''} ${success ? 'input-success' : ''} ${className}`;

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="required-indicator">*</span>}
        </label>
      )}
      
      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={inputClassName}
          aria-label={label}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? 'true' : 'false'}
          rows={4}
          {...props}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={inputClassName}
          aria-label={label}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
      )}
      
      {error && (
        <span id={errorId} className="input-error-message" role="alert">
          {error}
        </span>
      )}
      
      {success && !error && (
        <span className="input-success-message">{success}</span>
      )}
    </div>
  );
};

export default Input;
