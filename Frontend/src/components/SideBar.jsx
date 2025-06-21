import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import bgImage from "../assets/bgImage.svg";
import logo from "../assets/logo.png";

const users = [
  { id: 1, name: "Test User 1", status: "Offline" },
  { id: 2, name: "Test User 2", status: "Offline" },
  { id: 3, name: "Test User 3", status: "Offline" },
];

const SideBar = ({ selectedUser, setSelectedUser }) => {
  const [activeId, setActiveId] = useState(null);

  const handleSelect = (user) => {
    setActiveId(user.id);
    setSelectedUser(user); 
  };

  return (
    <div className='h-full flex flex-col border-r gap-2 border-gray-500 justify-start p-4'>
      {/* Logo and three dots */}
      <div className='flex justify-between items-center relative'>
        <div className='flex gap-4 items-center'>
          <img src={logo} className='h-10 w-10 rounded-2xl object-cover' alt="logo" />
          <p className='text-white font-semibold font-mono'>Baat Chit</p>
        </div>

        <div className='relative group'>
          <BsThreeDotsVertical className='cursor-pointer w-5 h-5 text-white' />
          <div className='hidden group-hover:block absolute right-0 top-6 bg-blue-200 text-black rounded-md shadow-lg z-10 w-40'>
            <button className='block w-full px-4 pt-2 hover:text-gray-700 text-left'>Edit Profile</button>
            <hr className="my-2 border-gray-400 w-[80%] mx-auto" />
            <button className='block w-full px-4 py-2 hover:text-gray-700 text-left'>Logout</button>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className='flex items-center gap-2 bg-gray-500 my-3 px-4 py-1 rounded-2xl backdrop-blur-2xl mx-4'>
        <IoSearch color='white' className='text-lg' />
        <input
          type="text"
          placeholder="Search User..."
          className='bg-transparent text-white font-mono placeholder-white outline-none w-full'
        />
      </div>

      {/* Users List */}
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => handleSelect(user)}
          className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer transition-all duration-300
            ${activeId === user.id ? 'bg-blue-700' : 'hover:bg-gray-600'}`}
        >
          <img src={bgImage} alt="User Avatar" className='h-10 w-10 border-2 border-white rounded-full object-cover' />
          <div className='flex flex-col'>
            <h1 className='text-gray-200 text-md font-semibold'>{user.name}</h1>
            <h2 className='text-gray-400 text-sm'>{user.status}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
