import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import bgImage from "../assets/bgImage.svg";

const users = [
  { id: 1, name: "Test User", status: "Offline" },
  { id: 2, name: "Test User", status: "Offline" },
  { id: 3, name: "Test User", status: "Offline" },
  { id: 4, name: "Test User", status: "Offline" },
  { id: 5, name: "Test User", status: "Offline" },
];

const SideBar = ({ selectedUser, setSelectedUser }) => {
  const [activeId, setActiveId] = useState(null);

  const handleSelect = (userId) => {
    setActiveId(userId);
    if (setSelectedUser) setSelectedUser(userId);
  };

  return (
    <div className='h-full flex flex-col border-r gap-2 border-gray-500 justify-start p-4'>

      {/* Logo and three dots */}
      <div className='flex justify-between items-center relative'>
        <div className='flex gap-4 items-center'>
          <img
            className='h-10 w-10 rounded-2xl object-cover'
            src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-0b90-622f-9ce5-1ebab6782437/raw?se=2025-06-19T18%3A27%3A15Z&sp=r&sv=2024-08-04&sr=b&scid=00cf1ec9-c30a-5d24-930a-ae76b460840d&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-19T16%3A19%3A30Z&ske=2025-06-20T16%3A19%3A30Z&sks=b&skv=2024-08-04&sig=hgPrUUOneMVJ31nE/wVizatWEKGYwencQEfB6ltBvHY%3D"
            alt="Baat-Chit logo"
          />
          <p className='text-white font-semibold font-mono'>Baat Chit</p>
        </div>

        <div className='relative group'>
          <BsThreeDotsVertical color='white' className='cursor-pointer w-5 h-5' />
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
          name="search"
          id="search"
          placeholder="Search User..."
          className='bg-transparent text-white font-mono placeholder-white outline-none w-full'
        />
      </div>

      {/* Users List */}
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => handleSelect(user.id)}
          className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer transition-all duration-300
            ${activeId === user.id ? 'bg-blue-700' : 'hover:bg-gray-600'}`}
        >
          <img
            src={bgImage}
            alt="User Avatar"
            className='h-10 w-10 border-2 border-white rounded-full object-cover'
          />
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
