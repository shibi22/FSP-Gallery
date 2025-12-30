import React, { useState } from "react";
import WorkoutTracker from './Components/WorkoutTracker.jsx';
import WorkoutProgress from './Components/WorkoutProgress.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [exercises, setExercises] = useState([]);

  const addExercise = (newExercise) => {
    setExercises(prev => [newExercise, ...prev]);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<WorkoutProgress exercises={exercises} />} />
        <Route path="/tracker" element={<WorkoutTracker exercises={exercises} addExercise={addExercise} />} />
      </Routes>
    </>
  );
}

export default App;