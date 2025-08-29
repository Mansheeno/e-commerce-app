import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState(850); // fallback in case API fails

  // Fetch exchange rate USD → NGN
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/USD?apikey=41d9a3ed6ff975b1a45028584ff70ef3`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.rates?.NGN) {
          setRate(data.rates.NGN);
        }
      })
      .catch(() => console.log("Currency API failed, using fallback rate"));
  }, []);

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-20">Loading products...</p>;

  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={{
              id: p.id,
              name: p.title,
              price: Math.round(p.price * rate), // convert USD → NGN
              image: p.image,
              description: p.description,
            }}
          />
        ))}
      </div>
    </div>
  );
}
