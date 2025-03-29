import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";

const Pizzas = ({ pizzas, addToCart, filter }) => {
  const [veg, setVeg] = useState(true);
  const [nonVeg, setNonVeg] = useState(true);
  const [filteredPizzas, setFilteredPizzas] = useState([]);


  useEffect(() => {
    const newFilteredPizzas = pizzas.filter((pizza) => {
      const nameMatch = pizza.name.toLowerCase().includes(filter.toLowerCase());
      const vegMatch =
        (pizza.isVegetarian && veg) || (!pizza.isVegetarian && nonVeg);
      return nameMatch && vegMatch;
    });
    setFilteredPizzas(newFilteredPizzas);
  }, [pizzas, filter, veg, nonVeg]);

  return (
    <div className="pizzas-component">
      <div className="filter-controls flex gap-4 justify-center mt-4">
        <label>
          <input
            type="checkbox"
            checked={veg}
            onChange={(e) => setVeg(e.target.checked)}
          />
          Vegetarian
        </label>
        <label>
          <input
            type="checkbox"
            checked={nonVeg}
            onChange={(e) => setNonVeg(e.target.checked)}
          />
          Non-Vegetarian
        </label>
      </div>
      <div className="pizzas-container flex flex-wrap gap-4 justify-center mt-4">
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} addToCart={addToCart} />
          ))
        ) : (
          <p>No pizzas match your search.</p>
        )}
      </div>
    </div>
  );
};

export const pizzasData = [
  {
    id: 1,
    name: "Margherita",
    price: 8.99,
    description:
      "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
    image:
      "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    available: true,
    isVegetarian: true,
  },
  {
    id: 2,
    name: "Pepperoni",
    price: 10.99,
    description:
      "A popular choice with tomato sauce, mozzarella, and spicy pepperoni slices.",
    image:
      "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    available: true,
    isVegetarian: false,
  },
  {
    id: 3,
    name: "BBQ Chicken",
    price: 12.49,
    description:
      "BBQ sauce base with grilled chicken, red onions, and cilantro.",
    image:
      "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    available: false,
    isVegetarian: false,
  },
  {
    id: 4,
    name: "Vegetarian",
    price: 9.99,
    description:
      "A delicious combination of bell peppers, onions, mushrooms, and olives.",
    image:
      "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    available: true,
    isVegetarian: true,
  },
  {
    id: 5,
    name: "Hawaiian",
    price: 11.49,
    description: "Tomato sauce, mozzarella, ham, and pineapple.",
    image:
      "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    available: true,
    isVegetarian: false,
  },
  {
    id: 6,
    name: "Meat Lovers",
    price: 13.99,
    description:
      "A hearty pizza with pepperoni, sausage, bacon, and ham.",
    image:
      "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    available: false,
    isVegetarian: false,
  },
  {
    id: 7,
    name: "Four Cheese",
    price: 10.99,
    description:
      "A cheesy delight with mozzarella, cheddar, parmesan, and gorgonzola.",
    image:
      "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    available: true,
    isVegetarian: true,
  },
];

export default Pizzas;
