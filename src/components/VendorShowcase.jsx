import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const vendors = [
  {
    name: 'Amma’s Idli Cart',
    tag: 'South Indian • Breakfast',
    location: 'Church Street',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Fresh Greens Basket',
    tag: 'Produce • Seasonal',
    location: 'Lal Bagh Gate',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Masala Chai Corner',
    tag: 'Tea • Snacks',
    location: 'MG Road',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1600&auto=format&fit=crop',
  },
];

const VendorCard = ({ vendor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative overflow-hidden rounded-3xl bg-white border border-black/10 shadow-sm"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div>
            <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/90 text-[11px] text-stone-800 shadow">
              <MapPin className="w-3.5 h-3.5" /> {vendor.location}
            </div>
          </div>
          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-400/95 text-[12px] text-stone-900 font-medium shadow">
            <Star className="w-3.5 h-3.5 fill-current" /> {vendor.rating}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-stone-900 font-semibold text-base">{vendor.name}</h3>
        <p className="text-sm text-stone-700">{vendor.tag}</p>
        <button className="mt-3 inline-flex items-center justify-center px-3 py-2 text-sm rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition-colors">
          View vendor
        </button>
      </div>
    </motion.div>
  );
};

const VendorShowcase = () => {
  return (
    <section id="vendors" className="py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-stone-900">Neighbourhood favourites</h2>
            <p className="mt-2 text-stone-700">Handpicked stalls with the warmest reviews.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm text-stone-900 hover:opacity-80">See all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {vendors.map((v) => (
            <VendorCard key={v.name} vendor={v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorShowcase;
