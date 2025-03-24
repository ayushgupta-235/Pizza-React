import Pizza from "./Pizza";

const Pizzas = ({ pizzas, addToCart, filter }) => {
  const filteredPizzas = pizzas.filter(pizza =>
    pizza.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="pizzas-container flex flex-wrap gap-4 justify-center mt-4">
      {filteredPizzas.length > 0 ? (
        filteredPizzas.map(pizza => (
          <Pizza key={pizza.id} pizza={pizza} addToCart={addToCart} />
        ))
      ) : (
        <p>No pizzas match your search.</p>
      )}
    </div>
  );
}


export const pizzasData = [
  {
    "id": 1,
    "name": "Margherita",
    "price": 8.99,
    "description": "Classic pizza with tomato sauce, mozzarella, and fresh basil.",
    "image": "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    "available": true
  },
  {
    "id": 2,
    "name": "Pepperoni",
    "price": 10.99,
    "description": "A popular choice with tomato sauce, mozzarella, and spicy pepperoni slices.",
    "image": "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    "available": true
  },
  {
    "id": 3,
    "name": "BBQ Chicken",
    "price": 12.49,
    "description": "BBQ sauce base with grilled chicken, red onions, and cilantro.",
    "image": "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    "available": false
  },
  {
    "id": 4,
    "name": "Vegetarian",
    "price": 9.99,
    "description": "A delicious combination of bell peppers, onions, mushrooms, and olives.",
    "image": "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    "available": true
  },
  {
    "id": 5,
    "name": "Hawaiian",
    "price": 11.49,
    "description": "Tomato sauce, mozzarella, ham, and pineapple.",
    "image": "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    "available": true
  },
  {
    "id": 6,
    "name": "Meat Lovers",
    "price": 13.99,
    "description": "A hearty pizza with pepperoni, sausage, bacon, and ham.",
    "image": "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    "available": false
  },
  {
    "id": 7,
    "name": "Four Cheese",
    "price": 10.99,
    "description": "A cheesy delight with mozzarella, cheddar, parmesan, and gorgonzola.",
    "image": "https://i0.wp.com/900degreespizza.com/wp-content/uploads/2019/10/plated-dish.jpg?fit=1024%2C683&ssl=1",
    "available": true
  }
];









export default Pizzas;