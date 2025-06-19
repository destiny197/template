
import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";

const PaymentCarousel = () => {
  const paymentMethods = [
    { 
      name: "Flutterwave", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flutterwave_Logo.png/320px-Flutterwave_Logo.png",
      alt: "Flutterwave"
    },
    { 
      name: "PayPal", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/320px-PayPal.svg.png",
      alt: "PayPal"
    },
    { 
      name: "Apple Pay", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/320px-Apple_Pay_logo.svg.png",
      alt: "Apple Pay"
    },
    { 
      name: "Google Pay", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/320px-Google_Pay_Logo.svg.png",
      alt: "Google Pay"
    },
    { 
      name: "Visa", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/320px-Visa_Inc._logo.svg.png",
      alt: "Visa"
    },
    { 
      name: "Mastercard", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/320px-Mastercard-logo.svg.png",
      alt: "Mastercard"
    },
    { 
      name: "Stripe", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/320px-Stripe_Logo%2C_revised_2016.svg.png",
      alt: "Stripe"
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
