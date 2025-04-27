import { useState } from 'react'



import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    age: 20,
    address: {
      city: "india",
      state: "delhi"
    }
  }
  let addvalue = () => {
    setCount(count + 1);
  }
  return (


    <>
      <h1 className=' bg-green-400 text-5xl font-bold text-black p-4  text-center rounded-xl'>  tailwind react </h1>
      <button onClick={addvalue}>Increase{count}</button>

      <Card username="chai aman" newObj={{ age: 26 }} meraob={myObj} />

      <Card />

    </>
  )
}

export default App
