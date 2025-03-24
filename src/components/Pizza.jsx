import { Link } from "react-router-dom";

const Pizza = ({ pizza, addToCart }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      
      <img src={pizza.image} alt={pizza.name} className="w-full h-56 object-cover" />

      
      <div className="p-5 flex flex-col gap-3">
       
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">{pizza.name}</h2>
          <span className="text-lg font-semibold text-green-600">${pizza.price}</span>
        </div>

       
        <p className="text-gray-600 text-sm leading-relaxed">{pizza.description}</p>


        {pizza.available ? (
          <button
            onClick={() => addToCart(pizza)}
            className="w-full mt-3 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all"
          >
            Add to Cart 🍕
          </button>
        ) : (
          <span className="text-red-500 text-center font-semibold">Not available 😞</span>
        )}
      </div>
    </div>
  );
};


export default Pizza;
