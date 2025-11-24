import IntroPage from './IntroPage';
import React , {useState , useMemo} from 'react';

function App() {
  
  const [number, setNumber] = useState(0);
  const [darkMode, setDarkMode] = useState(false);


    const doubleNumber = useMemo(() => {
      return slowFunction(number) * 2;
    }
    , [number]);
    
  const themeStyles ={
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black'
  };

  return (
    <div className="App">
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}>Toggle Theme</button>
      <div style={themeStyles}>
        {doubleNumber}
      </div>
    </div>
  );
}

function slowFunction(num) {
  console.log('Calling Slow Function');
  for(let i =0; i <= 1000; i++) {}
  return num;
}

export default App