import React from 'react';
import { Leaf, MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-green-500 text-white shadow-md">
            <Leaf className="w-5 h-5" />
          </span>
          <span className="font-semibold text-lg tracking-tight text-stone-800">
            StreetMitra
          </span>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-stone-700">
          <a href="#features" className="hover:text-stone-900 transition-colors">Features</a>
          <a href="#vendors" className="hover:text-stone-900 transition-colors">Vendors</a>
          <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden xs:flex items-center gap-1 text-stone-700 hover:text-stone-900 text-sm px-3 py-2 rounded-lg border border-black/10 bg-white/70 shadow-sm">
            <MapPin className="w-4 h-4" />
            Near me
          </button>
          <button className="text-sm px-3 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-md hover:shadow-lg transition-shadow">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
