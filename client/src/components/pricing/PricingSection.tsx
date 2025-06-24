
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";

const PricingTier = ({
  name,
  price,
  commission,
  payout,
  description,
  features,
  isPopular,
}: {
  name: string;
  price: string;
  commission: string;
  payout: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-6 flex flex-col">
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-gray-400">/month</span>}
      </div>
      <div className="mb-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Commission:</span>
          <span className="text-white font-medium">{commission}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Payout Speed:</span>
          <span className="text-white font-medium">{payout}</span>
        </div>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="button-gradient w-full">
        Get Started
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Choose Your{" "}
          <span className="text-gradient font-medium">Seller Plan</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Select the perfect plan for your ecommerce business with competitive fees and fast payouts
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="Free"
          price="$0"
          commission="5%"
          payout="Weekly"
          description="Perfect for beginners and hobby sellers"
          features={[
            "Basic store setup",
            "Product listing tools",
            "Order management",
            "Email support",
            "Mobile responsive design"
          ]}
        />
        <PricingTier
          name="Advanced"
          price="$30"
          commission="2%"
          payout="Every 2 days"
          description="Ideal for growing vendors"
          features={[
            "Advanced analytics",
            "Custom branding",
            "Inventory management",
            "Priority support",
            "Marketing tools",
            "Multiple payment gateways"
          ]}
          isPopular
        />
        <PricingTier
          name="Enterprise"
          price="$70"
          commission="1%"
          payout="Anytime"
          description="Built for large, established sellers"
          features={[
            "Custom integrations",
            "Bulk operations",
            "Advanced reporting",
            "Dedicated account manager",
            "White-label options",
            "24/7 priority support"
          ]}
        />
      </div>
    </section>
  );
};
