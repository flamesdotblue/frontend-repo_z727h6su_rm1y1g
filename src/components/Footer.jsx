import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="about" className="border-t border-black/10 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-green-500 text-white shadow-md">
              <Leaf className="w-5 h-5" />
            </span>
            <span className="font-semibold text-lg tracking-tight text-stone-800">StreetMitra</span>
          </div>
          <p className="text-sm text-stone-700 max-w-sm">
            A digital bridge between street vendors and local customers. Simple, warm, and community-first.
          </p>
        </div>
        <div>
          <h4 className="font-medium text-stone-900 mb-3">For customers</h4>
          <ul className="space-y-2 text-sm text-stone-700">
            <li><a href="#features" className="hover:text-stone-900">How it works</a></li>
            <li><a href="#vendors" className="hover:text-stone-900">Discover vendors</a></li>
            <li><a href="#" className="hover:text-stone-900">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-stone-900 mb-3">For vendors</h4>
          <ul className="space-y-2 text-sm text-stone-700">
            <li><a href="#" className="hover:text-stone-900">Get listed</a></li>
            <li><a href="#" className="hover:text-stone-900">Vendor app</a></li>
            <li><a href="#" className="hover:text-stone-900">Support</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-stone-600 pb-8">
        © {new Date().getFullYear()} StreetMitra. Made with care for local communities.
      </div>
    </footer>
  );
};

export default Footer;
