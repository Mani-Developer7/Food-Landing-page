import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Button from "../common/Button/Button";


export default function Footer() {
  return (
    <footer className="w-full bg-yellow-200 py-16 ">
      <div className="flex justify-around items-center w-full h-70">

        <div className="flex gap-20">
          <div>
            <h3 className="font-semibold text-lg mb-4">Delivery</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Order Products Faster</li>
              <li>Easier</li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Pricing</li>
              <li>Discounts</li>
              <li>Report a Bug</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Company</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Blog</li>
              <li>Our Mission</li>
              <li>Get in Touch</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Support</li>
              <li>Questions</li>
              <li>Customer Help</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl text-gray-900 mt-2">
          <FaFacebookF className="cursor-pointer hover:text-black" />
          <FaTwitter className="cursor-pointer hover:text-black" />
          <FaInstagram className="cursor-pointer hover:text-black" />
        </div>
        <Button className='rounded-none w-1.5' Isround />
      </div>
    </footer>
  );
}
