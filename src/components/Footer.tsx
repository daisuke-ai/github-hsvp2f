import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Elevate Global Ventures</h3>
            <p className="text-gray-300">Empowering communities, preserving culture, and building a brighter future together.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><Mail className="w-5 h-5 mr-2" /> info@elevateglobal.com</li>
              <li className="flex items-center"><Phone className="w-5 h-5 mr-2" /> +1 (555) 123-4567</li>
              <li className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> 123 Main St, City, State 12345</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
            <p className="text-gray-300 mb-4">If you share our vision of an inclusive, resilient society, reach out to learn how you can help make a difference.</p>
            <button className="btn-primary">Contact Us</button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">&copy; 2023 Elevate Global Ventures. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white transition-colors"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
