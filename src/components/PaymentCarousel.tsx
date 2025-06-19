
import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";

const PaymentCarousel = () => {
  const paymentMethods = [
    { 
      name: "Flutterwave", 
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDI0MCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMjAgNDBMMTIwIDIwMCIgc3Ryb2tlPSIjRkY2NjAwIiBzdHJva2Utd2lkdGg9IjgiLz4KPHA+CjxyZWN0IHg9IjQwIiB5PSI4MCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI4MCIgcng9IjQwIiBmaWxsPSIjRkY2NjAwIi8+Cjx0ZXh0IHg9IjEyMCIgeT0iMTMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCI+RjwvdGV4dD4KPC9zdmc+",
      alt: "Flutterwave"
    },
    { 
      name: "PayPal", 
      logo: "https://cdn.worldvectorlogo.com/logos/paypal-2.svg",
      alt: "PayPal"
    },
    { 
      name: "Apple Pay", 
      logo: "https://cdn.worldvectorlogo.com/logos/apple-pay-payment-mark.svg",
      alt: "Apple Pay"
    },
    { 
      name: "Google Pay", 
      logo: "https://cdn.worldvectorlogo.com/logos/google-pay-2.svg",
      alt: "Google Pay"
    },
    { 
      name: "Visa", 
      logo: "https://cdn.worldvectorlogo.com/logos/visa-10.svg",
      alt: "Visa"
    },
    { 
      name: "Mastercard", 
      logo: "https://cdn.worldvectorlogo.com/logos/mastercard-6.svg",
      alt: "Mastercard"
    },
    { 
      name: "Verve", 
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDI0MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iMTUwIiByeD0iMTIiIGZpbGw9IiMwMDY2RkYiLz4KPHA+Cjx0ZXh0IHg9IjEyMCIgeT0iODUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIj5WRVJWRSA8L3RleHQ+Cjwvc3ZnPg==",
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
              x: [0, -1680]
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
                  className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
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
