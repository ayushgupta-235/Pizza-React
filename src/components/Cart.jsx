import { useCallback, useState } from "react";

const Cart = ({ cart, addToCart, removeWholeItem, removeOneItem }) => {
    const [cartArray,setCartArray] = useState(Array.from(cart.values()));  
    const [show,setShow] = useState(false);
    let total = cartArray.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);
     const onClickHandler = useCallback(()=>{
      setCartArray([])
      setShow(true);
     },[])
    return (
      <>
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Your Pizza Cart</h1>
        {cartArray.map((pizza) => (
          <div key={pizza.id} className="flex items-center bg-white p-4 shadow rounded-lg mb-4">
            <img src={pizza.image} alt={pizza.name} className="w-20 h-20 object-cover rounded-lg" />
            <div className="ml-4 flex-1">
              <p className="text-lg font-semibold">{pizza.name}</p>
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => removeOneItem(pizza)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  -
                </button>
                <span className="font-medium">{pizza.quantity}</span>
                <button
                  onClick={() => addToCart(pizza)}
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  +
                </button>
                <button
                  onClick={() => removeWholeItem(pizza)}
                  className="ml-4 px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  x
                </button>
                <span className="ml-auto font-semibold">${(pizza.price * pizza.quantity).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="text-right mt-6">
          <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
          <button onClick={onClickHandler} className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Order Now
          </button>
        </div>
      </div>
      {show && (
        <div className="p-4">
                  <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div class="flex">
          <div>
            <p class="font-bold">Your order has been successfully placed</p>
          </div>
        </div>
      </div>
        </div>
      )}
      </>
    );
  };
  
  export default Cart;
  