import { ShoppingCart, Users, BarChart3, Zap, Shield, Globe } from "lucide-react";

export const features = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce Platform",
    description: "Complete online store with payment processing and inventory management.",
    image: "/feature-ecommerce.jpg"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer Management",
    description: "Advanced CRM with customer insights, support tickets, and communication tools.",
    image: "/feature-crm.jpg"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics & Reports",
    description: "Real-time business analytics with detailed sales and performance reports.",
    image: "/feature-analytics.jpg"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Automation",
    description: "Automate workflows, email marketing, and business processes.",
    image: "/feature-automation.jpg"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security",
    description: "Enterprise-grade security with SSL encryption and fraud protection.",
    image: "/feature-security.jpg"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    description: "Multi-currency support and international shipping capabilities.",
    image: "/feature-global.jpg"
  }
];