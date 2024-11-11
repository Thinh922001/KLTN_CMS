import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './styles/reset-css.scss';
import './styles/global.scss';
import { LoginPage } from './page/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
