import { useState } from "react"


function App() {
  const [color,setColor] = useState("#c4dbf6")

  return (
    <div className="w-full h-screen "
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center shadow-2xl bg-white rounded-3xl px-3 py-2">
            <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full
            shadow-lg text-white" style={{backgroundColor: "red"}}>
              Red
            </button>
            <button 
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full
            shadow-lg text-white" style={{backgroundColor: "yellow"}}>
              Yellow
            </button>
            <button 
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full
            shadow-lg text-white" style={{backgroundColor: "blue"}}>
              Blue
            </button>
            <button 
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full
            shadow-lg text-white" style={{backgroundColor: "pink"}}>
            Pink
            </button>
            <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full
            shadow-lg text-white" style={{backgroundColor: "green"}}>
              Green
            </button>
          </div>
        </div>
    </div>
  )
}

export default App
