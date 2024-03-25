import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../services/api';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    } else {
      // Initialize the Api module with the token
      Api.setToken(isLoggedIn);
    }
  }, [isLoggedIn]);

  return children;
}

export default ProtectedRoute;
