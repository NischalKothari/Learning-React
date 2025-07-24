import { useState } from "react";
import Card from "./components/card";

function App() {
  let myObject = {
    name : "Nischal Kothari",
    age : 21
  }
  let newArr = [1,2,3]
  return (
    <>
      <p className="text-5xl font-bold underline text-white bg-red-400 mb-2 mt-2 flex justify-center items-center">
        Hello world!
      </p>
      <div className="flex justify-center items-center ">
        <Card username = "Nischal" age={21} price = {33}/>
        <Card />
      </div>
    </>
  );
}

export default App;
