
import React, { useState } from "react"; 

function App2() { 
  const [count, setCount] = useState(0); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const fruits = ["🍎 사과", "🍌 바나나", "🍊 오렌지"];
  const [name, setName] = useState("");

  return ( 
  <div> 
    <input 
    type="text" 
    placeholder="이름을 입력하세요" 
    value={name} 
    onChange={(e) => setName(e.target.value)} /> 
    <p>안녕하세요, {name || "익명"}님!</p> 
  </div> 

  ); 

/*   return (
    <ul> {fruits.map((fruit, index) => ( <li key={index}>{fruit}</li> ))} </ul>
  );    */
} 
export default App2; 


/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo TEST" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
 */