
import './App.css'
import { useState } from 'react'
function App() {
  const [color, setColor] = useState("black")

  return (

    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div>
        <h1 className="text-3xl text-center font-bold text-white">Background Changer</h1>
        <div className="flex fixed bottom-10 left-0 right-0 justify-center mt-10 pb-10">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-2 hover:bg-blue-600"
            onClick={() => setColor("blue")}>Blue</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg mx-2 hover:bg-red-600"
            onClick={() => setColor("red")}>Red</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg mx-2 hover:bg-green-600"
            onClick={() => setColor("green")}>Green</button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg mx-2 hover:bg-yellow-600"
            onClick={() => setColor("yellow")}>Yellow</button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg mx-2 hover:bg-pink-600"
            onClick={() => setColor("pink")}>Pink</button>
        </div>
      </div>
    </div>

  )
}

export default App
