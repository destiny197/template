
import { motion } from "framer-motion";
import { Users, Star, Zap } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const EarlyUsersSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full glass"
          >
            <span className="text-sm font-medium">
              <Users className="w-4 h-4 inline-block mr-2" />
              Limited Beta Access
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be among our first
            <br />
            <span className="text-gradient">
              <TextGenerateEffect words="1000 users with BizzBuyNow" />
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Join our exclusive early access program and help shape the future of e-commerce selling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-6 glass rounded-lg"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-primary">Early Access</h3>
            <p className="text-gray-400">Be the first to experience our revolutionary platform</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-6 glass rounded-lg"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-primary">Beta Features</h3>
            <p className="text-gray-400">Access cutting-edge tools before anyone else</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-6 glass rounded-lg"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-primary">Community</h3>
            <p className="text-gray-400">Join an exclusive group of pioneering sellers</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EarlyUsersSection;
