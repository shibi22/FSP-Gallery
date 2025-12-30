import { useState } from 'react'
import { MdCheck } from "react-icons/md";
import '../App.css'
import image1 from "../assets/image1.png";
import { FaEllipsisV } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaHome, FaChartLine, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function WorkoutTracker({ exercises = [], addExercise }) {
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const navigate = useNavigate();

  const handleAddExercise = () => {
    if (!name || !sets || !reps || !weight) {
      alert("Enter Exercise Name, Sets, Reps and Weight");
      return;
    }

    addExercise({ name, sets, reps, weight });

    setName("");
    setSets("");
    setReps("");
    setWeight("");
  };

  const lastthree = exercises.slice(0, 3);

  return (
    <div className="bg-gray-200 min-h-screen pb-20">
      <div className="flex items-center justify-between m-2">
        <button onClick={() => navigate("/")}>
          <FaAngleLeft size={25} />
        </button>
        <img src={image1} className="h-10 w-10 rounded-full object-cover" />
      </div>

      <h1 className="m-3 font-bold text-2xl">Workout Tracker</h1>

      <div className="flex flex-col bg-white p-5 m-3 rounded-lg shadow-md">
        <h1 className="text-gray-700">Add Exercise</h1>

        <input
          type="text"
          placeholder="e.g., Bench Press"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg mt-3 p-2"
        />

        <div className="grid grid-cols-3 gap-3 mt-3">
          <input
            type="number"
            placeholder="Sets"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            className="border rounded-lg p-2"
          />
          <input
            type="number"
            placeholder="Reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="border rounded-lg p-2"
          />
          <input
            type="text"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border rounded-lg p-2"
          />
        </div>

        <button
          onClick={handleAddExercise}
          className="bg-orange-500 mt-4 rounded-lg text-white font-bold py-2"
        >
          Add Exercise
        </button>
      </div>

      <h1 className="text-gray-700 font-bold m-5">Today's Exercises</h1>

      <div className="p-2">
        {lastthree.map((ex, index) => (
          <div
            key={index}
            className="flex bg-white rounded-lg shadow-md p-4 m-2 gap-4 items-center"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-green-500">
              <MdCheck className="text-green-500 text-xl" />
            </div>

            <div className="flex flex-col w-full">
              <h1 className="font-bold">{ex.name}</h1>
              <div className="text-sm text-gray-600">
                {ex.sets} sets • {ex.reps} reps • {ex.weight}
              </div>
            </div>

            <FaEllipsisV />
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around py-3">
        <FaHome size={22} />
        <FaChartLine size={22} />
        <FaCog size={22} />
      </div>
    </div>
  );
}

export default WorkoutTracker;