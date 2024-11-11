// src/components/Button.tsx
import React from 'react';
import './Button.scss';

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  fullWidth?: boolean;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  className = '',
  fullWidth = false,
  width,
}) => {
  return (
    <button
      type={type}
      className={`btn ${variant} ${size} ${className} ${loading ? 'loading' : ''} ${fullWidth ? 'full-width' : ''}`}
      onClick={onClick}
      disabled={disabled || loading}
      style={{ width: fullWidth ? '100%' : width }}
    >
      {loading ? (
        <span className="loader"></span>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="btn-icon">{icon}</span>
          )}
          <span>{text}</span>
          {icon && iconPosition === 'right' && (
            <span className="btn-icon">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
