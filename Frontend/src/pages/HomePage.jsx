import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import ChatSection from '../components/ChatSection';
import RightSideBar from '../components/RightSideBar';

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className='border w-full h-screen sm:px-[4%] sm:py-[2%]'>
      <div className={`backdrop-blur-xl h-full border-gray-600 border-2 rounded-2xl overflow-hidden relative grid grid-cols-1
        ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
        
        <SideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
         <ChatSection selectedUser={selectedUser} /> 
        {selectedUser ?<RightSideBar selectedUser={selectedUser} />:" "}
      </div>
    </div>
  );
};

export default HomePage;
