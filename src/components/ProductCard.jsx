import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={product.image || "https://via.placeholder.com/300"}
        alt={product.name || "Product"}
        className="w-full h-48 object-contain rounded-xl"
      />
      <h2 className="text-lg font-semibold mt-2 line-clamp-1">{product.name}</h2>
      <p className="text-gray-500 font-medium">
        ₦{product.price.toLocaleString()}
      </p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}
