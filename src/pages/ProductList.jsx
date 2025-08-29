import { useState } from "react";
import ProductCard from "../components/ProductCard";

const allProducts = [
  { id: 1, name: "Wireless Headphones", price: 99, image: "https://picsum.photos/300?random=1" },
  { id: 2, name: "Smart Watch", price: 199, image: "https://picsum.photos/300?random=2" },
  { id: 3, name: "Gaming Mouse", price: 49, image: "https://picsum.photos/300?random=3" },
  { id: 4, name: "Bluetooth Speaker", price: 79, image: "https://picsum.photos/300?random=4" },
  { id: 5, name: "Laptop Stand", price: 59, image: "https://picsum.photos/300?random=5" },
];

export default function ProductList() {
  const [search, setSearch] = useState("");

  const filteredProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full md:w-1/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
      />

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}
