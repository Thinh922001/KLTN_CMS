// src/components/Input.tsx
import React from 'react';
import './input.scss';

interface InputProps {
  type?: 'text' | 'phone' | 'password';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  disabled = false,
  className = '',
  icon,
  iconPosition = 'left',
}) => {
  return (
    <div className={`input-container ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <div
        className={`input-wrapper ${icon ? `has-icon ${iconPosition}` : ''}`}
      >
        {icon && iconPosition === 'left' && (
          <span className="input-icon">{icon}</span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="input-field"
        />
        {icon && iconPosition === 'right' && (
          <span className="input-icon">{icon}</span>
        )}
      </div>
    </div>
  );
};

export default Input;
