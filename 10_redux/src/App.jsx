import { useDispatch, useSelector } from "react-redux"
import { decrement, increment,increaseByFive,decreaseByAmount } from "./redux/features/counterSlice"
import {useState } from "react"

function App() {
  const [amt,setAmt] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  
  return (
    <div className="flex bg-gray-800 h-dvh text-white p-15 gap-20">
      <div className="text-8xl">{count}</div>
      <div className="flex gap-5 flex-col">
        <button className="text-4xl border-2 bg-emerald-400 hover:bg-green-400 rounded-xl p-2" 
        onClick={()=>{
          dispatch(increment())
        }}>
          Increment
        </button>
        <button className="text-4xl border-2 bg-red-400 hover:bg-red-500 rounded-xl p-2"
        onClick={()=>{
          dispatch(decrement())
        }}>
          Decrement
        </button>
        <button className="text-4xl border-2 bg-orange-400 hover:bg-orange-500 rounded-xl p-2"
        onClick={()=>{
          dispatch(increaseByFive())
        }}>
          Increase by 5
        </button>
        <input type="number" name="" id="" className="bg-white text-black" onChange={(e)=>setAmt(e.target.value)}/>
        <button className="text-4xl border-2 bg-pink-400 hover:bg-pink-500 rounded-xl p-2"
        onClick={()=>{
          dispatch(decreaseByAmount(Number(amt)))
        }}>
          Decrease by {amt}
        </button>
      </div>
    </div>
  )
}

export default App
