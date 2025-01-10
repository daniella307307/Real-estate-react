import React, { useState } from "react";
import axios from 'axios';

function Register() {
  const [rememberMe, setRememberMe] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ensure passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Make API request to register user
      const result = await axios.post("http://localhost:8080/api/v1/register", {
        name, email, password, confirmPassword, role
      });

      // Check if registration was successful and store token
      if (result.data.token) {
        localStorage.setItem('authToken', result.data.token);
        alert('Registration successful!');
        window.location.href = '/'; // Redirect to homepage or dashboard
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
    else if (name === 'confirmPassword') setConfirmPassword(value);
    else if (name === 'role') setRole(value);
    else if (name === 'rememberMe') setRememberMe(e.target.checked);
  };

  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="w-11/12 sm:w-96 p-8 bg-black bg-opacity-30 rounded-xl backdrop-blur-lg">
          <h1 className="text-2xl font-bold text-center text-white mb-8">Sign Up</h1>
          
          {/* Name Input */}
          <div className="flex items-center bg-black bg-opacity-50 rounded-lg mb-4 p-2">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
              className="flex-1 p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div className="flex items-center bg-black bg-opacity-50 rounded-lg mb-4 p-2">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              className="flex-1 p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center bg-black bg-opacity-50 rounded-lg mb-4 p-2">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              className="flex-1 p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="flex items-center bg-black bg-opacity-50 rounded-lg mb-4 p-2">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              className="flex-1 p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          {/* Role Dropdown */}
          <div className="flex items-center bg-black bg-opacity-50 rounded-lg mb-4 p-2">
            <select
              name="role"
              className="flex-1 p-2 bg-transparent text-gray-400 placeholder-gray-300 focus:outline-none"
              value={role}
              onChange={handleChange}
            >
              <option value="" disabled>Select Role</option>
              <option value="tenant">Tenant</option>
              <option value="realtor">Realtor</option>
              {/* Add more options as needed */}
            </select>
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
          </div>

          {/* Sign Up Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-2 bg-orange-300 text-white rounded-lg font-semibold hover:bg-orange-500 transition duration-200"
          >
            Sign Up
          </button>

          {/* Link to login page */}
          <p className="text-center text-white mt-4">
            Already have an account?{" "}
            <span className="text-yellow-400 cursor-pointer">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
