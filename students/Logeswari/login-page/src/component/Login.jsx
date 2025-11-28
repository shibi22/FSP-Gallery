import React from "react";
import { IoPerson, IoMailSharp } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import MealIcon from "../assets/MealIcon.png";

function Login() {
  return (
   <div className="min-h-screen bg-gradient-light  flex items-center justify-center font-display  bg-gradient-to-b 
  from-[#E0F7FA]  
  to-[#E8F5E9]   
" >
  <div className="w-full max-w-md px-4">
     
        
<div className="w-24 h-24 mx-auto mt-9 mb-4 rounded-full bg-white flex items-center justify-center shadow">
  <img src={MealIcon} className="w-12 h-12" />
</div>


<h1 className="font-bold text-center text-3xl   mb-8">Join Us Today</h1>




        <div className=" m-4  py-3 border-border-light space-y-4 bg-field-light  text-gray-800  focus:ring-2 focus:ring-primary/50 ">
        
         <div className="relative">
  <IoPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl " />
           <input className="w-full px-4 border border-gray-400 pl-12 py-3 bg-gray-100  rounded-xl   #F9F9F9 bg-field-light" placeholder="Full Name" />

</div> 

<div className="relative">
    <IoMailSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
              <input className="w-full px-4  border border-gray-400  py-3 bg-gray-100 pl-12 rounded-xl   #F9F9F9 bg-field-light" placeholder="Email Address" />

  </div>

<div className="relative">
    <IoMdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
              <input className="w-full px-4 py-3  border border-gray-400  bg-gray-100 pl-12 rounded-xl  #F9F9F9 bg-field-light" placeholder="Password" type="password" />

  </div>
        </div>
        <button className=" w-full p-2 h-11 rounded-2xl bg-orange-400  text-lg bg-coral text-white hover:opacity-90 transition-opacity">
          Enter App
        </button>

        <p className="mt-5 text-center text-sm-3 text-text-light-primary/80">
          Already have an account? <span className="font-semibold">Log In</span>
        </p>
</div>
      </div>
   
  );
};
export default Login
