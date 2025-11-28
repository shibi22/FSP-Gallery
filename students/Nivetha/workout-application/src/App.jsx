import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MdCheck } from "react-icons/md";
import './App.css'
import image from './assets/image1.png'
import { FaEllipsisV } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaHome, FaChartLine, FaCog } from "react-icons/fa";

function App() {
 

  return (
    <>
   <div className="bg-gray-200 min-h-screen">
   <div className="flex items-center justify-between m-2">
       <button className="flex items-center   text-black rounded-lg ">
        <FaAngleLeft className="mr-2" size={25} />
      </button>
      <img src={image} className="h-20 w-20 rounded-full bg-cover "/>
      
      </div>
      <h1 className=" m-3 font-bold text-2xl">Workout Tracker</h1>
      <div className=" flex flex-col bg-white p-5 m-3 rounded-lg shadow-md">
        <h1 className="font-bold text-lg text-gray-700">Add Exercise</h1>
         <h1 className=" text-gray-700 mt-2">Exercise Name</h1>
        <input type ="text" placeholder='e.g., Bench Press' className="border border-gray-300 rounded-lg mt-3 p-1  shadow-sm focus:border-blue-accent focus:ring focus:ring-blue-accent/50
"></input>
        <div className="grid grid-cols-3 gap-3">
          <label className="text-gray-600 mt-2">Sets</label>
          <label className="text-gray-600 mt-2">Reps</label>
          <label className="text-gray-600 mt-2">Weight</label>
          <input type="number" placeholder='3' className="border border-gray-300 rounded-lg mr-1 pl-2 shadow-sm focus:border-blue-accent focus:ring focus:ring-blue-accent/50"></input>
          <input type="number" placeholder='5'className="border border-gray-300 rounded-lg mr-1 pl-2 shadow-sm focus:border-blue-accent focus:ring focus:ring-blue-accent/50"></input>
          <input type="text" placeholder='45Kg'className="border border-gray-300 rounded-lg mr-1 pl-2 shadow-sm focus:border-blue-accent focus:ring focus:ring-blue-accent/50"></input>
         
        </div>
         <button className="bg-orange-500 mt-5 rounded-lg text-white font-bold text-sm  shadow-lg pb-2 py-1">Add Exercise</button>
          
          
          </div>
          <h1 className="text-gray-700 font-bold m-5">Today's Exercises</h1>

         <div className="flex bg-white rounded-lg shadow-md  m-3  p-1 gap-6 items-center">
  
<svg className="h-20 w-20" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" stroke="#E5E7EB" strokeWidth="4" fill="transparent"/><circle cx="24" cy="24" r="20" stroke="#3B82F6" strokeWidth="4" fill="transparent" strokeDasharray={125.664} strokeDashoffset={31.416} strokeLinecap="round"/><text x="50%" y="50%" dy=".35em" textAnchor="middle" fontSize="14" fontWeight="bold" fill="black">75%</text></svg>

  {/* Right section */}
 <div className="flex flex-col  w-full">
    <h1 className="text-lg font-bold text-gray-700">Dumbel Press</h1>
    <div className="flex text-sm gap-1 text-gray-700 mt-1">
      <span>3 sets</span>
      <span>•</span>
      <span>12 reps</span>
      <span>•</span>
      <span>20kg</span>
    </div>
  </div>

  <FaEllipsisV size={15} className="text-gray-800  ml-3 m-2 mt-0.5" />
</div>
  <div className="flex bg-white rounded-lg shadow-md p-4 m-2 gap-6 items-center">
  
   <div className="relative w-12 h-12">
  {/* Outer green ring */}
   <svg className="w-12 h-12" viewBox="0 0 48 48">
    <circle
      cx="24"
      cy="24"
      r="22"
      fill="none"
      strokeWidth="4"
      className="stroke-green-500"
    />
  </svg>

  {/* Center tick */}
  <div className="absolute inset-0 flex items-center justify-center">
    <MdCheck className="w-6 h-6 text-green-500 bg-white rounded-full" />
  </div>
</div>
<div className="flex flex-col  w-full">
    <h1 className="text-lg font-bold text-gray-700">Squats</h1>
    <div className="flex text-sm gap-1 text-gray-700 mt-1">
      <span>5 sets</span>
      <span>•</span>
      <span>5 reps</span>
      <span>•</span>
      <span>80kg</span>
    </div>
  </div>

  <FaEllipsisV size={15} className="text-gray-800 cursor-pointer ml-2 mt-0.5" />
</div>
    
  
  


  <div className="flex bg-white rounded-lg shadow-md p-4 m-2 gap-6 items-center">
  
   <div className="space-y-1">

  <div className="w-14 h-2 bg-gray-300 rounded-full">
    <div className="w-7 h-2 bg-orange-500 rounded-full"></div>
  </div>

  
  <div className="w-14 h-2 bg-gray-300 rounded-full">
    <div className="w-7 h-2 bg-orange-500 rounded-full"></div>
  </div>

  
  <div className="w-14 h-2 bg-gray-300 rounded-full"></div>
</div>


   <div className="flex flex-col  w-full">
    <h1 className="text-lg  font-bold text-gray-700">Pull Ups</h1>
    <div className="flex text-sm gap-1 text-gray-700 mt-1">
      <span>3 sets</span>
      <span>•</span>
      <span>8 reps</span>
      
    </div>
  </div>

  <FaEllipsisV size={15} className="text-gray-800 cursor-pointer ml-2 mt-0.5" />
</div>
<div className="mt-20 bottom-0 left-0 w-full bg-white shadow-md flex justify-around items-center py-3">
  <FaHome size={22} className="text-gray-600 cursor-pointer" />
  <FaChartLine size={22} className="text-gray-600 cursor-pointer" />
  <FaCog size={22} className="text-gray-600 cursor-pointer" />
</div>
            


          
          




         
            
             
         
      </div>
     
    </>
  )
}

export default App
