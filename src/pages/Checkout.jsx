import { useCart } from "../context/CartContext";
import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [form, setForm] = useState({ name: "", email: "", address: "" });

  // --- PAYSTACK CONFIG ---
  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: form.email,
    amount: total * 100, // kobo
    publicKey: "pk_test_6809dbe22390fd935c97c513b0717173f1b50828",
  };
  const initializePaystack = usePaystackPayment(paystackConfig);

  // --- FLUTTERWAVE CONFIG ---
  const flutterwaveConfig = {
    public_key: "FLWPUBK_TEST-8184bbd2d474a6a01098461651a67646-X",
    tx_ref: Date.now().toString(),
    amount: total,
    currency: "NGN",
    payment_options: "card, ussd, banktransfer",
    customer: { email: form.email, name: form.name },
    customizations: { title: "ShopEase Payment", description: "Order Payment" },
  };
  const handleFlutterwavePayment = useFlutterwave(flutterwaveConfig);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePayment = (method) => {
    if (!form.name || !form.email || !form.address) {
      alert("Please fill all fields");
      return;
    }

    if (method === "paystack") {
      initializePaystack(
        (response) => {
          alert(`✅ Paystack Payment Successful! Ref: ${response.reference}`);
          clearCart();
        },
        (err) => alert("❌ Payment Failed")
      );
    } else if (method === "flutterwave") {
      handleFlutterwavePayment({
        callback: (response) => {
          alert(`✅ Flutterwave Payment Successful! Transaction ID: ${response.transaction_id}`);
          clearCart();
          closePaymentModal();
        },
        onClose: () => console.log("Flutterwave modal closed"),
      });
    } else if (method === "opay") {
      alert("🛠 OPay integration not implemented yet (test placeholder)");
      clearCart();
    }
  };

  if (cartItems.length === 0) {
    return <p className="text-center text-gray-600 mt-10">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Billing Form */}
      <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="3"
          required
        />
      </form>

      {/* Cart Summary */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-6">
        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between border-b py-1">
            <span>{item.name} × {item.quantity}</span>
            <span>₦{(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-2">Total: ₦{total.toLocaleString()}</div>
      </div>

      {/* Payment Options */}
      <div className="mt-6 space-y-2">
        <button
          onClick={() => handlePayment("paystack")}
          className="w-full flex items-center justify-center bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
        >
          <img
            src="/paystack.svg"
            alt="Paystack"
            className="h-6 mr-2"
          />
          Pay with Paystack
        </button>
        <button
          onClick={() => handlePayment("flutterwave")}
          className="w-full flex items-center justify-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
        >
          <img
            src="/flutterwave.png"
            alt="Flutterwave"
            className="h-6 mr-2"
          />
          Pay with Flutterwave
        </button>
        <button
          onClick={() => handlePayment("opay")}
          className="w-full flex items-center justify-center bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
        >
          <img
            src="/opay.png"
            alt="OPay"
            className="h-6 mr-2"
          />
          Pay with OPay
        </button>
      </div>
    </div>
  );
}
