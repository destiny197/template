
"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";

const storeDesigns = [
  {
    name: "Minimalist Fashion Store",
    category: "Fashion & Apparel",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    color: "from-blue-500/20 to-purple-600/20"
  },
  {
    name: "Electronics Marketplace",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    color: "from-green-500/20 to-teal-600/20"
  },
  {
    name: "Artisan Crafts Store",
    category: "Handmade & Crafts",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    color: "from-orange-500/20 to-red-600/20"
  },
  {
    name: "Beauty & Cosmetics",
    category: "Health & Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
    color: "from-pink-500/20 to-rose-600/20"
  },
  {
    name: "Home & Garden",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    color: "from-emerald-500/20 to-cyan-600/20"
  },
  {
    name: "Sports & Fitness",
    category: "Sports Equipment",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    color: "from-indigo-500/20 to-blue-600/20"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Beautiful Store Designs</h2>
          <p className="text-muted-foreground text-lg">
            Choose from professionally designed templates for any business category
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {storeDesigns.map((design, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${design.color} opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                    <img
                      src={design.image}
                      alt={design.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-medium text-white/90 mb-2">{design.name}</h4>
                    <p className="text-sm text-white/60">{design.category}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {storeDesigns.map((design, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${design.color} opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                    <img
                      src={design.image}
                      alt={design.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-medium text-white/90 mb-2">{design.name}</h4>
                    <p className="text-sm text-white/60">{design.category}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
