import React from "react";
import { useLocation } from "react-router-dom";

function Welcome() {
  const location = useLocation();
  const username = location.state?.username || "User"; 

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-5">Welcome, {username}</h1>

      <div
        className="bg-white p-4 rounded-xl flex justify-between items-center mb-4 shadow"
        onClick={() => alert("This page is currently working")}
      >
        <div>
          <h2 className="font-semibold">To-Do Planner</h2>
          <p className="text-sm text-gray-500">Organize your tasks</p>
        </div>
        <div className="bg-green-100 p-3 rounded-full"></div>
      </div>

      <div
        className="bg-white p-4 rounded-xl flex justify-between items-center shadow"
        onClick={() => alert("This page is currently working")}
      >
        <div>
          <h2 className="font-semibold">Workout Tracker</h2>
          <p className="text-sm text-gray-500">Track your workouts</p>
        </div>
        <div className="bg-green-100 p-3 rounded-full"></div>
      </div>
    </div>
  );
}

export default Welcome;