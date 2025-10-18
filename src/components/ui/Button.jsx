import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  icon = null,
  iconPosition = 'left',
  onClick,
  type = 'button',
  ...props
}) => {
  const className = `button button-${variant} button-${size} ${loading ? 'loading' : ''} ${disabled ? 'disabled' : ''}`;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="button-spinner" role="status" aria-label="Loading"></span>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="button-icon">{icon}</span>}
          <span className="button-text">{children}</span>
          {icon && iconPosition === 'right' && <span className="button-icon">{icon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
