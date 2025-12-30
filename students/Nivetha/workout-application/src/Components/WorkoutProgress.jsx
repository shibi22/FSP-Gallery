import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import image1 from "../assets/image1.png";
import { MdFitnessCenter } from "react-icons/md"; 


function WorkoutProgress({ exercises = [] }) {
  const navigate = useNavigate();

  return (
    <div className="page">
         <div className="bg-gray-200 min-h-screen">
        <div className="flex items-center justify-between m-2">
               <button className="flex items-center   text-black rounded-lg ">
                <FaAngleLeft className="mr-2" size={25} />
              </button>
              <img src={image1} className="h-10 w-10 rounded-full object-cover" />
        
              </div>
      
<div className="mt-10 m-2">
    
       <button
  onClick={() => navigate("/tracker")}
  className="w-full bg-orange-400 mt-5 rounded-lg text-white border-black-2 font-bold text-sm shadow-lg py-2 "
>
  Add Workout
</button>
</div>
      <h2 className="text-gray-700 mt-5 m-2 font-bold">Workout Progress</h2>
{exercises && exercises.map((ex, index) => (
  <div
    key={index}
    className="bg-white rounded-lg shadow-md p-4 m-2 flex items-center"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-green-500 mr-3">
      <MdFitnessCenter className="text-green-500 text-xl" />
    </div>
    <div>
      <p className="font-bold text-gray-800">{ex.name}</p>
      <p className="text-gray-700 mt-1">
        {ex.sets} sets • {ex.reps} reps • {ex.weight}
      </p>
    </div>
  </div>
))}
    
    </div>
    </div>
  )
};
export default WorkoutProgress;