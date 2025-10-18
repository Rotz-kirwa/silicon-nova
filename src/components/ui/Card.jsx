import './Card.css';

const Card = ({
  children,
  variant = 'default',
  hoverable = false,
  className = '',
  ...props
}) => {
  const cardClassName = `card card-${variant} ${hoverable ? 'hoverable' : ''} ${className}`;

  return (
    <div className={cardClassName} {...props}>
      {children}
    </div>
  );
};

export default Card;
