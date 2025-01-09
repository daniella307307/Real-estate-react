import { faHomeLg } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function LoginScreen() {
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = ()=>{
    window.location.pathname = '/login'
  }
  return (
    <div className="flex justify-center items-center ">
      <div className="w-11/12 sm:w-96 p-8 bg-black bg-opacity-30 rounded-xl backdrop-blur-lg">
        <h1 className="text-2xl font-bold text-center text-white mb-8">Login</h1>

        {/* Email Input */}
        <div className="flex items-center bg-black bg-opacity-50 rounded-lg mb-4 p-2">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center bg-black bg-opacity-50 rounded-lg mb-4 p-2">
          <input
            type="password"
            placeholder="Password"
            className="flex-1 p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            Remember me
          </label>
          <button className="text-yellow-400">Forgot Password?</button>
        </div>

        {/* Login Button */}
        <button className="w-full py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition duration-200">
          Login
        </button>

        <p className="text-center text-white mt-4">
          Don’t have an account? <span className="text-yellow-400 cursor-pointer">Register</span>
        </p>
      </div>
    </div>
  );
}

export default LoginScreen;
