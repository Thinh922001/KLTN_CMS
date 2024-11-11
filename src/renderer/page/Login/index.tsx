import { useState } from 'react';
import Input from '../../components/Input';
import './login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faPassport, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';

export function LoginPage() {
  const [inputValue, setInputValue] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handlePassWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <div className="login">
      <div className="login__wrapper">
        <h2 className="login__title">Xin chào!</h2>
        <div className="login__form-group">
          <Input
            placeholder="Enter your username"
            value={inputValue}
            onChange={handleInputChange}
            icon={<FontAwesomeIcon icon={faUser} />}
            iconPosition="right"
          />
        </div>
        <div className="login__form-group">
          <Input
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={handlePassWordChange}
            icon={<FontAwesomeIcon icon={faPassport} />}
            iconPosition="right"
          />
        </div>
        <div className="login__form-group">
          <Button
            text="Đăng nhập"
            onClick={handleClick}
            variant="primary"
            size="large"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}
