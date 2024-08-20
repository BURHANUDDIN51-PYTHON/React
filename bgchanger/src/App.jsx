import React,{useState} from "react"
import Button from "./components/Button"

function App() {

  const [color, setColor] = useState('red')
  const btnArray = ["Red", "Green", "Blue", "Lavender", "Grey", "Pink", "White","Purple","Yellow", "Olive"]

  function changeColor(color){
    setColor(color);
  } 

  const btnComp = btnArray.map(btn => <Button
      color={btn}
      changeColor={changeColor}
  />)

  return (
    <div className="w-full h-screen flex justify-center items-end pb-10" style={{backgroundColor: color}}>
      <div className="flex gap-1 bg-slate-500 p-0.25 px-1 rounded-xl">
        {btnComp}
      </div>
    </div>
  )
}

export default App
