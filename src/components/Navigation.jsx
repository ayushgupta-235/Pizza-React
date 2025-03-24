import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";

const Navigation = ({ size, handleFilterChange, rotateBasket }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg">
      
      <Link to="/" className="text-3xl font-bold text-yellow-400 tracking-wide">
        🍕 PizzaHub
      </Link>

      
      <div className="relative w-1/3">
        <input
          type="text"
          onChange={(e) => handleFilterChange(e.target.value)}
          className="w-full px-4 py-2 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Search for pizzas..."
        />
        <Search className="absolute right-3 top-2 text-gray-500" size={20} />
      </div>

      
      <Link to="/cart" className="relative flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-full hover:bg-yellow-500 transition-all">
        <ShoppingCart size={24} className={`mr-2 ${rotateBasket ? "animate-spin" : ""}`} />
        <span className="font-semibold">Cart</span>
        {size > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {size}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navigation;
