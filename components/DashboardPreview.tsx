
import { motion } from "framer-motion";
import { BarChart3, ShoppingBag, Users, TrendingUp } from "lucide-react";

const DashboardPreview = () => {
  const storeDesigns = [
    {
      name: "Minimalist Store",
      category: "Fashion",
      image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Electronics Hub",
      category: "Technology",
      image: "/lovable-uploads/7cc724d4-3e14-4e7c-9e7a-8d613fde54d0.png",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Artisan Marketplace",
      category: "Handmade",
      image: "/lovable-uploads/bb50362c-6879-4868-bbc9-c6e051fd8d7d.png",
      color: "from-orange-500 to-red-600"
    },
    // Duplicate items for seamless loop
    {
      name: "Minimalist Store",
      category: "Fashion",
      image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Electronics Hub",
      category: "Technology",
      image: "/lovable-uploads/7cc724d4-3e14-4e7c-9e7a-8d613fde54d0.png",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Artisan Marketplace",
      category: "Handmade",
      image: "/lovable-uploads/bb50362c-6879-4868-bbc9-c6e051fd8d7d.png",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="designs" className="py-24 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Store Designs
            <br />
            <span className="text-gradient">Built for conversion</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of professionally designed store templates, optimized for sales and mobile-responsive.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Store Design Gallery */}
        <div className="relative mb-16 overflow-hidden">
          <div className="flex animate-scroll-x space-x-8 w-max">
            {storeDesigns.map((design, index) => (
              <motion.div
                key={`${design.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group cursor-pointer flex-shrink-0 w-80"
              >
                <div className="glass glass-hover rounded-xl overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${design.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <img
                    src={design.image}
                    alt={design.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6 relative z-10">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {design.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{design.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
