"use client";

import { motion } from "framer-motion";
import { ArrowRight, Command, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import PaymentCarousel from "@/components/PaymentCarousel";
import DashboardPreview from "@/components/DashboardPreview";
import EarlyUsersSection from "@/components/EarlyUsersSection";
import FloatingCookie from "@/components/FloatingCookie";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Store className="w-4 h-4 inline-block mr-2" />
            The ultimate ecommerce platform for vendors & dropshippers
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="Build your ecommerce" />
            </span>
            <br />
            <span className="text-white font-medium">
              empire with <span className="text-primary"><TextGenerateEffect words="BizzBuyNow" /></span>
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            The flexible platform that empowers vendors and dropshippers to list products, manage inventory, and maximize sales with ease.{" "}
            <span className="text-white">Start selling in minutes.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient">
              Start Selling Now
            </Button>
            <Button size="lg" variant="link" className="text-white group transition-all duration-300 hover:text-primary">
              View Store Designs <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="glass rounded-xl overflow-hidden">
            <img
              src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
              alt="BizzBuyNow Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Dashboard Preview Section */}
      <DashboardPreview />

      {/* Early Users Section */}
      <EarlyUsersSection />

      {/* Payment Carousel */}
      <PaymentCarousel />

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />

      {/* Floating Cookie */}
      <FloatingCookie />
    </div>
  );
}