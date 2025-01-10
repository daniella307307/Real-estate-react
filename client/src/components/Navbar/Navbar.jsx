import { faHomeLg } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Navbar() {
  const { id } = useParams(); // Retrieve the dynamic ID from the URL
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    avatar: null,
  });
  const showProfile = ()=>{
    window.location.href = '/profile'
  }
  useEffect(() => {
    // Check if there's an authentication token in localStorage
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      // Dynamically pass the ID in the URL
      axios
        .get(`http://localhost:8080/api/v1/user/${id}`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data", error);
        });
    }
  }, [id]);

  const handleSubmit = () => {
    window.location.pathname = '/login';
  };

  const handleNext = () => {
    window.location.pathname = '/signup';
  };

  const handleLogout = () => {
  
    localStorage.removeItem('authToken');
    localStorage.clear();
    setUser(null);
    window.location.pathname = '/login';
  };

  return (
    <div className='overflow-x-hidden'>
      <div className='my-2'>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faHomeLg} className='text-[2em] text-orange-300' />
            <h1>HomeRun</h1>
          </div>
          <div>
            <ul className='flex items-center mt-1 gap-8 cursor-pointer'>
              <li className='hover:text-gray-400'>Home</li>
              <li className='hover:text-gray-400'>Buy</li>
              <li className='hover:text-gray-400'>Rent</li>
              <li className='hover:text-gray-400'>Find Agents</li>
              <li className='hover:text-gray-400'>News</li>
            </ul>
          </div>
          <div className='flex items-center gap-4'>
            {user ? (
              <>
                <div className='flex items-center gap-2'  onClickCapture={showProfile}>
                  <img
                    src={user.avatar || 'https://via.placeholder.com/40'} // Default avatar if no avatar is set
                    alt='Profile'
                    className='w-10 h-10 rounded-full'
                  />
                 <div className='items-center justify-between'>
                 <h1 className='text-black text-[.5em]'>{user.name}</h1>
                 <h1 className='text-black text-[.5em]'>{user.role}</h1>
                 </div>
                </div>
                <button
                  onClick={handleLogout}
                  className='text-white bg-orange-300 px-6 py-2 rounded-[4em] border-[1px] border-orange-400 hover:bg-white hover:text-black'
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  type='submit'
                  onClick={handleSubmit}
                  className='text-white bg-orange-300 px-6 py-2 rounded-[4em] border-[1px] border-orange-400 hover:bg-white hover:text-black'
                >
                  Sign In
                </button>
                <button
                  type='submit'
                  onClick={handleNext}
                  className='text-black bg-white px-6 py-2 rounded-[4em] border-[1px] border-orange-400 hover:bg-orange-300 hover:text-white'
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
