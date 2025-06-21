import React from 'react';
import logo from "../assets/logo.png";

const RightSideBar = () => {
  return (
    <div className='flex flex-col items-center justify-between h-full pt-4 bg-[#1f1f2e]'>

      {/* Profile Section */}
      <div className='flex flex-col items-center gap-2'>
        <img src={logo} alt="pf" className='h-16 w-16 rounded-full object-cover' />
        <div className='text-center'>
          <h1 className='text-white font-semibold text-lg'>Rohit Raj</h1>
          <p className='text-gray-400 text-sm'>Sleeping...</p>
        </div>
      </div>

      {/* Divider */}
      <div className='w-full my-4 border-t border-gray-600'></div>

      {/* Media Section */}
      <div className='text-center text-gray-400 text-sm italic mb-auto'>
        No media shared yet
      </div>

      {/* Logout Button */}
      <div>
       <button className="bg-gradient-to-r from-purple-500 to-violet-700 text-white font-semibold rounded-full px-20 py-2 mb-4 w-full shadow-md hover:opacity-90 transition duration-200">
  Logout
</button>

      </div>
    </div>
  );
};

export default RightSideBar;
