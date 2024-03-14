import { useState } from 'react';
import { Api } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
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
      localStorage.setItem('userToken', access_token);
      toast.success('Login successful!');
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50 px-4'>
      <div className='max-w-md w-full bg-white shadow-md rounded-md overflow-hidden'>
        <div className='px-6 py-8'>
          <h2 className='text-2xl font-semibold mb-4 text-center'>Login</h2>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='username' className='sr-only'>
                Username
              </label>
              <input
                id='username'
                name='username'
                type='text'
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                placeholder='Username'
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                placeholder='Password'
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                type='submit'
                className='w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
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
