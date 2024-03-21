import { useState } from 'react';
import { Api } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLoginSuccess = (accessToken) => {
    localStorage.setItem('token', accessToken);
    toast.success('Login successful!');
    navigate('/');
  };

  const handleLoginFailure = (error) => {
    if (error.response) {
      const { message } = error.response.data;
      toast.error(message);
    } else {
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Api.post(
        '/auth/login',
        { email: credentials.username, password: credentials.password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      const { access_token } = response.data;
      handleLoginSuccess(access_token);
    } catch (error) {
      handleLoginFailure(error);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50 px-4'>
      <div className='max-w-md w-full bg-white shadow-md overflow-hidden rounded-xl'>
        <div className='px-6 py-8'>
          <h2 className='text-2xl font-bold mb-4'>Sign In To Your Account</h2>
          <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='username' className='mb-2 block'>
                Username
              </label>
              <input
                id='username'
                name='username'
                type='text'
                required
                value={credentials.username}
                onChange={handleInputChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                placeholder='Username'
              />
            </div>
            <div>
              <label htmlFor='password' className='mb-2 block'>
                Password
              </label>
              <div className='flex items-center'>
                <input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={credentials.password}
                  onChange={handleInputChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                  placeholder='Password'
                />
                <button
                  type='button'
                  className='bg-[#E5E7EB] p-2 rounded-md ml-3'
                  onClick={togglePasswordVisibility}
                >
                  <img
                    className='p-1'
                    src={showPassword ? 'eye-closed.svg' : 'eye-open.svg'}
                    alt=''
                  />
                </button>
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='w-full py-2 px-4 font-semibold text-white rounded-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
