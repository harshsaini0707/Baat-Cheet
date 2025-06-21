import React, { useRef } from 'react';
import logo from "../assets/logo.png";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { RiSendPlaneFill } from "react-icons/ri";
const ChatSection = ({ selectedUser }) => {
  const imageRef = useRef(null)

   const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Image selected:', file);
      // You can preview or send the image here
    }
  };
  return (
    <div className="h-full w-full ">
      {selectedUser ? (
      <div className='grid grid-rows-[0.8fr_1fr_5.7fr_1fr] w-full  border-r-1 border-gray-700'>
        {/**header */}
          <div className='flex flex-row justify-between items-center mt-3 mx-3'>

         <div className='flex flex-row gap-3 items-center'>
           <img src={logo} className='h-12 w-12 rounded-full object-cover' alt='pf'/>
          <h1 className='text-white font-semibold'>{selectedUser.name}</h1>
         </div>
          <IoMdInformationCircleOutline color='white' size={20}/>
        </div>

        <div className='border-t-1 m-3 bg-gray-500 h-[1px]'></div>
        {/**chat */}
        <div>



        </div>

        {/**text */}
        <div className='flex justify-center items-center gap-6 px-4 py-3'>
       <div className='flex bg-white/70 items-center w-full max-w-3xl rounded-2xl px-5 py-2'>

       <input
  type="text"
  placeholder="Send a message"
  className="outline-none bg-transparent w-full text-black placeholder-gray-600"
/>

         <input
              ref={imageRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
      <CiImageOn size={27} className=' text-gray-700 cursor-pointer' onClick={() => imageRef.current.click()} />

       </div>
   <RiSendPlaneFill color='white' size={28}/>
        </div>


      </div>

      ) : (
        <div className='flex flex-col items-center justify-center gap-3 bg-[#8185B2]/10 h-full w-full'>
          <img src={logo} className='h-20 w-20 rounded-xl' alt="logo" />
          <h1 className='text-white font-mono text-xl'>Chat anytime, anywhere...</h1>
        </div>
      )}
    </div>
  );
};

export default ChatSection;
