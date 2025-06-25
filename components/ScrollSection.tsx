"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const sections = [
    {
      number: "01",
      title: "Website Builder, eCommerce, Invoicing",
      description: "Manage your online presence and get paid globally."
    },
    {
      number: "02", 
      title: "CRM, Inventory, Customer Support",
      description: "Run your business workflows from a single unified dashboard."
    },
    {
      number: "03",
      title: "Subscriptions, HR, Manufacturing", 
      description: "Scale operations, automate renewals, and manage teams."
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-black">
      {sections.map((section, index) => (
        <ScrollSectionItem
          key={index}
          section={section}
          index={index}
          totalSections={sections.length}
        />
      ))}
    </div>
  );
};

const ScrollSectionItem = ({ 
  section, 
  index, 
  totalSections 
}: { 
  section: any; 
  index: number; 
  totalSections: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.2], [-100, 0]);
  const numberOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.1, 0.1, 0]);
  const numberX = useTransform(scrollYProgress, [0, 0.3], [200, 0]);

  return (
    <div 
      ref={ref}
      className="relative h-screen flex items-center justify-center px-4 md:px-8 lg:px-16"
    >
      {/* Large section number background */}
      <motion.div
        style={{ 
          opacity: numberOpacity,
          x: numberX
        }}
        className="absolute right-4 md:right-16 lg:right-32 top-1/2 -translate-y-1/2 pointer-events-none z-0"
      >
        <span className="text-[20vw] md:text-[15vw] lg:text-[12vw] font-bold text-white select-none">
          {section.number}
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ 
          opacity,
          x
        }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="text-left space-y-6 md:space-y-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#7AFF57] text-sm md:text-base lg:text-lg uppercase tracking-wider font-medium"
          >
            {section.title}
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
          >
            {section.description}
          </motion.h2>
        </div>
      </motion.div>

      {/* Progress indicator */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-2">
          {Array.from({ length: totalSections }).map((_, i) => (
            <motion.div
              key={i}
              className={`w-1 h-8 rounded-full transition-colors duration-300 ${
                i === index ? 'bg-[#7AFF57]' : 'bg-white/20'
              }`}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;