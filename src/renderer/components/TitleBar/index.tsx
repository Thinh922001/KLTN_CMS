import { faSquare as faSquareRegular } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, ReactNode } from 'react';
import './title-bar.scss';

interface TitleBarProps {
  children?: ReactNode;
}

const TitleBar: React.FC<TitleBarProps> = ({ children }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => {
    window.electron.windowControls.maximize();
    setIsMaximized(!isMaximized);
  };

  useEffect(() => {
    const handleResize = async () => {
      const maximized = await window.electron?.windowControls?.isMaximized();
      setIsMaximized(!!maximized);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className="title-bar" onDoubleClick={toggleMaximize}>
        <div className="title">Phần mềm quản trị</div>
        <div className="window-controls">
          <button onClick={() => window.electron.windowControls.minimize()}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button onClick={toggleMaximize}>
            <FontAwesomeIcon icon={faSquareRegular} />
          </button>
          <button
            className="close"
            onClick={() => window.electron.windowControls.close()}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
      <main className="main-layout">{children}</main>
    </div>
  );
};

export default TitleBar;
