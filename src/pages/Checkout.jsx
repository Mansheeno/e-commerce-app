export default function Checkout() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Full Name"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Address"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 col-span-2"
        />
        <input
          type="text"
          placeholder="City"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Postal Code"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 col-span-2"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
