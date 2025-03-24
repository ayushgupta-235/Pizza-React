import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import Pizza from "./components/Pizza";
import Pizzas from "./components/Pizzas";
import Cart from "./components/Cart";
import { pizzasData } from './components/Pizzas';
import Navigation from './components/Navigation';

const App = () => {
  const [pizzas, setPizzasData] = useState(pizzasData);
  const [cart, setCart] = useState(new Map());
  const [filter, setFilter] = useState('');
  const [rotateBasket, setRotateBasket] = useState(false);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const newCart = new Map(prevCart);
      if (newCart.has(pizza.id)) {
        newCart.set(pizza.id, { ...pizza, quantity: newCart.get(pizza.id).quantity + 1 });
      } else {
        newCart.set(pizza.id, { ...pizza, quantity: 1 });
      }
      return newCart;
    });
    setRotateBasket(true);
    setTimeout(() => setRotateBasket(false), 2000);
  };

  const removeOneItem = (pizza) => {
    setCart((prevCart) => {
      const newCart = new Map(prevCart);
      if (newCart.get(pizza.id)?.quantity === 1) {
        newCart.delete(pizza.id);
      } else {
        newCart.set(pizza.id, { ...pizza, quantity: newCart.get(pizza.id).quantity - 1 });
      }
      return newCart;
    });
  };

  const removeWholeItem = (pizza) => {
    setCart((prevCart) => {
      const newCart = new Map(prevCart);
      newCart.delete(pizza.id);
      return newCart;
    });
  };

  const handleFilterChange = (filterContent) => setFilter(filterContent);
  const cartSize = Array.from(cart.values()).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Navigation size={cartSize} handleFilterChange={handleFilterChange} rotateBasket={rotateBasket} />

      <Routes>
        <Route path="/" element={<Home pizzas={pizzas} addToCart={addToCart} filter={filter} />} />
        <Route path="/pizzas/:id" element={<PizzaDetails pizzas={pizzas} addToCart={addToCart} />} />
        <Route path="/cart" element={
          <Cart 
            cart={cart} 
            addToCart={addToCart} 
            removeOneItem={removeOneItem} 
            removeWholeItem={removeWholeItem} 
          />
        } />
      </Routes>
    </>
  );
};

const Home = ({ pizzas, addToCart, filter }) => (
  <>
    <Pizzas pizzas={pizzas} addToCart={addToCart} filter={filter} />
  </>
);

const PizzaDetails = ({ pizzas, addToCart }) => {
  const { id } = useParams();
  const pizza = pizzas.find((p) => p.id === Number(id));
  return pizza ? <Pizza pizza={pizza} addToCart={addToCart} /> : <p>Pizza not found</p>;
};

export default App;
