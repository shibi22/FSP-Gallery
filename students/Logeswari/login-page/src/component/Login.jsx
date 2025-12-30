import React, { useState } from "react";
import { IoPerson, IoMailSharp } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import MealIcon from "../assets/MealIcon.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(false); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      navigate("welcome", { state: { username: name } });
    }
  };

  const handleClick = () => {
    navigate("/welcome", { state: { username: name } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E0F7FA] to-[#E8F5E9] flex items-center justify-center font-display">
      <div className="w-full max-w-md px-4">
    
 <div className="w-24 h-24 mx-auto mt-9 mb-4 rounded-full bg-white flex items-center justify-center shadow">
   <img src={MealIcon} className="w-12 h-12" alt="Logo" />
</div>

 <h1 className="font-bold text-center text-3xl mb-8">
    {isLogin ? "Welcome Back" : "Join Us Today"}
    </h1>
        <div className="m-4 py-3 space-y-4 bg-field-light text-gray-800 focus:ring-2 focus:ring-primary/50">

   <div className="relative">
    <IoPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
            <input
              className="w-full px-4 border border-gray-400 pl-12 py-3 bg-gray-100 rounded-xl"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleEnter}
            />
          </div>
          {!isLogin  && (
    <div className="relative">
         <IoMailSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
      <input
 className="w-full px-4 border border-gray-400 pl-12 py-3 bg-gray-100 rounded-xl"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          <div className="relative">
            <IoMdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
            <input className="w-full px-4 py-3 border border-gray-400 pl-12 bg-gray-100 rounded-xl"
 placeholder="Password"
type="password"
value={password}
 onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <button
          onClick={handleClick}
          className="w-full px-5 py-4 h-11 rounded-xl bg-orange-600 text-white mt-4">
          Enter App
        </button>

    
        <p className="mt-5 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span className="font-semibold cursor-pointer"
            onClick={() => setIsLogin(true)}> Log In</span>
        </p>
      </div>
    </div>
  );
}

export default Login;