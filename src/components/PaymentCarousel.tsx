
import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";

const PaymentCarousel = () => {
  const paymentMethods = [
    { 
      name: "Flutterwave", 
      logo: "https://logos-world.net/wp-content/uploads/2023/02/Flutterwave-Logo.png",
      alt: "Flutterwave"
    },
    { 
      name: "PayPal", 
      logo: "https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png",
      alt: "PayPal"
    },
    { 
      name: "Apple Pay", 
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Apple-Pay-Logo.png",
      alt: "Apple Pay"
    },
    { 
      name: "Google Pay", 
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Pay-Logo.png",
      alt: "Google Pay"
    },
    { 
      name: "Visa", 
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png",
      alt: "Visa"
    },
    { 
      name: "Mastercard", 
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Mastercard-Logo.png",
      alt: "Mastercard"
    },
    { 
      name: "Verve", 
      logo: "https://seeklogo.com/images/V/verve-logo-4F4E531F24-seeklogo.com.png",
      alt: "Verve"
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
