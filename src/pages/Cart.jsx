import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQty, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <p className="text-gray-600">Your cart is empty.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>₦{(item.price * item.quantity).toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                className="w-16 border rounded p-1"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total: ₦{total.toLocaleString()}</h2>
        <div className="space-x-2">
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Clear Cart
          </button>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
