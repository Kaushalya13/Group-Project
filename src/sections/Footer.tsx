import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="contact" className="bg-lush-green bg-black text-white">
      <div className="container mx-auto px-6 pt-20 pb-10">
        {/* Newsletter */}
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl md:text-4xl font-bold text-white">
            Plan Your Escape
          </h2>
          <p className="mt-3 text-gray-400">
            Subscribe for travel tips, exclusive offers, and news from Unseen Kalutara.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full text-black bg-white focus:outline-none focus:ring-2 focus:ring-earthy-brown"
            />
            <button
              type="submit"
              className="bg-earthy-brown bg-white text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left ">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white font-lora mb-4">
              Unseen Kalutara
            </h3>
            <p className="text-sm leading-relaxed">
              Your soulful sanctuary. A journey into nature, culture, and wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2">
              <li><a href="#attractions" className="hover:text-earthy-brown transition">Attractions</a></li>
              <li><a href="#walks" className="hover:text-earthy-brown transition">Walks</a></li>
              <li><a href="#cuisine" className="hover:text-earthy-brown transition">Cuisine</a></li>
              <li><a href="#wellness" className="hover:text-earthy-brown transition">Wellness</a></li>
              <li><a href="#wildlife" className="hover:text-earthy-brown transition">Wildlife</a></li>
              <li><a href="#culture" className="hover:text-earthy-brown transition">Culture</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider">
              Info
            </h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-earthy-brown transition">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-earthy-brown transition">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-earthy-brown transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-5">
              <a href="#" aria-label="Facebook" className="hover:text-earthy-brown transition"><FiFacebook size={22} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-earthy-brown transition"><FiInstagram size={22} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-earthy-brown transition"><FiTwitter size={22} /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700/50 mt-12 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Unseen Kalutara. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;