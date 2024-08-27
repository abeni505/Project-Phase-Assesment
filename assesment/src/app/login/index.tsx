import { FC } from 'react';
import Image from 'next/image';

const LoginPage: FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left side (Welcome message and image) */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <div className="max-w-md text-center">
          <Image    
            src="/path-to-welcome-image.png"
            alt="Welcome Back"
            width={300}
            height={300}
            
          />
          <h1 className="text-3xl font-bold mt-8">Welcome Back</h1>
          <p className="text-gray-500 mt-4">
            Login to receive blogs and learn more about A2SV
          </p>
        </div>
      </div>

      {/* Right side (Login form) */}
      <div className="w-full lg:w-1/2 bg-blue-700 flex flex-col justify-center items-center p-8">
        <div className="bg-white rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <p className="text-gray-500 mb-6">
            Hey, enter your details to sign in to your account
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button type="button" className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500">
                  {/* Icon or text to show/hide password */}
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h.01M21 12c0 4.418-5.373 8-12 8a18.627 18.627 0 01-9-2.209M3.051 9.375a8.056 8.056 0 00-.516 3.087c0 4.418 5.373 8 12 8 3.342 0 6.462-.872 9-2.209M9 12a3 3 0 116 0m-6 0a3 3 0 013-3m0 0a3 3 0 00-3-3m6 6a3 3 0 00-3-3"></path>
                  </svg>
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-500 transition duration-200"
            >
              Sign in
            </button>
          </form>
        </div>
        <p className="text-white mt-4">
          Don't have an account? <a href="/signup" className="underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
