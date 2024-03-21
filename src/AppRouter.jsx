import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage'; // Existing login page import
import ModelForm from './components/ModelForm'; // Replace with your new component path
import ProtectedRoute from './components/ProtectedRoute';

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <ModelForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
