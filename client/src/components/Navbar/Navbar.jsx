import { faHomeLg } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.css';

function Navbar() {
  const handleSubmit=()=>{
    window.location.pathname='/login'
  }
  return (
    <div className='w-[100vw] h-[15vh]'>
       <div className='p-[2em]'>
         <nav className='flex items-center justify-between '>
          <div className='flex items-center gap-2 '>
          <FontAwesomeIcon icon={faHomeLg} className='text-[2em] text-orange-300'/>
          <h1 className=''>HomeRun</h1>
          </div>
          <div>
            <ul className='flex items-center mt-1 gap-8 cursor-pointer ' >
              <li className='hover:text-gray-400'>Home</li>
              <li className='hover:text-gray-400'>Buy</li>
              <li className='hover:text-gray-400'>Rent</li>
              <li className='hover:text-gray-400'>Find Agents</li>
              <li className='hover:text-gray-400'>News</li>
            </ul>
          </div>
          <div className='flex items-center gap-4'>
            <button type='submit' onClick={handleSubmit} className='text-white bg-orange-300 px-6 py-2 rounded-[4em] border-[1px] border-orange-400 hover:bg-white hover:text-black' >Sign In</button>
            <button type='submit' className='text-black bg-white px-6 py-2 rounded-[4em] border-[1px] border-orange-400 hover:bg-orange-300 hover:text-white' >Sign Up</button>
          </div>
         </nav>
       </div>
    </div>
  );
}

export default Navbar;
