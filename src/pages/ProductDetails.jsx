import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99,
    image: "https://picsum.photos/500?random=1",
    description: "High-quality wireless headphones with noise cancellation.",
    stock: 12,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199,
    image: "https://picsum.photos/500?random=2",
    description: "Track your fitness, health, and notifications on the go.",
    stock: 5,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 49,
    image: "https://picsum.photos/500?random=3",
    description: "Ergonomic RGB gaming mouse with customizable buttons.",
    stock: 20,
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = sampleProducts.find((p) => p.id === Number(id));
    setProduct(found || null);
  }, [id]);

  if (!product) {
    return <p className="text-gray-600">Product not found.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="bg-white p-6 rounded-xl shadow">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-2xl font-semibold text-indigo-600">${product.price}</p>
        <p
          className={`font-medium ${
            product.stock > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>

        <button
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition disabled:opacity-50"
          disabled={product.stock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
