import React from 'react';
import { MapPin, ShoppingBag, Leaf, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: MapPin,
    title: 'Discover nearby',
    text: 'Find authentic street food and essentials around the corner with precise location search.',
    accent: 'from-orange-400 to-orange-600',
  },
  {
    icon: ShoppingBag,
    title: 'Order ahead',
    text: 'Reserve items and pick up when you arrive. Save time and skip queues.',
    accent: 'from-green-400 to-green-600',
  },
  {
    icon: Leaf,
    title: 'Support local',
    text: 'Every purchase empowers small businesses and keeps neighbourhoods thriving.',
    accent: 'from-emerald-400 to-lime-500',
  },
  {
    icon: Shield,
    title: 'Trusted & transparent',
    text: 'Real reviews, verified vendors, and clear pricing for peace of mind.',
    accent: 'from-orange-400 to-green-500',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-wider text-stone-600">Why StreetMitra</span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-semibold text-stone-900">Built for local connections</h2>
          <p className="mt-3 text-stone-700 max-w-2xl mx-auto">
            A minimal, modern experience that brings you closer to the people who make your city special.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl bg-white border border-black/10 shadow-sm p-5 flex flex-col gap-3"
            >
              <span className={`inline-flex w-10 h-10 rounded-xl bg-gradient-to-br ${f.accent} text-white items-center justify-center shadow-md`}>
                <f.icon className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-semibold text-stone-900">{f.title}</h3>
              <p className="text-sm text-stone-700 leading-relaxed">{f.text}</p>
              <div className="mt-auto flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
