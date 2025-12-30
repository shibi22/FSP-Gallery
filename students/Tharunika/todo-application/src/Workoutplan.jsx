import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import woman from "./assets/woman.png";
import { MdHomeFilled, MdBarChart, MdDelete } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

function WorkoutPlan() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "30 Min Treadmill Run", completed: false },
    { id: 2, text: "3x12 Dumbbell Bench Press", completed: false },
    { id: 3, text: "Cool-down and Stretching", completed: false },
    { id: 4, text: "Plank for 60 Seconds", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Empty task not allowed");
      return;
    } 
    const newTaskObj = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-background-light font-display p-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-2">
        <button className="h-10 w-10 flex items-center justify-center">
          <IoIosArrowBack className="h-10 w-10" />
        </button>
        <img src={woman} className="h-10 w-10 rounded-full bg-gray-300" />
      </div>

      {/* Title */}
      <h1 className="pt-6 pb-3 text-[32px] font-bold text-gray-800">
        Daily Workout Plan
      </h1>

      {/* Input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Add today's workout plan"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-card-light px-4 py-4 pr-14 text-gray-800 placeholder:text-text-subtle-light focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
        />
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-lg bg-accent text-black flex items-center justify-center"
          onClick={addTask}
        >
          <BiSolidMessageSquareAdd className="text-4xl" />
        </button>
      </div>

      {/* Tasks List */}
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className="flex items-center justify-between gap-4 rounded-xl bg-card-light p-4 shadow"
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                className="h-6 w-6 rounded-md"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <span
                className={`text-gray-800 ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.text}
              </span>
            </div>
            <MdDelete
              className="text-4xl text-text-subtle-light hover:text-red-500"
              onClick={() => deleteTask(index)}
            />
          </div>
        ))}
      </div>

      {/* Bottom NavBar */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-background-light px-4 pb-3 pt-2 flex gap-2">
        <button className="flex-1 flex flex-col items-center text-text-subtle-light">
          <MdHomeFilled className="text-2xl" />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex-1 flex flex-col items-center text-accent">
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

