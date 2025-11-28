import React from "react"; 
import { IoIosArrowBack } from "react-icons/io"; 
import woman from "./assets/woman.png";
import { MdHomeFilled } from "react-icons/md"; 
import { MdBarChart } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";


function WorkoutPlan() {
  return (
    <div className="min-h-screen bg-background-light font-display">

      {/* Header */}
      <div className="flex items-center justify-between p-4 ">
        <button className="h-10 w-10 flex items-center justify-center">
          <IoIosArrowBack className="h-10 w-10" />
        </button>
        <img src={woman} className="h-10 w-10 rounded-full bg-gray-300" />
      </div>

      {/* Title */}
      <h1 className="px-4 text-[28px] font-bold text-gray-800">
        Daily Workout Plan
      </h1>

      {/* Content */}
      <div className="p-4 flex flex-col gap-6 pb-24">

        {/* Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Add today's workout plan"
            className="w-full rounded-xl border border-gray-200 px-4 py-4 pr-14 text-gray-800"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-lg text-black flex items-center justify-center">
            <IoMdAdd className="text-2xl" />
          </button>
        </div>

        {/* Tasks 1*/}
        <div className="flex flex-col gap-4">

          <div className="flex items-center justify-between gap-4 rounded-xl p-4 shadow">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="h-6 w-6 rounded-md" />
              <span className="text-gray-800">30 Min Treadmill Run</span>
            </div>
<button className="text-gray-500">
  <RiDeleteBin6Fill className="text-2xl" />
</button>



          </div>
        {/* Tasks 2 */}

          <div className="flex items-center justify-between gap-4 rounded-xl p-4 shadow">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="h-6 w-6 rounded-md" />
              <span className="text-gray-800">3x12 Dumbbell Bench Press</span>
            </div>
            <button className="text-gray-500">
  <RiDeleteBin6Fill className="text-2xl" />
</button>



          </div>
        {/* Tasks3 */}

          <div className="flex items-center justify-between gap-4 rounded-xl p-4 shadow">
            <div className="flex items-center gap-4">
              <input type="checkbox" defaultChecked className="h-6 w-6 rounded-md" />
              <span className="text-gray-800">Cool-down and Stretching</span>
            </div>
            <button className="text-gray-500">
  <RiDeleteBin6Fill className="text-2xl" />
</button>



          </div>
        {/* Tasks 4*/}

          <div className="flex items-center justify-between gap-4 rounded-xl p-4 shadow">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="h-6 w-6 rounded-md" />
              <span className="text-gray-800">Plank for 60Seconds</span>
            </div>
<button className="text-gray-500">
  <RiDeleteBin6Fill className="text-2xl" />
</button>


          </div>

        </div>
      </div>

      {/* Bottom NavBar */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-background-light px-4 pb-3 pt-2 flex gap-2">
        <button className="flex-1 flex flex-col items-center text-text-subtle-light">
          <MdHomeFilled className="text-2xl" />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex-1 flex flex-col items-center">
          <MdBarChart className="text-2xl" />
          <span className="text-xs">Progress</span>
        </button>
        <button className="flex-1 flex flex-col items-center text-text-subtle-light">
          <IoMdSettings className="text-2xl" />
          <span className="text-xs">Settings</span>
        </button>
      </div>

    </div>
  );
}

export default WorkoutPlan;