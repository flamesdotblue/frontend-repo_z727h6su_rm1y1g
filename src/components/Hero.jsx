import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background tint */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,159,64,0.15),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(34,197,94,0.15),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 py-14 sm:py-20 flex flex-col items-center text-center gap-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-black/10 text-xs text-stone-700 shadow-sm">
          <span className="inline-flex p-1 rounded-full bg-gradient-to-r from-orange-400 to-green-500" />
          A warm way to shop local
        </span>

        <h1 className="text-3xl sm:text-5xl leading-tight font-semibold text-stone-900 max-w-3xl">
          Meet your neighbourhood vendors with StreetMitra
        </h1>
        <p className="text-stone-700 max-w-2xl">
          Discover fresh food, handmade goods, and daily essentials from trusted street vendors around you. Fair prices, friendly faces, zero hassle.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-stone-900 text-white shadow-md hover:shadow-lg transition-shadow">
            <ShoppingBag className="w-4 h-4" />
            Find local vendors
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-white text-stone-900 border border-black/10 shadow-sm hover:border-stone-300">
            Become a vendor
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Hero media card */}
        <div className="w-full mt-4">
          <div className="mx-auto max-w-4xl rounded-3xl overflow-hidden shadow-xl border border-black/10 bg-white">
            <img
              src="https://images.unsplash.com/photo-1558030117-9c5c6e9f960e?q=80&w=1600&auto=format&fit=crop"
              alt="Warm street market with local vendors"
              className="w-full h-64 sm:h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
