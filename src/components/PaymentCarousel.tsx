
import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";

const PaymentCarousel = () => {
  const paymentMethods = [
    { 
      name: "Flutterwave", 
      logo: "https://flutterwave.com/images/logo/full.svg",
      alt: "Flutterwave"
    },
    { 
      name: "PayPal", 
      logo: "https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png",
      alt: "PayPal"
    },
    { 
      name: "Apple Pay", 
      logo: "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg",
      alt: "Apple Pay"
    },
    { 
      name: "Google Pay", 
      logo: "https://developers.google.com/pay/api/images/brand-guidelines/logo_gpay_color.svg",
      alt: "Google Pay"
    },
    { 
      name: "Visa", 
      logo: "https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg",
      alt: "Visa"
    },
    { 
      name: "Mastercard", 
      logo: "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_circles_92px_2x.png",
      alt: "Mastercard"
    },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
          >
            <span className="text-sm font-medium">
              <CreditCard className="w-4 h-4 inline-block mr-2" />
              Flexible Payment Solutions
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Accept payments from
            <br />
            <span className="text-gradient">anywhere in the world</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible payment processing that grows with your business. Support for multiple payment methods ensures you never miss a sale.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1920]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...paymentMethods, ...paymentMethods, ...paymentMethods].map((payment, index) => (
              <motion.div
                key={`${payment.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={payment.logo} 
                  alt={payment.alt}
                  className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaymentCarousel;
