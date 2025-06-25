"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollSection = () => {
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
    <div className="relative bg-black w-full overflow-hidden">
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
    offset: ["start 0.8", "end 0.2"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const numberOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.08, 0.08, 0]);
  const numberX = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <div 
      ref={ref}
      className="relative h-screen flex items-center justify-start px-8 md:px-16 lg:px-24 bg-black overflow-hidden"
    >
      {/* Large section number background */}
      <motion.div
        style={{ 
          opacity: numberOpacity,
          x: numberX
        }}
        className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 pointer-events-none z-0"
      >
        <span className="text-[25vw] md:text-[18vw] lg:text-[14vw] font-bold text-white select-none leading-none">
          {section.number}
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ 
          opacity,
          x
        }}
        className="relative z-10 max-w-3xl"
      >
        <div className="text-left space-y-6 md:space-y-8">
          <motion.p 
            className="text-[#7AFF57] text-sm md:text-base lg:text-lg uppercase tracking-wider font-medium"
          >
            {section.title}
          </motion.p>
          
          <motion.h2
            className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight"
          >
            {section.description}
          </motion.h2>
        </div>
      </motion.div>

      {/* Progress indicator */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-3">
          {Array.from({ length: totalSections }).map((_, i) => (
            <motion.div
              key={i}
              className={`w-1 h-12 rounded-full transition-colors duration-500 ${
                i === index ? 'bg-[#7AFF57]' : 'bg-white/20'
              }`}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;