
import { ShoppingCart, Package, TrendingUp, Shield } from "lucide-react";

export const features = [
  {
    title: "Product Management",
    description: "Easily add, edit, and organize your products with our intuitive product management system.",
    icon: <Package className="w-6 h-6" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
  },
  {
    title: "Order Processing",
    description: "Streamlined order management system to track and fulfill customer orders efficiently.",
    icon: <ShoppingCart className="w-6 h-6" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png"
  },
  {
    title: "Sales Analytics",
    description: "Comprehensive sales reports and analytics to help you understand your business performance.",
    icon: <TrendingUp className="w-6 h-6" />,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png"
  },
  {
    title: "Secure Payments",
    description: "Multiple payment gateways with secure checkout process to protect your customers' data.",
    icon: <Shield className="w-6 h-6" />,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png"
  }
];
