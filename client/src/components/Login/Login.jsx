import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoginScreen() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if "rememberMe" value is stored in localStorage
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");

    if (rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
    else if (name === 'rememberMe') setRememberMe(e.target.checked);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API request to log in user
      const result = await axios.post("http://localhost:8080/api/v1/login", {
        email,
        password
      });

      // Check if login was successful and store token
      if (result.data.token) {
        localStorage.setItem('authToken', result.data.token);

        // If rememberMe is checked, store email and password in localStorage
        // if (rememberMe) {
        //   localStorage.setItem("rememberedEmail", email);
        //   localStorage.setItem("rememberedPassword", password);
        // } else {
        //   localStorage.removeItem("rememberedEmail");
        //   localStorage.removeItem("rememberedPassword");
        // }

        alert(result.data.message);
        window.location.href = '/'; // Redirect to homepage or dashboard
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="w-11/12 sm:w-96 p-8 bg-black bg-opacity-30 rounded-xl backdrop-blur-lg">
        <h1 className="text-2xl font-bold text-center text-white mb-8">Login</h1>

        {/* Email Input */}
        <div className="flex items-center bg-black bg-opacity-50 rounded-lg mb-4 p-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            className="flex-1 p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center bg-black bg-opacity-50 rounded-lg mb-4 p-2">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            className="flex-1 p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              name="rememberMe"
              checked={rememberMe}
              onChange={handleChange}
              className="mr-2"
            />
            Remember me
          </label>
          <button className="text-yellow-400">Forgot Password?</button>
        </div>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-orange-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition duration-200"
        >
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
