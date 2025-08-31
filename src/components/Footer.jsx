export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 px-4 mt-10">
      <div className="grid gap-8 text-center md:text-left md:grid-cols-3">
        {/* About Us */}
        <div>
          <h2 className="font-bold text-lg">About Us</h2>
          <p className="text-sm mt-2 max-w-xs mx-auto md:mx-0">
            ShopEase is your go-to platform for the latest fashion, tech, and lifestyle products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-bold text-lg">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-bold text-lg">Contact</h2>
          <p className="text-sm mt-2">📧 support@shopease.com</p>
          <p className="text-sm">📍 Plateau Jos, Nigeria</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs mt-6 border-t border-gray-700 pt-4">
        © 2025 MyShop. All rights reserved.
      </div>
    </footer>
  );
}
