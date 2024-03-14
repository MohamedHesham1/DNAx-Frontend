import { useState } from 'react';
import { Api } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      <div className='max-w-md w-full bg-white shadow-md overflow-hidden rounded-xl'>
        <div className='px-6 py-8'>
          <h2 className='text-2xl font-bold mb-4 '>Sign In To Your Account</h2>
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
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                placeholder='Username'
                onChange={handleInputChange}
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
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                  placeholder='Password'
                  onChange={handleInputChange}
                />
                <button
                  type='button'
                  className='bg-[#E5E7EB] p-2 rounded-md ml-3'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <div className='p-1'>
                      <img className='' src='eye-closed.svg' alt='' />
                    </div>
                  ) : (
                    <div className='p-1'>
                      <img className='' src='eye-open.svg' alt='' />
                    </div>
                  )}
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
