import { useState } from 'react';
import { Api } from '../services/api'; // Import the Api object from your axios file

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Inside your login page component
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Api.post(
        '/auth/login',
        { email: credentials.username, password: credentials.password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(response);
      setMessage('Login successful!');
      // Handle the response
    } catch (error) {
      // Handle the error
      setMessage('Login failed!');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 px-4'>
      <div className='max-w-md w-full space-y-8'>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='username' className='sr-only'>
                Username
              </label>
              <input
                id='username'
                name='username'
                type='text'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-[#909090] placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-[indigo-500] focus:z-10 sm:text-sm'
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
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-[#909090] placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0265DC] hover:bg-[#4483d1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Sign in
            </button>
          </div>

          {message && (
            <div className='text-center pt-2'>
              <p
                className={`text-sm font-semibold ${
                  message.includes('successful')
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {message}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
