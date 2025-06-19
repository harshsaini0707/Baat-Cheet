import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import ChatSection from '../components/ChatSection'
import RightSideBar from '../components/RightSideBar'

const HomePage = () => {
    const[ selectUser , setSelectedUser] = useState(false);
  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
        <div className={`backdrop-blur-xl h-[100%] border-gray-600 border-2 rounded-2xl overflow-hidden relative grid grid-cols-1 
       ${selectUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'} `}>

            <SideBar/>
            <ChatSection/>
            <RightSideBar/>
        </div>
        
        </div>
  )
}

export default HomePage