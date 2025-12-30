import React, { useContext } from "react";
import { CartContext } from "../context/Bill";

function Card({ title, price, img }) {
  const { items, setItems } = useContext(CartContext);
  
  const addToCart = () => {
    setItems([...items, { title, price, img }]);
  };
  
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-2 bg-white/20 backdrop-blur-md text-white max-h-max flex flex-col justify-center items-center">
      <img
        className="w-75 h-70 object-fill"
        src={img}
        alt={title}
      />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-white-700 text-base">Price : ₹{price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button onClick={addToCart} className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-green-500">
          Add
        </button>
      </div>
    </div>
  );
}

export default Card;